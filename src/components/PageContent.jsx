import React from 'react';

export function PageContent({ page }) {
  if (!page) {
    return (
      <div className="card">
        <h1 className="text-2xl text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400">The requested page could not be found.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h1 className="text-2xl text-white mb-4">{page.title}</h1>
      <div className="text-gray-300 mb-6">{page.content}</div>
      
      <div className="text-sm text-gray-400">
        <p>Last modified: {new Date(page.modifiedAt).toLocaleDateString()}</p>
        {page.status === 'draft' && (
          <span className="inline-block mt-2 px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded">
            Draft
          </span>
        )}
      </div>
    </div>
  );
}
