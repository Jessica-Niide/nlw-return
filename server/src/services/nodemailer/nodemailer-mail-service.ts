import nodemailer from 'nodemailer';
import { MailService, SendMailData } from "../mail-service";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2da0e57376852f",
    pass: "db0035853df3d8"
  }
});

export class NodemailerMailService implements MailService {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: 'Equipe FeedGet <oi@feedget.com>',
    to: 'Jessica Niide <jessica.niide@gmail.com>',
    subject,
    html: body,
  });

  }
}