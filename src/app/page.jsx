'use client';

import { usePortfolio } from '@/context/PortfolioContext';

export default function Home() {
  const { profile, projects, skills, milestones } = usePortfolio();

  const completedProjects = projects.filter(p => p.status === 'completed');

  return (
    <div className="container-padding">
      {/* Header / About */}
      <section id="about" className="section-spacing">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Open to Work
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-2">
            {profile.name}
          </h1>
          <p className="text-xl text-gray-600 mb-4 font-medium">
            {profile.title}
          </p>
          <p className="text-gray-600 mb-6">{profile.location}</p>
          <div className="flex flex-wrap gap-3 mb-6 py-2">
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="summary" className="section-spacing bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-gray-300 mr-4">02</span>
            <h2 className="text-2xl font-bold text-gray-900">Professional Summary</h2>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {profile.summary}
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-spacing">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-gray-300 mr-4">03</span>
            <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          
          <div className="space-y-8">
            {/* Diginergy GmbH */}
            <div className="border-l-4 border-gray-900 pl-4">
              <h3 className="text-xl font-bold text-gray-900">Project Manager</h3>
              <p className="text-gray-600 font-medium">Diginergy GmbH — Germany (Remote)</p>
              <p className="text-gray-500 text-sm mb-2">August 2025 – Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Conceived and launched a SaaS solution using Odoo 19 as backbone within a 4-week end-to-end cycle</li>
                <li>Achieved 20% reduction in project timelines via dynamic priority-setting framework and agile resource allocation</li>
                <li>Bridged German client requirements and technical development teams — 100% alignment with functional specifications</li>
                <li>Established high-performance "Squad Culture" improving team cohesion and knowledge transfer efficiency</li>
              </ul>
            </div>

            {/* PT Estro Hutama */}
            <div className="border-l-4 border-gray-400 pl-4">
              <h3 className="text-xl font-bold text-gray-900">Project Manager / Business Analyst</h3>
              <p className="text-gray-600 font-medium">Estro Hutama Indonesia — Indonesia (Hybrid)</p>
              <p className="text-gray-500 text-sm mb-2">January 2021 – March 2025</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Managed full project lifecycles for industrial clients → 20% increase in project capacity through optimized resource planning</li>
                <li>Spearheaded gathering and translation of complex stakeholder needs into actionable technical tasks and process documentation (BPMN)</li>
                <li>Conducted detailed operational audits identifying bottlenecks → developed digital solutions improving measurable project ROI</li>
                <li>Oversaw development and implementation of custom ERP/APP solutions across various tech stacks</li>
              </ul>
            </div>

            {/* Previous Experience */}
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-xl font-bold text-gray-900">Electrical Engineering & Automation Specialist</h3>
              <p className="text-gray-600 font-medium">Various Industrial Projects — Indonesia</p>
              <p className="text-gray-500 text-sm mb-2">July 2015 – Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Designed and implemented IoT-based control systems for food production (Surya Inti Aneka Pangan)</li>
                <li>System management for public service — Department of Transportation, Batu City</li>
                <li>Specialized in Microcontrollers, PLCs, and synchronizing hardware with software layers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-spacing bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-gray-300 mr-4">04</span>
            <h2 className="text-2xl font-bold text-gray-900">Key Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {completedProjects.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.year} | {project.client}</p>
                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech && project.tech.map((t, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-spacing">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-gray-300 mr-4">05</span>
            <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Project Management Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Project Management</h3>
              </div>
              <ul className="space-y-1">
                {skills.projectManagement.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Analysis Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Business Analysis</h3>
              </div>
              <ul className="space-y-1">
                {skills.businessAnalysis.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Development Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Software Development</h3>
              </div>
              <ul className="space-y-1">
                {skills.softwareDevelopment.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {item.name} <span className="text-gray-400 ml-1">({item.level})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Platforms Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Tools & Platforms</h3>
              </div>
              <ul className="space-y-1">
                {skills.tools.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Industrial / Hardware Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Industrial / Hardware</h3>
              </div>
              <ul className="space-y-1">
                {skills.industrialHardware.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Languages</h3>
              </div>
              <ul className="space-y-1">
                {profile.languages.map((lang, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {lang.name} <span className="text-gray-400 ml-1">— {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-spacing bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-gray-300 mr-4">06</span>
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="border-l-4 border-gray-900 pl-4">
            <h3 className="text-xl font-bold text-gray-900">{profile.education.institution}</h3>
            <p className="text-gray-700">{profile.education.degree}</p>
            <p className="text-gray-500">{profile.education.year} | GPA: {profile.education.gpa}</p>
          </div>
        </div>
      </section>

      {/* Target Roles */}
      <section id="target-roles" className="section-spacing">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-gray-300 mr-4">07</span>
            <h2 className="text-2xl font-bold text-gray-900">Target Roles</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              IT Project Manager — SaaS / ERP implementation
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Business Analyst — Digital transformation
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Technical Consultant — Odoo / ERP specialist
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              Fullstack Developer — Laravel / React / C#
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-spacing bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-gray-300 mr-4">08</span>
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          </div>
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-2">
              Feel free to reach out via email or LinkedIn for any inquiries or collaboration opportunities.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href={`mailto:${profile.email}`} 
                className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 inline-block"
              >
                Email Me
              </a>
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-900 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-200 inline-block"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-8">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}