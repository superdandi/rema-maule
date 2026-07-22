"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";

interface OceanBackgroundProps {
  className?: string;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function OceanBackground({ className }: OceanBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [motionAllowed] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    if (!motionAllowed) return;
    if (!hasWebGL()) return;

    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let water: Water | null = null;
    let sky: Sky | null = null;
    let renderTarget: THREE.WebGLRenderTarget | null = null;
    let rafId = 0;
    let lastTime = performance.now();
    let isVisible = true;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;

    const init = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.28;
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.objectFit = "cover";
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(55, width / height, 1, 20000);
      camera.position.set(30, 30, 100);

      const sun = new THREE.Vector3();
      const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

      water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
          "/rema-maule/waternormals.jpg",
          (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xd0560f,
        waterColor: 0x0a2c4d,
        distortionScale: 3.7,
        fog: false,
      });
      water.rotation.x = -Math.PI / 2;
      scene.add(water);

      sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const skyUniforms = sky.material.uniforms;
      skyUniforms["turbidity"].value = 10;
      skyUniforms["rayleigh"].value = 2;
      skyUniforms["mieCoefficient"].value = 0.005;
      skyUniforms["mieDirectionalG"].value = 0.8;
      skyUniforms["cloudCoverage"].value = 0.4;
      skyUniforms["cloudDensity"].value = 0.5;
      skyUniforms["cloudElevation"].value = 0.5;

      const updateSun = () => {
        const elevation = 2;
        const azimuth = 180;
        const phi = THREE.MathUtils.degToRad(90 - elevation);
        const theta = THREE.MathUtils.degToRad(azimuth);
        sun.setFromSphericalCoords(1, phi, theta);
        sky!.material.uniforms["sunPosition"].value.copy(sun);
        water!.material.uniforms["sunDirection"].value
          .copy(sun)
          .normalize();

        if (renderTarget) renderTarget.dispose();
        const pmremGenerator = new THREE.PMREMGenerator(renderer!);
        const sceneEnv = new THREE.Scene();
        sceneEnv.add(sky!);
        renderTarget = pmremGenerator.fromScene(sceneEnv);
        scene!.add(sky!);
        scene!.environment = renderTarget.texture;
        pmremGenerator.dispose();
      };

      updateSun();

      const handleResize = () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (camera && renderer) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      };

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(container);
      } else {
        window.addEventListener("resize", handleResize);
      }

      if (typeof IntersectionObserver !== "undefined") {
        intersectionObserver = new IntersectionObserver(
          ([entry]) => {
            isVisible = entry.isIntersecting;
          },
          { threshold: 0 }
        );
        intersectionObserver.observe(container);
      }

      const animate = () => {
        rafId = requestAnimationFrame(animate);
        if (!isVisible || !renderer || !scene || !camera || !water || !sky)
          return;
        const now = performance.now();
        const delta = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;
        water.material.uniforms["time"].value += delta;
        sky.material.uniforms["time"].value = now / 1000;
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();

      if (water) {
        water.geometry.dispose();
        const mirrorSampler = water.material.uniforms["mirrorSampler"]
          ?.value as THREE.Texture | undefined;
        mirrorSampler?.dispose();
        water.material.dispose();
      }
      sky?.material.dispose();
      sky?.geometry.dispose();
      renderTarget?.dispose();

      if (scene) scene.environment = null;

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentElement) {
          renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
      }
    };
  }, [motionAllowed]);

  return (
    <div ref={containerRef} className={className}>
      <div className="absolute inset-0 bg-gradient-to-br from-rema-petroleum via-rema-petroleum-light to-rema-terracotta" />
    </div>
  );
}
