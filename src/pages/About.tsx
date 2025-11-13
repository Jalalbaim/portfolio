import { Download, GraduationCap, Briefcase, Code, Award } from 'lucide-react';

export default function About() {
  const education = [
    {
      school: 'École Polytechnique',
      degree: 'MSc in DS - Applied Mathematics & Statistics',
      location: 'France',
      logo: '/École_polytechnique logo.png',
    },
    {
      school: 'National Yang Ming Chiao Tung University',
      degree: 'Exchange Program - AI Fall semester',
      location: 'Taiwan',
      logo: '/nycu logo.svg',
    },
    {
      school: 'Télécom Saint-Étienne',
      degree: 'MEng in Computer Science',
      location: 'France',
      logo: '/TSE logo.svg',
    },
  ];

  const experience = [
    {
      company: 'CEA LIST',
      role: 'Research Intern',
      description: 'Developed a generative-AI inpainting method to evaluate how reliable XAI techniques actually are. I also introduced a new way to analyze the behavior of adversarial attacks in latent space. This work forms the core of a first-author paper that I am currently preparing.',
      logo: '/cea logo.jpg',
    },
    {
      company: "L'Oréal R&I",
      role: 'Data Science Intern',
      description: 'Built a classification model for chemical entities using SMILES data combined with NLP approaches, and I implemented an extractive QA system based on BERT. I also handled database tasks from data collection to cleaning and organization, and I developed a graphical interface to monitor data and support internal research workflows.',
      logo: '/loreal R&D.jpg',
    },
    {
      company: 'Hubert-Curien Laboratory',
      role: 'Research Intern',
      description: 'Explored a new way to generate emotional facial expressions using diffusion models in latent space. My goal was to improve emotion-recognition performance by producing more expressive and diverse training samples.',
      logo: '/hubert curien.png',
    },
    {
      company: 'Qweeby SAS',
      role: 'Data Engineer',
      description: 'Automated the processing of diverse supplier files: PDFs, spreadsheets, CSVs, XMLs, so they could be converted into a clean, standardized format compatible with the company’s database system, QBase. This reduced manual effort and made the whole pipeline more reliable.',
      logo: '/Qweeby logo.png',
    },
  ];

  const certifications = [
    {
      name: 'OxML Summer School',
      description: 'Oxford Machine Learning Summer School',
      logo: '/oxml logo.avif',
    },
  ];

  const skills = {
    'Programming Languages': ['Python', 'C++', 'SQL', 'Java', 'JavaScript'],
    'ML/AI Frameworks': ['PyTorch', 'TensorFlow', 'Scikit-learn'],
    'Tools & Technologies': ['Git', 'Docker', 'Linux', 'AWS'],
    Languages: ['English', 'French', 'Arabic'],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
          About Me
        </h1>
        <p className="text-lg text-slate-400 mb-8">
          ML/AI researcher with a passion for advancing artificial intelligence
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/40 to-blue-500/40 border border-blue-500/50 text-slate-100 rounded-lg hover:from-blue-600/60 hover:to-blue-500/60 hover:border-blue-400/70 transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 backdrop-blur-sm">
          <Download size={20} />
          <span>Download Resume</span>
        </button>
      </div>

      {/* Education */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={28} className="text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-100">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl shadow-md hover:shadow-blue-500/10 transition-all backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/30"
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-slate-400 mb-1">{edu.degree}</p>
                  <p className="text-sm text-slate-500">{edu.location}</p>
                </div>
                <div className="w-20 h-20 bg-white border border-slate-700/50 rounded-lg flex items-center justify-center shadow-sm">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase size={28} className="text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl shadow-md hover:shadow-blue-500/10 transition-all backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/30"
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
                  <p className="text-slate-400">{exp.description}</p>
                </div>
                <div className="w-20 h-20 bg-white border border-slate-700/50 rounded-lg flex items-center justify-center shadow-sm">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Award size={28} className="text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-100">Certifications</h2>
        </div>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl shadow-md hover:shadow-blue-500/10 transition-all backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/30"
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400">{cert.description}</p>
                </div>
                <div className="w-20 h-20 bg-white border border-slate-700/50 rounded-lg flex items-center justify-center shadow-sm">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Code size={28} className="text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-100">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl shadow-md hover:shadow-blue-500/10 transition-all backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/30"
            >
              <h3 className="text-lg font-bold text-slate-100 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}