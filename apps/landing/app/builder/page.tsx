'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Copy, Check, RefreshCw, Monitor, Smartphone, Tablet, Upload, FileJson, Image as ImageIcon, Paperclip, Trash2, Type, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

interface Attachment {
  name: string;
  size: number;
  type: string;
  content: string; // Base64
}

export default function BuilderPage() {
  const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  
  // Email State
  const [config, setConfig] = useState({
    previewText: 'Welcome to Weaver!',
    headline: 'Welcome to the future of email.',
    bodyText: 'Stop fighting with table layouts and inline styles. Weaver lets you build emails like modern web apps—with React components and a visual builder that actually works.',
    buttonText: 'Get Started',
    buttonUrl: 'https://weaver.com',
    themeColor: '#000000',
    backgroundColor: '#ffffff',
    showLogo: true,
    logoUrl: '', // Base64 or URL
    headerImage: '', // Base64 or URL
    fontFamily: 'sans-serif',
    textAlign: 'left' as 'left' | 'center' | 'right',
    padding: '40px',
    attachments: [] as Attachment[],
  });

  const handleCopy = () => {
    const html = generateHtml(config);
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const html = generateHtml(config);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      try {
        // Look for the embedded config
        const match = content.match(/<script id="weaver-config" type="application\/json">(.*?)<\/script>/);
        if (match && match[1]) {
          const importedConfig = JSON.parse(match[1]);
          setConfig(importedConfig);
          alert('Template imported successfully!');
        } else {
          alert('Could not find Weaver configuration in this file.');
        }
      } catch (error) {
        console.error('Error parsing file:', error);
        alert('Error importing file. Invalid format.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, field: 'logoUrl' | 'headerImage') => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setConfig({ ...config, [field]: content });
    };
    reader.readAsDataURL(file);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  const handleAttachmentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const newAttachment: Attachment = {
        name: file.name,
        size: file.size,
        type: file.type,
        content: content
      };
      setConfig({ ...config, attachments: [...config.attachments, newAttachment] });
    };
    reader.readAsDataURL(file);
    if (attachmentInputRef.current) attachmentInputRef.current.value = '';
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...config.attachments];
    newAttachments.splice(index, 1);
    setConfig({ ...config, attachments: newAttachments });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-black">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 h-16 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg">Visual Builder</h1>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">Beta</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">No Signup Needed • Local Storage</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
          <button 
            onClick={() => setActiveView('desktop')}
            className={`p-1.5 rounded-md transition-all ${activeView === 'desktop' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setActiveView('tablet')}
            className={`p-1.5 rounded-md transition-all ${activeView === 'tablet' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setActiveView('mobile')}
            className={`p-1.5 rounded-md transition-all ${activeView === 'mobile' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept=".html" 
            className="hidden" 
          />
          <button 
            onClick={handleImportClick}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Upload className="w-4 h-4" />
            Import
          </button>
          <div className="h-6 w-px bg-gray-200"></div>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy HTML'}
          </button>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Controls */}
        <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto p-6 flex flex-col gap-8">
          
          {/* Content Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                <input 
                  type="text" 
                  value={config.headline}
                  onChange={(e) => setConfig({...config, headline: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Body Text</label>
                <textarea 
                  value={config.bodyText}
                  onChange={(e) => setConfig({...config, bodyText: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Images</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Header Image</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="file" 
                    ref={imageInputRef}
                    onChange={(e) => handleImageUpload(e, 'headerImage')}
                    accept="image/*"
                    className="hidden"
                  />
                  <button 
                    onClick={() => imageInputRef.current?.click()}
                    className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 w-full justify-center"
                  >
                    <ImageIcon className="w-4 h-4" />
                    {config.headerImage ? 'Change Image' : 'Upload Image'}
                  </button>
                  {config.headerImage && (
                    <button 
                      onClick={() => setConfig({...config, headerImage: ''})}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Attachments Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Attachments</h3>
            <div className="space-y-3">
              {config.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Paperclip className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="text-xs text-gray-600 truncate">{file.name}</span>
                  </div>
                  <button 
                    onClick={() => removeAttachment(index)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              
              <input 
                type="file" 
                ref={attachmentInputRef}
                onChange={handleAttachmentUpload}
                className="hidden"
              />
              <button 
                onClick={() => attachmentInputRef.current?.click()}
                className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:bg-gray-50 w-full justify-center"
              >
                <Paperclip className="w-4 h-4" />
                Add Attachment
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Call to Action</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                <input 
                  type="text" 
                  value={config.buttonText}
                  onChange={(e) => setConfig({...config, buttonText: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button URL</label>
                <input 
                  type="text" 
                  value={config.buttonUrl}
                  onChange={(e) => setConfig({...config, buttonUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Appearance</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Theme Color</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={config.themeColor}
                    onChange={(e) => setConfig({...config, themeColor: e.target.value})}
                    className="w-8 h-8 rounded-lg border border-gray-200 cursor-pointer p-0.5"
                  />
                  <span className="text-sm text-gray-500 font-mono">{config.themeColor}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Typography</label>
                <select 
                  value={config.fontFamily}
                  onChange={(e) => setConfig({...config, fontFamily: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-sm"
                >
                  <option value="sans-serif">Sans Serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alignment</label>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  {['left', 'center', 'right'].map((align) => (
                    <button
                      key={align}
                      onClick={() => setConfig({...config, textAlign: align as any})}
                      className={`flex-1 py-1.5 rounded-md flex justify-center transition-all ${config.textAlign === align ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                    >
                      {align === 'left' && <AlignLeft className="w-4 h-4" />}
                      {align === 'center' && <AlignCenter className="w-4 h-4" />}
                      {align === 'right' && <AlignRight className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Show Logo</label>
                <button 
                  onClick={() => setConfig({...config, showLogo: !config.showLogo})}
                  className={`w-10 h-6 rounded-full transition-colors relative ${config.showLogo ? 'bg-black' : 'bg-gray-200'}`}
                >
                  <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${config.showLogo ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3">
              <FileJson className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">Smart Export</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Your configuration (including images & attachments) is saved inside the exported HTML file.
                </p>
              </div>
            </div>
          </div>

        </aside>

        {/* Preview Area */}
        <main className="flex-1 bg-gray-100 flex items-center justify-center p-8 overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <motion.div 
            layout
            className={`bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-500 ease-in-out flex flex-col
              ${activeView === 'desktop' ? 'w-[600px] h-[800px]' : ''}
              ${activeView === 'tablet' ? 'w-[400px] h-[700px]' : ''}
              ${activeView === 'mobile' ? 'w-[320px] h-[600px]' : ''}
            `}
          >
            {/* Fake Browser Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-white border border-gray-200 rounded-md px-3 py-1 text-[10px] text-gray-400 font-mono inline-block w-48 truncate">
                  Subject: {config.previewText}
                </div>
              </div>
            </div>

            {/* Email Content Preview */}
            <div className="flex-1 overflow-y-auto p-8" style={{ backgroundColor: config.backgroundColor }}>
              <div className="max-w-full mx-auto font-sans" style={{ textAlign: config.textAlign, fontFamily: config.fontFamily }}>
                {config.showLogo && (
                  <div className="mb-8">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg inline-flex">W</div>
                  </div>
                )}

                {config.headerImage && (
                  <div className="mb-8 rounded-lg overflow-hidden">
                    <img src={config.headerImage} alt="Header" className="w-full h-auto object-cover" />
                  </div>
                )}
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {config.headline}
                </h1>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {config.bodyText}
                </p>

                <a 
                  href={config.buttonUrl}
                  target="_blank"
                  className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: config.themeColor }}
                >
                  {config.buttonText}
                </a>

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Weaver. All rights reserved.
                    <br />
                    123 Email St, San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

// Helper to generate HTML string for export
function generateHtml(config: any) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.previewText}</title>
  <style>
    body { font-family: ${config.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
    .container { max-width: 600px; margin: 0 auto; padding: ${config.padding || '40px'} 20px; text-align: ${config.textAlign}; }
    .button { display: inline-block; padding: 12px 32px; border-radius: 8px; color: #ffffff; text-decoration: none; font-weight: 600; }
    .footer { margin-top: 48px; padding-top: 32px; border-top: 1px solid #eaeaea; font-size: 12px; color: #999999; }
    img { max-width: 100%; height: auto; display: block; }
  </style>
  <!-- Weaver Configuration - Do not remove if you want to re-import this file into the builder -->
  <script id="weaver-config" type="application/json">${JSON.stringify(config)}</script>
</head>
<body style="background-color: ${config.backgroundColor};">
  <div class="container">
    ${config.showLogo ? '<div style="margin-bottom: 32px;"><div style="width: 32px; height: 32px; background-color: #000000; border-radius: 8px; color: #ffffff; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; line-height: 32px; text-align: center;">W</div></div>' : ''}
    
    ${config.headerImage ? `<div style="margin-bottom: 32px; border-radius: 8px; overflow: hidden;"><img src="${config.headerImage}" alt="Header" /></div>` : ''}

    <h1 style="font-size: 30px; font-weight: 700; color: #111111; margin-bottom: 24px; line-height: 1.2;">
      ${config.headline}
    </h1>
    
    <p style="font-size: 18px; color: #444444; margin-bottom: 32px; line-height: 1.6;">
      ${config.bodyText}
    </p>
    
    <a href="${config.buttonUrl}" class="button" style="background-color: ${config.themeColor};">
      ${config.buttonText}
    </a>
    
    <div class="footer">
      <p>
        © ${new Date().getFullYear()} Weaver. All rights reserved.<br>
        123 Email St, San Francisco, CA 94105
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
  return htmlContent;
}

function X({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  )
}
