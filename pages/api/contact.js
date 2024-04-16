import { Resend } from "resend";
import Cors from "cors";

const resend = new Resend("re_cvnsCxLN_AWqktGWXWK88juAy9yLaYHSN");

const cors = Cors({
  origin: "https://brielab.com.br",
  methods: ["POST", "GET", "HEAD"],
});

export default async function sendEmail(req, res) {
  const {
    body: { nome, email, assunto, mensagem },
  } = req;

  cors(res, req, async () => {
    const { data, error } = await resend.emails.send({
      from: "Site Bri <onboarding@resend.dev>",
      to: ["alexxmirandaa@gmail.com"],
      subject: "Hello world",
      text: `
        nome: ${nome} \n
        email: ${email} \n
        assunto: ${assunto} \n
        mensagem: ${mensagem} \n
      `,
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  });
}
