import { Resend } from 'resend';

const resend = new Resend("re_cvnsCxLN_AWqktGWXWK88juAy9yLaYHSN");

export default async function sendEmail(req, res) {
  console.log(req.body)
  const {body: {
    nome,
    email,
    assunto,
    mensagem
  }} = req;
  const { data, error } = await resend.emails.send({
    from: 'Site Bri <onboarding@resend.dev>',
    to: ['alexxmirandaa@gmail.com'],
    subject: 'Hello world',
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
};