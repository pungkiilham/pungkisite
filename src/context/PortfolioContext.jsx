'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [profile, setProfile] = useState({
    name: 'Pungki Ilham Rizky Soni',
    title: 'Technical IT Project Manager | Business Analyst | Fullstack Developer',
    location: 'Surabaya, Indonesia',
    email: 'pungkiilham92@gmail.com',
    phone: '+62 819 9953 5316',
    linkedin: 'https://www.linkedin.com/in/pungki-ilham-rizky-soni/',
    availability: 'Open to opportunities',
    summary: `Results-oriented Technical IT Project Manager (8+ years) and Business Analyst (4+ years) 
with cross-functional experience bridging Industrial Mechatronics and Modern IT Systems.

Expert at translating high-level business requirements into technical execution across SaaS, ERP 
(Odoo & Custom Stacks), and IoT/Electrical systems. Proven track record of reducing project 
lifecycles by 20% and delivering end-to-end SaaS solutions in ultra-fast 4-week cycles.`,
    education: {
      institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
      degree: 'Bachelor of Mechatronic Engineering',
      year: '2011 - 2015',
      gpa: '3.24 / 4.00'
    },
    languages: [
      { name: 'Indonesian', level: 'Native' },
      { name: 'English', level: 'B2 (EF SET), TOEFL ITP: 537' }
    ]
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'SaaS Delivery - Odoo 19',
      description: 'Conceived and launched a SaaS solution using Odoo 19 as backbone within a 4-week end-to-end cycle for Diginergy GmbH, Germany.',
      tech: ['Odoo 19', 'ERP', 'SaaS'],
      status: 'completed',
      year: '2025',
      client: 'Diginergy GmbH',
      link: ''
    },
    {
      id: 2,
      title: 'IoT Control System - Food Production',
      description: 'Designed and implemented IoT-based control systems for Surya Inti Aneka Pangan (food production company).',
      tech: ['IoT', 'Microcontrollers', 'PLC', 'Automation'],
      status: 'completed',
      year: '2020',
      client: 'Surya Inti Aneka Pangan',
      link: ''
    },
    {
      id: 3,
      title: 'Public Service System Management',
      description: 'Delivered system management for Department of Transportation, Batu City.',
      tech: ['System Management', 'Public Services'],
      status: 'completed',
      year: '2019',
      client: 'Dept. Transportation, Batu City',
      link: ''
    },
    {
      id: 4,
      title: 'ERP Implementation - Industrial Clients',
      description: 'Oversaw development and implementation of custom ERP/APP solutions across various tech stacks for industrial clients.',
      tech: ['Odoo', 'ERP', 'Custom Development'],
      status: 'completed',
      year: '2021 - 2025',
      client: 'PT Estro Hutama Indonesia',
      link: ''
    },
    {
      id: 5,
      title: 'Fullstack Portfolio Website',
      description: 'Building a personal portfolio website to showcase projects and professional journey using Next.js and React.',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      status: 'in-progress',
      year: '2026',
      client: 'Personal',
      link: ''
    }
  ]);

  const [skills, setSkills] = useState({
    projectManagement: {
      label: 'Project Management',
      level: 'expert',
      items: ['Agile / Scrum', 'SaaS Delivery Cycles', 'Resource Allocation & Planning', 'Stakeholder Management', 'Cross-functional Team Leadership']
    },
    businessAnalysis: {
      label: 'Business Analysis',
      level: 'expert',
      items: ['Requirements Gathering (BRD, FRD, ERD)', 'Process Mapping (BPMN)', 'Odoo ERP Implementation', 'Custom ERP / Application Development']
    },
    softwareDevelopment: {
      label: 'Software Development',
      level: 'intermediate',
      items: [
        { name: 'C#', level: 'advanced' },
        { name: 'PHP / Laravel', level: 'intermediate' },
        { name: 'React / Next.js', level: 'intermediate' },
        { name: 'REST API Integration', level: 'intermediate' }
      ]
    },
    industrialHardware: {
      label: 'Industrial / Hardware',
      level: 'expert',
      items: ['Microcontrollers (Advanced)', 'PLC Programming', 'Electrical Design', 'Mechatronic Engineering']
    },
    tools: {
      label: 'Tools & Platforms',
      level: 'expert',
      items: ['ERP: Odoo 19', 'Project: Asana, Trello, Notion', 'Design: Figma, Adobe XD']
    }
  });

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: 'Started at PT Estro Hutama Indonesia',
      description: 'Project Manager / Business Analyst role in Surabaya',
      year: '2021',
      type: 'career'
    },
    {
      id: 2,
      title: 'Reduced Project Lifecycles by 20%',
      description: 'Achieved through dynamic priority-setting framework and agile resource allocation',
      year: '2022',
      type: 'achievement'
    },
    {
      id: 3,
      title: 'Joined Diginergy GmbH - Germany',
      description: 'Remote Project Manager position with European clients',
      year: '2025',
      type: 'career'
    },
    {
      id: 4,
      title: 'Launched SaaS in 4-week Cycle',
      description: 'First Odoo 19 SaaS delivery for German client',
      year: '2025',
      type: 'achievement'
    }
  ]);

  const [roadmap, setRoadmap] = useState([
    {
      id: 1,
      title: 'Complete Portfolio Website',
      description: 'Finish personal portfolio with dashboard for managing projects and profile',
      status: 'in-progress',
      priority: 'high',
      targetDate: 'Q2 2026'
    },
    {
      id: 2,
      title: 'Add Blog/Articles Section',
      description: 'Share technical insights and project case studies',
      status: 'planned',
      priority: 'medium',
      targetDate: 'Q3 2026'
    },
    {
      id: 3,
      title: 'Implement CMS for Content Management',
      description: 'Add headless CMS integration for easy content updates',
      status: 'planned',
      priority: 'medium',
      targetDate: 'Q3 2026'
    },
    {
      id: 4,
      title: 'Add Project Showcase with Details',
      description: 'Detailed case study pages with metrics, tech stack, and outcomes',
      status: 'planned',
      priority: 'high',
      targetDate: 'Q2 2026'
    },
    {
      id: 5,
      title: 'Add Certification & Training Tracker',
      description: 'Display ongoing certifications and learning progress',
      status: 'planned',
      priority: 'low',
      targetDate: 'Q4 2026'
    },
    {
      id: 6,
      title: 'Multi-language Support',
      description: 'Support for English and Indonesian languages',
      status: 'planned',
      priority: 'low',
      targetDate: 'Q4 2026'
    }
  ]);

  const [progress, setProgress] = useState({
    website: 65,
    projects: 80,
    skills: 75,
    roadmap: 20
  });

  const updateProjectStatus = (id, status) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, status } : p
    ));
  };

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const updateRoadmapItem = (id, updates) => {
    setRoadmap(roadmap.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const updateProgress = (key, value) => {
    setProgress(prev => ({ ...prev, [key]: value }));
  };

  const value = {
    profile,
    projects,
    skills,
    milestones,
    roadmap,
    progress,
    updateProjectStatus,
    addProject,
    updateRoadmapItem,
    updateProgress,
    setProfile,
    setProjects
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

export default PortfolioContext;