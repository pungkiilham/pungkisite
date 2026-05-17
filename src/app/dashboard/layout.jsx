import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="block px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Overview
          </Link>
          <Link
            href="/dashboard/works"
            className="block px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Works
          </Link>
          <Link
            href="/dashboard/profile"
            className="block px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Profile
          </Link>
          <Link
            href="/"
            className="block px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            View Site
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {children}
      </div>
    </div>
    );
}