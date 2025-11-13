import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'V-EditR',
      description: 'V-EditR is an advanced image editing pipeline that understands natural language instructions and applies precise edits based on semantic reasoning. Unlike traditional image editors that rely purely on style cues, V-EditR analyzes scene context, object relationships, and spatial information before making modifications.',
      techStack: ['Python', 'VLMs', 'Instructpix2pix', 'Grounding DINO - SAM'],
      github: 'https://github.com/Jalalbaim/V-EditR',
    },
    {
      id: 2,
      title: 'Multi-Agent RAG Assistant',
      description: 'Multi-agent pipeline for ingestion, retrieval, QA, and citations. Sophisticated system orchestrating multiple AI agents for document processing and question answering',
      techStack: ['Python', 'LLMs', 'RAG', 'NLP', 'Vector Databases'],
      github: 'https://github.com/Jalalbaim/RAG-Assistant-agent',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">Projects</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/40 border border-slate-700/50 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/30"
          >
            <div className="h-48 bg-gradient-to-br from-slate-800/60 to-blue-900/30 flex items-center justify-center border-b border-slate-700/50">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full flex items-center justify-center shadow-lg border border-blue-500/30">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">{project.id}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/40 to-blue-500/40 border border-blue-500/50 text-slate-100 rounded-lg hover:from-blue-600/60 hover:to-blue-500/60 hover:border-blue-400/70 transition-all shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm"
              >
                <Github size={18} />
                <span>View on GitHub</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
