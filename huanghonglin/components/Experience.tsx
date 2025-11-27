import React, { useState } from 'react';
import { ProfileData, ExperienceItem } from '../types';
import SectionWrapper from './SectionWrapper';
import { Briefcase, GraduationCap, Calendar, ChevronRight, Users, Trophy, BookOpen } from 'lucide-react';
import DetailModal from './DetailModal';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceProps {
  data: ProfileData;
}

type ExperienceTab = 'internship' | 'campus';

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);
  const [activeTab, setActiveTab] = useState<ExperienceTab>('internship');

  const internships = data.experience.filter(e => e.category === 'internship');
  const campusExperience = data.experience.filter(e => e.category === 'campus');

  const activeItems = activeTab === 'internship' ? internships : campusExperience;

  return (
    <SectionWrapper id="experience" className="bg-slate-50">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Education (Takes up 4 cols) */}
        <div className="lg:col-span-4">
           <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl text-primary shadow-sm border border-primary/10">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {data.name === 'Huang Honglin' ? 'Education' : '教育经历'}
            </h2>
          </div>

          <div className="space-y-6">
            {data.education.map((edu, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:shadow-lg transition-all hover:border-primary/30">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                </div>
                <div className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded mb-4">
                  {edu.period}
                </div>
                
                <h4 className="text-lg text-primary font-medium mb-1 flex items-center gap-2">
                   <BookOpen size={16} />
                   {edu.major} <span className="text-slate-300">|</span> {edu.degree}
                </h4>
                <p className="text-slate-700 font-bold mb-4">{edu.gpa}</p>
                
                <div className="text-slate-600 text-sm space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex gap-2">
                     <div className="min-w-[4px] bg-slate-200 rounded-full" />
                     <p><span className="text-slate-900 font-medium block mb-1">{data.name === 'Huang Honglin' ? 'Core Courses' : '主修课程'}</span>{edu.courses}</p>
                  </div>
                  <div className="flex gap-2">
                     <div className="min-w-[4px] bg-yellow-400 rounded-full" />
                     <p><span className="text-slate-900 font-medium block mb-1">{data.name === 'Huang Honglin' ? 'Honors' : '荣誉奖项'}</span>{edu.honors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Experience Tabs (Takes up 8 cols) */}
        <div className="lg:col-span-8">
           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary shadow-sm border border-secondary/10">
                  <Briefcase size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {data.name === 'Huang Honglin' ? 'Experience' : '经历展示'}
                </h2>
              </div>

              {/* Tabs */}
              <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                <button 
                  onClick={() => setActiveTab('internship')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'internship' ? 'bg-secondary text-white shadow-md' : 'text-slate-500 hover:text-secondary hover:bg-slate-50'}`}
                >
                  <Briefcase size={16} />
                  {data.name === 'Huang Honglin' ? 'Internship' : '实习经历'}
                </button>
                <button 
                  onClick={() => setActiveTab('campus')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'campus' ? 'bg-secondary text-white shadow-md' : 'text-slate-500 hover:text-secondary hover:bg-slate-50'}`}
                >
                  <Users size={16} />
                  {data.name === 'Huang Honglin' ? 'Campus Leadership' : '在校经历'}
                </button>
              </div>
           </div>

           <div className="bg-white rounded-3xl p-1 border border-slate-200 shadow-sm min-h-[400px]">
             <div className="p-6 md:p-8">
               <AnimatePresence mode='wait'>
                 <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                 >
                    {activeItems.map((exp) => (
                      <div 
                        key={exp.id} 
                        className="relative pl-8 md:pl-0 group cursor-pointer" 
                        onClick={() => setSelectedExp(exp)}
                      >
                         <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-300">
                            {/* Icon/Date Column */}
                            <div className="md:w-48 flex-shrink-0 flex flex-col items-start">
                               <div className={`p-3 rounded-xl mb-3 ${exp.category === 'internship' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                                  {exp.category === 'internship' ? <Briefcase size={24} /> : <Trophy size={24} />}
                               </div>
                               <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                 <Calendar size={14} className="text-slate-400" />
                                 {exp.period}
                               </span>
                            </div>

                            {/* Content Column */}
                            <div className="flex-1">
                               <h3 className="text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors mb-1">
                                 {exp.role}
                               </h3>
                               <h4 className="text-slate-500 font-medium mb-3 text-sm uppercase tracking-wide">
                                 {exp.company}
                               </h4>
                               
                               <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-3">
                                 {exp.description}
                               </p>
                               
                               <div className="flex items-center text-primary text-xs font-bold gap-1 mt-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                  {data.name === 'Huang Honglin' ? 'Read More' : '查看详情'} <ChevronRight size={14} />
                               </div>
                            </div>
                         </div>
                         {/* Divider */}
                         <div className="absolute bottom-0 left-4 right-4 h-px bg-slate-100 last:hidden" />
                      </div>
                    ))}
                 </motion.div>
               </AnimatePresence>
             </div>
           </div>
        </div>
      </div>

      <DetailModal 
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
        title={selectedExp?.role || ''}
        subtitle={selectedExp?.company}
        period={selectedExp?.period}
        description={selectedExp?.description}
        listItems={selectedExp?.achievements}
        materials={selectedExp?.materials}
        labels={{
          materials: data.name === 'Huang Honglin' ? 'Documents & Proofs' : '相关证明材料',
          close: 'Close'
        }}
      />
    </SectionWrapper>
  );
};

export default Experience;