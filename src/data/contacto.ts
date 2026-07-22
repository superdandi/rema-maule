export const contacto = {
  email: "contacto@remamaule.cl",
  whatsappNumero: "56900000000",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumero}`;
  },
  instagram: "https://instagram.com/remamaule",
  facebook: "",
  youtube: "",
  formularioInscripcion: "https://forms.gle/GwsSFR45EFwvZzt59",
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/remamaule", icono: "Instagram" },
    { nombre: "Facebook", url: "", icono: "Facebook" },
    { nombre: "YouTube", url: "", icono: "Youtube" },
  ],
};

// Nota: reemplaza los valores de email, whatsappNumero y redes por los oficiales de REMA Maule.
