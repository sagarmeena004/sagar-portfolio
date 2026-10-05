import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import {
  ExternalLink,
  Sparkles,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = 'http://127.0.0.1:8000/api/projects/';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const categories = [
    'All',
    'Python Development',
    'Data Analytics',
    'Web Development'
  ];

  // Django API se projects load karna
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        return response.json();
      })
      .then((data) => {
        console.log("PROJECT DATA:", data);
        const mappedProjects = data.map((project) => ({
          id: project.id,
          title: project.title,
          description: project.description,
          category: project.category,
          featured: project.featured,
          highlights: project.highlights || [],
          tech: project.tech || [],
          image: project.image,
          project_url: project.project_url,
        }));

        setProjectsData(mappedProjects);
      })
      .catch((err) => {
        console.error(err);
        setError('Projects load nahi ho paaye.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category
              .toLowerCase()
              .includes(activeFilter.toLowerCase())
        );

  return (
    <div className="space-y-16 pb-20">

      <PageHeader
        badge="PORTFOLIO & IMPLEMENTATIONS"
        title="Featured"
        highlightTitle="Projects"
        subtitle="10 real technical projects spanning Python applications, Data Analytics dashboards, and Web Development platforms."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-[#189B3F] text-black font-bold shadow-neon'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-[#00ff66]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10">
            <p className="text-[#00ff66] font-mono text-sm">
              Loading projects...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-10">
            <p className="text-red-400 font-mono text-sm">
              {error}
            </p>
          </div>
        )}

        {/* No Projects */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-400 font-mono text-sm">
              No projects found.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredProjects.map((project) => (
              <TiltCard key={project.id}>

                <div className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between h-full space-y-4">
			
		{project.image && (
  		<img
    		src={project.image}
    		alt={project.title}
    		className="w-full h-40 object-cover rounded-xl mb-4"
  		/>
	)}

                  <div className="space-y-3">

                    {/* Category */}
                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#189B3F]/20 border border-[#189B3F]/30 text-[#00ff66]">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}

                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">

                    {/* Highlights */}
                    {project.highlights.length > 0 && (
                      <ul className="space-y-1 text-[11px] text-gray-400 font-mono">

                        {project.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#00ff66]" />
                            <span>{h}</span>
                          </li>
                        ))}

                      </ul>
                    )}

                    {/* Technologies */}
                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">

                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0d1117] text-gray-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}

                      </div>
                    )}

                    {/* View Project */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 rounded-xl bg-[#189B3F]/20 hover:bg-[#189B3F] text-[#00ff66] hover:text-black font-bold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View Project Specs</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>

              </TiltCard>
            ))}

          </div>
        )}

      </div>

      {/* Detail Modal */}
      <AnimatePresence>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#189B3F]/50 max-w-xl w-full relative space-y-6 max-h-[90vh] overflow-y-auto"
            >

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0d1117] text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project Header */}
              <div className="space-y-2">

                <span className="text-xs font-mono text-[#00ff66] px-2.5 py-1 rounded bg-[#189B3F]/20">
                  {selectedProject.category}
                </span>

                <h2 className="text-2xl font-extrabold text-white">
                  {selectedProject.title}
                </h2>

              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              {selectedProject.highlights.length > 0 && (
                <div className="space-y-2">

                  <h4 className="text-xs font-mono text-[#00ff66] uppercase">
                    Key Technical Highlights
                  </h4>

                  <ul className="space-y-1 text-xs text-gray-300 font-mono">

                    {selectedProject.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
                        <span>{h}</span>
                      </li>
                    ))}

                  </ul>

                </div>
              )}

              {/* Technologies */}
              {selectedProject.tech.length > 0 && (
                <div className="space-y-2">

                  <h4 className="text-xs font-mono text-[#00ff66] uppercase">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded bg-[#0d1117] text-white border border-[#189B3F]/30"
                      >
                        {t}
                      </span>
                    ))}

                  </div>

                </div>
              )}

              {/* Project URL */}
              {selectedProject.project_url && (
                <a
                  href={selectedProject.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#189B3F] text-black font-bold text-xs"
                >
                  Open Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {/* Close Button */}
              <div className="pt-4 border-t border-white/10 flex justify-end">

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#189B3F] text-black font-bold text-xs uppercase"
                >
                  Close Spec
                </button>

              </div>

            </motion.div>

          </div>
        )}

      </AnimatePresence>

    </div>
  );
}