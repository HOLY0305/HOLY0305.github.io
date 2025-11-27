import React from 'react';
import { ProfileData } from '../types';
import SectionWrapper from './SectionWrapper';
import { Code, Cpu, Terminal, PenTool } from 'lucide-react';

interface SkillsProps {
  data: ProfileData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getIcon = (category: string) => {
    if (category.includes("Language") || category.includes("语言")) return <Code size={20} />;
    if (category.includes("Embedded") || category.includes("嵌入式")) return <Cpu size={20} />;
    if (category.includes("Linux") || category.includes("Hardware") || category.includes("硬件")) return <Terminal size={20} />;
    return <PenTool size={20} />;
  };

  return (
    <SectionWrapper id="skills" className="bg-white">
       <div className="grid md:grid-cols-2 gap-8 items-center">
         <div>
            <span className="text-primary font-medium tracking-widest text-sm mb-2 block">EXPERTISE</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {data.name === 'Huang Honglin' ? 'Technical Skills' : '专业技能'}
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {data.name === 'Huang Honglin' 
                ? "Proficient in the full development cycle of embedded systems, from PCB design to Linux kernel driver porting. Strong background in robotics motion control and algorithmic implementation." 
                : "精通嵌入式系统全流程开发，从PCB设计到Linux内核驱动移植。在机器人运动控制和算法实现方面拥有深厚背景。"
              }
            </p>
         </div>

         <div className="grid gap-4">
           {data.skills.map((skillGroup, idx) => (
             <div key={idx} className="glass-panel p-5 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors shadow-sm">
               <div className="flex items-center gap-3 mb-4">
                 <div className="text-primary">
                    {getIcon(skillGroup.category)}
                 </div>
                 <h3 className="text-slate-900 font-bold">{skillGroup.category}</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {skillGroup.items.map((skill) => (
                   <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200 font-medium">
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </div>
    </SectionWrapper>
  );
};

export default Skills;