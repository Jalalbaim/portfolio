import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center shadow-2xl overflow-hidden border border-blue-500/30 backdrop-blur-sm">
            <img
              src="/img_prfl.jpeg"
              alt="Mohamed Jalal BAIM"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse">
          Mohamed Jalal BAIM
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-4">
          ML/AI Student & Researcher
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Machine Learning - eXplainable AI - Diffusion Models - LLMs & VLMs
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/Jalalbaim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 border border-slate-700 text-slate-200 rounded-lg hover:bg-slate-700/60 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mohamedjalalbaim/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/40 to-blue-500/40 border border-blue-500/50 text-slate-100 rounded-lg hover:from-blue-600/60 hover:to-blue-500/60 hover:border-blue-400/70 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </div>
  );
}
