export default function NodemailerPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Nodemailer Integration</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Send emails using any SMTP provider via Nodemailer.
      </p>

      <h2>Installation</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4">
        npm install @weaver/email-integrations nodemailer
      </div>

      <h2>Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
        <pre>{`import { NodemailerAdapter } from '@weaver/email-integrations';
import { MyEmail } from './emails/my-email';

const adapter = new NodemailerAdapter({
  transport: {
    host: 'smtp.example.com',
    port: 587,
    auth: {
      user: 'user',
      pass: 'pass',
    },
  },
});

await adapter.send({
  from: 'sender@example.com',
  to: 'user@example.com',
  subject: 'Hello World',
  react: <MyEmail />,
});`}</pre>
      </div>
    </div>
  );
}
