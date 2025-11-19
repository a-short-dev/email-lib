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

// Advanced Tailwind CSS Example showcasing all new features
const AdvancedTailwindEmail = ({ name, imageUrl }: { name: string; imageUrl: string }) => (
  <Html>
    <EmailContainer maxWidth={600} className="bg-gray-50 p-8">
      {/* Hero with opacity modifiers */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg">
        <EmailHeading as="h1" className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Welcome, {name}!
        </EmailHeading>
        <EmailText className="text-lg text-gray-600 leading-relaxed mt-2">
          Experience the power of Tailwind CSS in emails
        </EmailText>
      </div>
      
      <EmailSpacer height={30} />
      
      {/* Arbitrary values example */}
      <div className="w-[550px] bg-white p-[24px] rounded-[12px]">
        <EmailHeading as="h2" className="text-2xl font-bold text-indigo-600 mb-4">
          ✨ New Features
        </EmailHeading>
        
        {/* Complete color palette */}
        <EmailText className="text-base text-slate-700 mb-3">
          <strong className="text-emerald-600">✓</strong> 220+ colors across 22 color families
        </EmailText>
        
        <EmailText className="text-base text-slate-700 mb-3">
          <strong className="text-sky-600">✓</strong> Arbitrary values: 
          <code className="bg-gray-100 px-2 py-1 rounded text-[#ff6b6b]">w-[123px]</code>
        </EmailText>
        
        <EmailText className="text-base text-slate-700 mb-3">
          <strong className="text-violet-600">✓</strong> Opacity modifiers: 
          <span className="bg-blue-500/20 px-2 py-1 rounded">bg-blue-500/20</span>
        </EmailText>
        
        <EmailText className="text-base text-slate-700">
          <strong className="text-rose-600">✓</strong> Negative margins: 
          <code className="bg-gray-100 px-2 py-1 rounded">-mt-4</code>
        </EmailText>
      </div>
      
      <EmailSpacer height={20} />
      
      {/* Typography showcase */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <EmailHeading as="h3" className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
          Typography Power
        </EmailHeading>
        
        <EmailText className="text-sm font-light text-gray-500 leading-relaxed">
          Light text with relaxed line-height
        </EmailText>
        
        <EmailText className="text-base font-normal text-gray-700 leading-normal tracking-wide">
          Normal text with wide letter-spacing
        </EmailText>
        
        <EmailText className="text-lg font-bold text-gray-900 leading-tight uppercase">
          Bold uppercase with tight leading
        </EmailText>
      </div>
      
      <EmailSpacer height={30} />
      
      {/* Display utilities */}
      <div className="block bg-amber-50 p-4 rounded">
        <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Inline Block Badge
        </span>
        <EmailText className="text-amber-900 mt-2">
          Display utilities work perfectly!
        </EmailText>
      </div>
      
      <EmailSpacer height={30} />
      
      {/* Color palette showcase */}
      <div className="bg-white p-6 rounded-lg">
        <EmailHeading as="h3" className="text-xl font-bold text-gray-900 mb-4">
          🎨 Full Color Palette
        </EmailHeading>
        
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-red-500 text-white p-2 rounded text-center text-xs">Red</div>
          <div className="bg-orange-500 text-white p-2 rounded text-center text-xs">Orange</div>
          <div className="bg-amber-500 text-white p-2 rounded text-center text-xs">Amber</div>
          <div className="bg-yellow-500 text-white p-2 rounded text-center text-xs">Yellow</div>
          <div className="bg-lime-500 text-white p-2 rounded text-center text-xs">Lime</div>
          <div className="bg-green-500 text-white p-2 rounded text-center text-xs">Green</div>
          <div className="bg-emerald-500 text-white p-2 rounded text-center text-xs">Emerald</div>
          <div className="bg-teal-500 text-white p-2 rounded text-center text-xs">Teal</div>
          <div className="bg-cyan-500 text-white p-2 rounded text-center text-xs">Cyan</div>
          <div className="bg-sky-500 text-white p-2 rounded text-center text-xs">Sky</div>
          <div className="bg-blue-500 text-white p-2 rounded text-center text-xs">Blue</div>
          <div className="bg-indigo-500 text-white p-2 rounded text-center text-xs">Indigo</div>
          <div className="bg-violet-500 text-white p-2 rounded text-center text-xs">Violet</div>
          <div className="bg-purple-500 text-white p-2 rounded text-center text-xs">Purple</div>
          <div className="bg-fuchsia-500 text-white p-2 rounded text-center text-xs">Fuchsia</div>
          <div className="bg-pink-500 text-white p-2 rounded text-center text-xs">Pink</div>
        </div>
      </div>
      
      <EmailSpacer height={40} />
      
      <EmailHr className="border-gray-300" />
      
      <EmailSpacer height={30} />
      
      {/* CTA with negative margin */}
      <div className="text-center -mt-2">
        <EmailButton 
          href="https://example.com"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-block"
        >
          Try It Now →
        </EmailButton>
      </div>
      
      <EmailSpacer height={40} />
      
      {/* Footer */}
      <div className="text-center">
        <EmailText className="text-sm text-gray-500 leading-relaxed">
          Built with <span className="text-red-500">❤️</span> using Weaver
        </EmailText>
        <EmailText className="text-xs text-gray-400 mt-2">
          © 2025 Your Company. All rights reserved.
        </EmailText>
      </div>
    </EmailContainer>
  </Html>
);

// Render the email
console.log('=== Advanced Tailwind CSS Example ===');
console.log(render(<AdvancedTailwindEmail name="John Doe" imageUrl="https://via.placeholder.com/600x200" />));
