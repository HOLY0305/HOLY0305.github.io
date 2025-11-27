import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import { content } from './data/content';
import { Language } from './types';
import { Github, Mail, ArrowUp } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<Language>(Language.CN);
  const currentData = content[language];

  const handleDownload = () => {
    // In a real scenario, this would point to the actual PDF file in the public folder
    const fileName = language === Language.EN ? 'Resume_EN.pdf' : 'Resume_CN.pdf';
    // Simulating download action
    alert(`Downloading ${fileName}... \n(Developer Note: Place your PDF in the public folder and update this link)`);
    // window.open(`/assets/${fileName}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-primary/30 selection:text-slate-900 relative">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        onDownload={handleDownload}
      />
      
      <main>
        <Hero data={currentData} onDownload={handleDownload} />
        <Skills data={currentData} />
        <Experience data={currentData} />
        <Projects data={currentData} />
        <Achievements data={currentData} />
        <Certifications data={currentData} />
      </main>

      {/* Footer / Contact Simple */}
      <footer id="contact" className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {language === Language.EN ? "Let's Connect" : "联系我"}
          </h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${currentData.email}`} className="p-3 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-slate-900 transition-all">
              <Mail size={24} />
            </a>
            <a href={currentData.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 rounded-full text-slate-500 hover:text-white hover:bg-slate-900 transition-all">
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {currentData.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-white/80 text-primary border border-primary/20 rounded-full backdrop-blur-md hover:bg-primary hover:text-white shadow-lg transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Global styles for custom scrollbar in modals */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}

export default App;