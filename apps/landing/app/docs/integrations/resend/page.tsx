export default function ResendPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Resend Integration</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Send emails using Resend.
      </p>

      <h2>Installation</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4">
        npm install @weaver/email-integrations resend
      </div>

      <h2>Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
        <pre>{`import { ResendAdapter } from '@weaver/email-integrations';
import { Resend } from 'resend';
import { MyEmail } from './emails/my-email';

const resend = new Resend('re_123456789');
const adapter = new ResendAdapter('re_123456789');

await adapter.send({
  from: 'onboarding@resend.dev',
  to: 'user@example.com',
  subject: 'Hello World',
  react: <MyEmail />,
});`}</pre>
      </div>
    </div>
  );
}
