import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Identidad() {
  return (
    <section id="identidad" className="bg-rema-cream-warm/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-rema-petroleum md:text-4xl">
            Nuestra identidad
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-rema-stone md:text-lg">
            <p>
              REMA Maule nace desde la convicción de que la música ha sido uno
              de los principales motores de articulación cultural de la región.
              Sobre esa experiencia construimos una cooperativa abierta e
              interdisciplinaria que integra todas las expresiones artísticas y
              creativas.
            </p>
            <p>
              Nuestro propósito no es reemplazar a los sectores existentes, sino
              generar un espacio donde la música dialogue con el teatro, la
              danza, las artes visuales, el audiovisual, la literatura, el
              patrimonio, el diseño, la artesanía y los nuevos medios,
              promoviendo proyectos colaborativos que fortalezcan el desarrollo
              cultural y económico del Maule.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
