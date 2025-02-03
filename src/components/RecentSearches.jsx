import React from 'react';
import { getPublishedPages } from '../utils/pageManager';

export function RecentSearches() {
  const recentPages = getPublishedPages().slice(0, 3);

  return (
    <div className="space-y-4">
      {recentPages.map((page) => (
        <div key={page.id} className="p-4 rounded-xl bg-[#2b3241] hover:bg-[#323a4b] cursor-pointer transition-colors duration-200">
          <p className="text-gray-200">{page.title}</p>
          <p className="text-sm text-gray-400 mt-1">
            {new Date(page.modifiedAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
