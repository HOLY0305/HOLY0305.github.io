import React from 'react';
import { ProfileData } from '../types';
import SectionWrapper from './SectionWrapper';
import { Award, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  data: ProfileData;
}

const Certifications: React.FC<CertificationsProps> = ({ data }) => {
  const certifications = data.certifications || [];
  
  if (certifications.length === 0) return null;

  return (
    <SectionWrapper id="certifications" className="bg-slate-50 py-16 overflow-hidden">
      <div className="flex flex-col items-center mb-12">
        <span className="text-primary font-medium tracking-widest text-sm mb-2 uppercase">Endorsements</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          {data.name === 'Huang Honglin' ? 'Professional Certifications' : '专业认证证书'}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {/* Double the list to create seamless loop */}
          {[...certifications, ...certifications].map((cert, index) => (
            <div 
              key={`${cert.id}-${index}`} 
              className="w-[280px] md:w-[320px] mx-4 flex-shrink-0 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group/card"
            >
              {/* Image Area */}
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award size={40} className="text-slate-300" />
                  </div>
                )}
                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm text-green-600">
                  <CheckCircle size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-end border-t border-slate-100 pt-3 mt-2">
                  <span className="text-xs font-semibold text-primary bg-primary/5 px-2 py-1 rounded">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-slate-400">
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;