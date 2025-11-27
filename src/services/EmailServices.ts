import emailjs from "@emailjs/browser";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const response = await emailjs.send(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        message: data.message,
        title: "Nuevo mensaje desde el formulario",
        time: new Date().toLocaleString("es-CO"),
      },
      publicKey
    );

    console.log("📨 Email enviado:", response);
    return { ok: true };
  } catch (err) {
    console.error("❌ Error enviando correo:", err);
    return { ok: false };
  }
};
