import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 456,
  secure: true,
  auth: {
    user: process.env.USER_AUTH,
    pass: process.env.USER_PASS,
  },
});

export const sendEmail = async (email: string, name: string, link: string) => {
  let error = false;

  try {
    await transporter.sendMail({
      from: '"Verificación de correo" <coyotinder@gmail.com>',
      to: email,
      subject: "Verificación de correo",
      html: `
        <div style="background-color: #f2f2f2; padding: 30px;">
          <h2 style="color: rgb(255, 164, 191); text-align: center;">¡Bienvenido(a) ${name}!</h2>
          <p style="color: #666; font-size: 16px; text-align: justify;">
            Para confirmar tu cuenta, por favor da click en el siguiente enlace:
          </p>
          <p style="color: #666; font-size: 16px; text-align: justify;">
            <a href="${link}">${link}</a>
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.log("error puto 1");
    error = true;
    console.log(err);
  }

  return error;
};
