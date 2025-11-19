import nodemailer from 'nodemailer';
import type { Transporter, SendMailOptions } from 'nodemailer';

export class NodemailerAdapter {
  private transporter: Transporter;

  constructor(options: any) {
    this.transporter = nodemailer.createTransport(options);
  }

  async send(options: {
    from: string;
    to: string | string[];
    subject: string;
    html: string;
    text?: string;
  }) {
    return this.transporter.sendMail({
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });
  }
}
