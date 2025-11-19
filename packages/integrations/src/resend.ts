import { Resend } from 'resend';

export class ResendAdapter {
  private client: Resend;

  constructor(apiKey: string) {
    this.client = new Resend(apiKey);
  }

  async send(options: {
    from: string;
    to: string | string[];
    subject: string;
    html: string;
    text?: string;
  }) {
    return this.client.emails.send({
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });
  }
}
