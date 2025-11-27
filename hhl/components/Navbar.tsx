import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Menu, X, Globe, Download } from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onDownload: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, onDownload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling manually
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: language === Language.EN ? 'Home' : '首页', href: '#home' },
    { name: language === Language.EN ? 'Experience' : '经历', href: '#experience' },
    { name: language === Language.EN ? 'Projects' : '项目', href: '#projects' },
    { name: language === Language.EN ? 'Awards' : '奖项', href: '#achievements' },
    { name: language === Language.EN ? 'Certificates' : '证书', href: '#certifications' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === Language.EN ? Language.CN : Language.EN);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer"
          >
            HH.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-600 hover:text-primary transition-colors text-sm font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-6 w-px bg-slate-300 mx-2" />

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-slate-600 hover:text-slate-900 transition-colors gap-1"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language}</span>
            </button>

            {/* Download Button */}
            <button 
              onClick={onDownload}
              className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            >
              <Download size={14} />
              {language === Language.EN ? 'Resume' : '简历'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLanguage}
              className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span className="text-xs font-bold mr-1">{language}</span>
              <Globe size={18} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 absolute w-full p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-700 hover:text-primary transition-colors text-lg"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onDownload}
              className="flex w-full justify-center items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg mt-4"
            >
              <Download size={18} />
              {language === Language.EN ? 'Download Resume' : '下载简历'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;