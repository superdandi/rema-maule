export const contacto = {
  email: "remamaule@gmail.com",
  whatsappNumero: "56991273395",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumero}`;
  },
  instagram: "https://www.instagram.com/remamaule/",
  facebook: "",
  youtube: "",
  formularioInscripcion: "https://forms.gle/GwsSFR45EFwvZzt59",
  redes: [
    { nombre: "Instagram", url: "https://www.instagram.com/remamaule/", icono: "Instagram" },
    { nombre: "Facebook", url: "", icono: "Facebook" },
    { nombre: "YouTube", url: "", icono: "Youtube" },
  ],
};

// Nota: ajusta Facebook y YouTube en "redes" cuando tengas URLs oficiales.
