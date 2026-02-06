import React from 'react';
import Image from 'next/image';


const Icons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 7.56 9.75.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.68 9.68 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.18.57.69.48A10 10 0 0022 12 10 10 0 0012 2z"></path>
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
    </svg>
  ),
  Resume: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
    </svg>
  )
};


const IconLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-all duration-200"
    aria-label={label}
  >
    {icon}
    
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
      {label}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></span>
    </span>
  </a>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-black selection:text-white">
      <main className="max-w-3xl mx-auto px-6 py-24">
        
        <header className="mb-20">
          <div className="flex flex-col gap-6">
            
            <div className="flex items-center gap-4">
              <Image 
                src="/coding.png"
                alt="Coding Icon"
                width={48} 
                height={48}             
                className="shadow-sm" 
                priority                 
              />
              <h1 className="text-4xl font-bold tracking-tight">
                Hi, I'm Shu-Wen Yeh!
              </h1>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                <strong>Software Engineer & Computer Engineering Grad Student at ASU</strong>.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Currently pursuing an MS in Computer Engineering at Arizona State University after a 5-year tenure as a Senior Software Engineer at TSMC and Cathay Life Insurance. I build high-load distributed systems, secure microservices, and robust backend infrastructure. I value code integrity, system reliability, and the engineering principles that move technology from atoms to architecture. Available for Summer 2026 internships.
              </p>
            </div>

            <div className="flex items-center gap-1">
              <IconLink 
                href="https://www.linkedin.com/in/shu-wen-yeh-aa2277137/" 
                icon={Icons.LinkedIn} 
                label="LinkedIn"
              />
              <IconLink 
                href="https://github.com/yehshuwen" 
                icon={Icons.GitHub} 
                label="GitHub"
              />
              <IconLink 
                href="/resume_CV20260119.pdf" 
                icon={Icons.Resume} 
                label="Resume"
              />
              <IconLink 
                href="mailto:yehshuwen2024@gmail.com" 
                icon={Icons.Email} 
                label="Email"
              />
            </div>
          </div>
        </header>

        <section className="mb-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-200 pb-4">
            Selected Work
          </h2>
          
          <div className="space-y-12">
            <div className="group">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-xl font-semibold group-hover:text-blue-700 transition-colors">
                  High-Availability Enterprise Platform
                </h3>
                <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">DISTRIBUTED SYSTEMS</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Architected a centralized management system serving <strong>30,000+ concurrent users</strong>. 
                Achieved <strong>99.99% availability</strong> by implementing fault-tolerant microservices for mission-critical industrial operations.
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-xl font-semibold group-hover:text-blue-700 transition-colors">
                  Secure Process Automation
                </h3>
                <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">PYTHON / FLASK</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Engineered an intelligent automation microservice that reduced manual data processing by <strong>80%</strong>. 
                Integrated secure API gateways to handle <strong>sensitive enterprise data</strong> in compliance with strict security protocols.
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400">
          <p>© 2026 Shu-Wen Yeh. Built with Next.js & TypeScript.</p>
        </footer>

      </main>
    </div>
  );
}