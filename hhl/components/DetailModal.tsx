import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Image as ImageIcon, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Material } from '../types';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  tags?: string[];
  mainImage?: string;
  materials?: Material[]; // The "folder" content
  listItems?: string[]; // For bullet points like achievements
  labels: {
    materials: string;
    close: string;
  };
}

const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  period,
  description,
  tags,
  mainImage,
  materials,
  listItems,
  labels
}) => {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMaterialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (!url || url === '#') {
      e.preventDefault();
      alert("此链接为占位符。请在代码 data/content.ts 中替换为实际的文件路径或URL。\nThis link is a placeholder. Please replace it with the actual file path in data/content.ts.");
    }
    // If it's a real URL (like https://google.com), let the default behavior (target="_blank") happen.
  };

  // Prevent SSR issues
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white border border-slate-200 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative z-10"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-white/80 sticky top-0 z-20 backdrop-blur-md">
              <div className="pr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
                <div className="flex flex-col md:flex-row md:items-center gap-y-1 gap-x-4 text-slate-500 text-sm">
                  {subtitle && <span className="font-medium text-primary">{subtitle}</span>}
                  {period && <span className="hidden md:inline">•</span>}
                  {period && <span>{period}</span>}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left/Top Content */}
                <div className="md:col-span-2 space-y-6">
                  {mainImage && (
                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                      <img src={mainImage} alt={title} className="w-full h-auto object-cover" />
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 border-l-4 border-primary pl-3">
                       Overview
                    </h3>
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {description}
                    </p>
                  </div>

                  {listItems && listItems.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 border-l-4 border-secondary pl-3">
                        Key Highlights
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-600">
                        {listItems.map((item, idx) => (
                          <li key={idx} className="leading-relaxed pl-1 marker:text-slate-400">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Sidebar: Tags & Materials */}
                <div className="md:col-span-1 space-y-8">
                  {tags && tags.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs text-slate-600 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Materials / Folder Section */}
                  {/* Only render if materials are provided */}
                  {materials && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        {labels.materials}
                      </h4>
                      
                      <div className="space-y-3">
                        {materials.length > 0 ? (
                          materials.map((file, idx) => (
                            <a 
                              key={idx}
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => handleMaterialClick(e, file.url)}
                              className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-white hover:border-primary/50 hover:shadow-md transition-all group"
                            >
                              <div className="p-2 bg-white border border-slate-100 rounded-md text-slate-400 group-hover:text-primary transition-colors">
                                {file.type === 'pdf' ? <FileText size={20} /> : 
                                 file.type === 'image' ? <ImageIcon size={20} /> : <LinkIcon size={20} />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-700 truncate group-hover:text-primary">
                                  {file.title}
                                </p>
                                <p className="text-xs text-slate-400 uppercase">{file.type}</p>
                              </div>
                              <ExternalLink size={14} className="text-slate-400 group-hover:text-primary" />
                            </a>
                          ))
                        ) : (
                          <div className="p-4 border border-dashed border-slate-300 rounded-lg text-center bg-slate-50/50">
                            <p className="text-xs text-slate-500 italic">No attached documents</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default DetailModal;