import React, { useState } from 'react';
import { ProfileData, Achievement } from '../types';
import SectionWrapper from './SectionWrapper';
import { Award, Maximize2 } from 'lucide-react';
import DetailModal from './DetailModal';

interface AchievementsProps {
  data: ProfileData;
}

const Achievements: React.FC<AchievementsProps> = ({ data }) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <SectionWrapper id="achievements" className="bg-slate-50 py-16 overflow-hidden">
       <div className="flex flex-col items-center mb-16">
        <span className="text-secondary font-medium tracking-widest text-sm mb-2">HONORS</span>
        <h2 className="text-4xl font-bold text-slate-900 text-center">
          {data.name === 'Huang Honglin' ? 'Awards & Honors' : '荣誉与奖项'}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mt-4 rounded-full" />
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {/* Double list for seamless scrolling */}
          {[...data.achievements, ...data.achievements].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`} 
              className="w-[300px] mx-4 flex-shrink-0 group/card relative rounded-xl overflow-hidden cursor-pointer bg-white border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedAchievement(item)}
            >
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                 {item.image ? (
                   <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" 
                  />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <Award size={40} className="text-slate-300" />
                   </div>
                 )}
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-slate-900 p-3 rounded-full backdrop-blur-sm shadow-lg">
                       <Maximize2 size={24} />
                    </div>
                 </div>
              </div>
              
              <div className="p-4 bg-white border-t border-slate-100 relative">
                 <span className="text-xs text-primary font-bold uppercase mb-1 block">{item.category}</span>
                 <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 h-10">{item.title}</h3>
                 <span className="text-xs text-slate-500 mt-2 block">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailModal 
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
        title={selectedAchievement?.title || ''}
        subtitle={selectedAchievement?.category}
        period={selectedAchievement?.date}
        description={selectedAchievement?.description || (data.name === 'Huang Honglin' ? 'Awarded for outstanding performance.' : '因表现优异获得该奖项。')}
        mainImage={selectedAchievement?.image}
        materials={undefined} // Explicitly undefined to hide the folder section
        labels={{
          materials: data.name === 'Huang Honglin' ? 'Certificates & Documents' : '证书与证明文件',
          close: 'Close'
        }}
      />
    </SectionWrapper>
  );
};

export default Achievements;