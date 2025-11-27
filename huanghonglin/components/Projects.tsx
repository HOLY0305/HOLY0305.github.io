import React, { useState } from 'react';
import { ProfileData, Project } from '../types';
import SectionWrapper from './SectionWrapper';
import { ArrowUpRight, Cpu } from 'lucide-react';
import DetailModal from './DetailModal';

interface ProjectsProps {
  data: ProfileData;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" className="bg-white">
      <div className="flex flex-col items-center mb-16">
        <span className="text-primary font-medium tracking-widest text-sm mb-2">PORTFOLIO</span>
        <h2 className="text-4xl font-bold text-slate-900 text-center">
          {data.name === 'Huang Honglin' ? 'Featured Projects' : '项目展示'}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image Area */}
            <div className="h-48 bg-slate-100 relative overflow-hidden">
               {project.image ? (
                 <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
               ) : (
                 <div className="w-full h-full flex items-center justify-center bg-slate-100">
                   <Cpu size={48} className="text-slate-300" />
                 </div>
               )}
               {/* Dark gradient only on image area for text readability if needed, or keeping it clean */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
               <div className="absolute bottom-4 left-4 right-4">
                 <span className="text-xs font-bold text-secondary bg-white/90 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block shadow-sm">
                    {project.role}
                 </span>
                 <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">{project.title}</h3>
               </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col">
               <p className="text-slate-600 text-sm mb-6 h-20 overflow-hidden line-clamp-3">
                 {project.description}
               </p>

               <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                 {project.techStack.slice(0, 4).map(tech => (
                   <span key={tech} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                     {tech}
                   </span>
                 ))}
                 {project.techStack.length > 4 && (
                   <span className="text-xs text-slate-400 px-2 py-1">+ {project.techStack.length - 4}</span>
                 )}
               </div>

               <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                 <span className="text-xs text-slate-400 font-mono">{project.period}</span>
                 <button 
                  className="flex items-center gap-1 text-primary hover:text-secondary transition-colors text-sm font-medium"
                 >
                   {data.name === 'Huang Honglin' ? 'Details' : '详情'} <ArrowUpRight size={16} />
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>

      <DetailModal 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        subtitle={selectedProject?.role}
        period={selectedProject?.period}
        description={selectedProject?.description}
        tags={selectedProject?.techStack}
        mainImage={selectedProject?.image}
        materials={selectedProject?.materials}
        labels={{
          materials: data.name === 'Huang Honglin' ? 'Project Documents' : '项目文档与材料',
          close: 'Close'
        }}
      />
    </SectionWrapper>
  );
};

export default Projects;