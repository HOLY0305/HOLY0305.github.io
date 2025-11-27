import React from 'react';
import { ProfileData } from '../types';
import { Mail, Phone, MapPin, Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  data: ProfileData;
  onDownload: () => void;
}

const Hero: React.FC<HeroProps> = ({ data, onDownload }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-50 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-secondary/5 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-primary/5 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-semibold tracking-wide">
            {data.title}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Hello, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {data.name}
            </span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg">
            {data.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-slate-600">
            <div className="flex items-center gap-2 text-sm bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <Mail size={16} className="text-secondary" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <Phone size={16} className="text-secondary" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <MapPin size={16} className="text-secondary" />
              <span>{data.location}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={onDownload}
              className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl shadow-primary/20"
            >
              <Download size={20} />
              {data.name === 'Huang Honglin' ? 'Download CV' : '下载简历'}
            </button>
            <a 
              href={data.github} 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-slate-700 font-medium px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Visual/Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative flex justify-center"
        >
          {/* Decorative Background Rings (Static) */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-slate-200 rounded-full animate-[spin-slow_10s_linear_infinite]" />
          <div className="absolute w-[280px] h-[280px] md:w-[430px] md:h-[430px] border border-slate-200 rounded-full animate-[spin-slow_15s_linear_infinite_reverse]" />
          
          {/* Profile Container */}
          <div className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-full relative z-10 group cursor-pointer">
             
             {/* Ripple Effect Circles (Behind image, activate on hover) */}
             <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-0 group-hover:animate-ripple" style={{ animationDelay: '0s' }} />
             <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-0 group-hover:animate-ripple" style={{ animationDelay: '0.5s' }} />
             <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-0 group-hover:animate-ripple" style={{ animationDelay: '1s' }} />

             {/* Main Image */}
             <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative bg-slate-100 z-20">
                <img 
                  src="https://picsum.photos/id/1005/600/600" 
                  alt={data.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end justify-center pb-6 pointer-events-none">
                    <span className="text-white text-sm font-light tracking-widest opacity-90">SENIOR YEAR</span>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="w-5 h-9 border-2 border-slate-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;