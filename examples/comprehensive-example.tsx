import { Html, Container, Heading, Text, Button, Link, Image, Hr, Spacer, render } from 'weaver-email-core';
import { 
  Container as EmailContainer,
  Heading as EmailHeading,
  Text as EmailText,
  Button as EmailButton,
  Link as EmailLink,
  Image as EmailImage,
  Hr as EmailHr,
  Spacer as EmailSpacer
} from 'weaver-email-components';

// Example: Welcome Email with all new components
const WelcomeEmail = ({ name, imageUrl }: { name: string; imageUrl: string }) => (
  <Html>
    <EmailContainer maxWidth={600}>
      <EmailImage 
        src={imageUrl} 
        alt="Welcome Banner" 
        width={600}
        className="rounded-lg"
      />
      
      <EmailSpacer height={30} />
      
      <EmailHeading as="h1" className="text-center text-gray-900">
        Welcome, {name}!
      </EmailHeading>
      
      <EmailText className="text-lg text-gray-600">
        We're thrilled to have you on board. Get started by exploring our platform and discovering all the amazing features we have to offer.
      </EmailText>
      
      <EmailHr />
      
      <EmailHeading as="h2" className="text-xl font-semibold">
        Quick Links
      </EmailHeading>
      
      <EmailText>
        <EmailLink href="https://example.com/docs">
          📚 Read the Documentation
        </EmailLink>
      </EmailText>
      
      <EmailText>
        <EmailLink href="https://example.com/tutorials">
          🎓 Watch Tutorials
        </EmailLink>
      </EmailText>
      
      <EmailSpacer height={20} />
      
      <EmailButton 
        href="https://example.com/dashboard"
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold"
      >
        Go to Dashboard
      </EmailButton>
      
      <EmailSpacer height={40} />
      
      <EmailHr className="border-gray-300" />
      
      <EmailText className="text-sm text-gray-500 text-center">
        © 2025 Your Company. All rights reserved.
      </EmailText>
    </EmailContainer>
  </Html>
);

// Render the email
console.log('=== Welcome Email Example ===');
console.log(render(<WelcomeEmail name="John Doe" imageUrl="https://via.placeholder.com/600x200" />));
