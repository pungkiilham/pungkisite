'use client';

import { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';

export default function ProfileManagement() {
  const { profile, setProfile } = usePortfolio();
  
  const [localProfile, setLocalProfile] = useState({
    name: profile.name,
    title: profile.title,
    bio: profile.summary,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    linkedin: profile.linkedin
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      name: localProfile.name,
      title: localProfile.title,
      summary: localProfile.bio,
      email: localProfile.email,
      phone: localProfile.phone,
      location: localProfile.location,
      linkedin: localProfile.linkedin
    });
    alert('Profile updated successfully!');
  };

  const handleCVUpload = (e) => {
    // TODO: Implement CV upload logic
    const file = e.target.files[0];
    console.log('CV upload:', file);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={localProfile.name}
                onChange={(e) => setLocalProfile({ ...localProfile, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={localProfile.title}
                onChange={(e) => setLocalProfile({ ...localProfile, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bio / Summary</label>
              <textarea
                value={localProfile.bio}
                onChange={(e) => setLocalProfile({ ...localProfile, bio: e.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={localProfile.email}
                onChange={(e) => setLocalProfile({ ...localProfile, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                value={localProfile.phone}
                onChange={(e) => setLocalProfile({ ...localProfile, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={localProfile.location}
                onChange={(e) => setLocalProfile({ ...localProfile, location: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Social Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              <input
                type="url"
                value={localProfile.linkedin}
                onChange={(e) => setLocalProfile({ ...localProfile, linkedin: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* CV Upload */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">CV Upload</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload CV (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleCVUpload}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-gray-900 file:text-white
                hover:file:bg-gray-800"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}