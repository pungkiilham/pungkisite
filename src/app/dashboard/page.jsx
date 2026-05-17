'use client';

import { usePortfolio } from '@/context/PortfolioContext';
import Link from 'next/link';

export default function Dashboard() {
  const { projects, roadmap, progress, milestones } = usePortfolio();

  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const inProgressProjects = projects.filter(p => p.status === 'in-progress').length;
  const plannedProjects = projects.filter(p => p.status === 'planned').length;
  
  const inProgressRoadmap = roadmap.filter(r => r.status === 'in-progress').length;
  const plannedRoadmap = roadmap.filter(r => r.status === 'planned').length;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Website Progress</h3>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-900">{progress.website}%</p>
            <div className="ml-4 flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-gray-900 h-2 rounded-full" style={{ width: `${progress.website}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Projects Completed</h3>
          <p className="text-2xl font-bold text-gray-900">{completedProjects}/{projects.length}</p>
          <p className="text-xs text-green-600 mt-1">{inProgressProjects} in progress</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Roadmap Progress</h3>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-900">{progress.roadmap}%</p>
            <div className="ml-4 flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress.roadmap}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Skills Progress</h3>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-900">{progress.skills}%</p>
            <div className="ml-4 flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: `${progress.skills}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Project Status</h2>
            <Link href="/dashboard/works" className="text-sm text-gray-600 hover:text-gray-900">View All →</Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Completed</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(completedProjects/projects.length)*100}%` }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{completedProjects}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">In Progress</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(inProgressProjects/projects.length)*100}%` }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{inProgressProjects}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Planned</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: `${(plannedProjects/projects.length)*100}%` }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{plannedProjects}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Future Roadmap</h2>
          </div>
          <div className="space-y-3">
            {roadmap.slice(0, 4).map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2 rounded bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">Target: {item.targetDate}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 
                  item.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.status === 'in-progress' ? 'In Progress' : item.status === 'completed' ? 'Done' : 'Planned'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Milestones */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Milestones</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="p-4 flex items-start">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-sm font-bold text-gray-900">{milestone.year}</span>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">{milestone.title}</p>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  milestone.type === 'achievement' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {milestone.type === 'achievement' ? 'Achievement' : 'Career'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}