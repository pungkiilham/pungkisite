'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePortfolio } from '@/context/PortfolioContext';

const statusColors = {
  'completed': 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'planned': 'bg-gray-100 text-gray-800'
};

const statusLabels = {
  'completed': 'Completed',
  'in-progress': 'In Progress',
  'planned': 'Planned'
};

export default function WorksManagement() {
  const { projects, updateProjectStatus, addProject } = usePortfolio();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWork, setCurrentWork] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    tech: '',
    year: '',
    client: '',
    status: 'planned'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentWork.id) {
      updateProjectStatus(currentWork.id, currentWork.status);
    } else {
      addProject({
        ...currentWork,
        tech: currentWork.tech.split(',').map(t => t.trim())
      });
    }
    setIsModalOpen(false);
    setCurrentWork({
      title: '',
      description: '',
      image: '',
      link: '',
      tech: '',
      year: '',
      client: '',
      status: 'planned'
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Works</h1>
        <button
          onClick={() => {
            setCurrentWork({ 
              title: '', 
              description: '', 
              image: '/placeholder.jpg', 
              link: '',
              tech: '',
              year: new Date().getFullYear().toString(),
              client: '',
              status: 'planned'
            });
            setIsModalOpen(true);
          }}
          className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add New Work
        </button>
      </div>

      {/* Works List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((work) => (
          <div key={work.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src={work.image || '/placeholder.jpg'}
                alt={work.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[work.status]}`}>
                  {statusLabels[work.status]}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{work.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{work.description}</p>
              {work.tech && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {work.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex justify-end space-x-2">
                <select
                  value={work.status}
                  onChange={(e) => updateProjectStatus(work.id, e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                >
                  <option value="planned">Planned</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <button
                  onClick={() => {
                    setCurrentWork({ ...work, tech: work.tech.join(', ') });
                    setIsModalOpen(true);
                  }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentWork.id ? 'Edit Work' : 'Add New Work'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={currentWork.title}
                  onChange={(e) => setCurrentWork({ ...currentWork, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={currentWork.description}
                  onChange={(e) => setCurrentWork({ ...currentWork, description: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  value={currentWork.tech}
                  onChange={(e) => setCurrentWork({ ...currentWork, tech: e.target.value })}
                  placeholder="React, Node.js, MongoDB"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Client / Company
                </label>
                <input
                  type="text"
                  value={currentWork.client}
                  onChange={(e) => setCurrentWork({ ...currentWork, client: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <input
                  type="text"
                  value={currentWork.year}
                  onChange={(e) => setCurrentWork({ ...currentWork, year: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={currentWork.status}
                  onChange={(e) => setCurrentWork({ ...currentWork, status: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                >
                  <option value="planned">Planned</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  value={currentWork.image}
                  onChange={(e) => setCurrentWork({ ...currentWork, image: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Link
                </label>
                <input
                  type="url"
                  value={currentWork.link}
                  onChange={(e) => setCurrentWork({ ...currentWork, link: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                />
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800"
                >
                  {currentWork.id ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}