import React from 'react';
import { getPublishedPages } from '../utils/pageManager';

export function Navigation({ onNavigate, currentPath }) {
  const pages = getPublishedPages();

  const handleClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <nav className="card mb-6">
      <ul className="flex space-x-6">
        {pages.map(page => (
          <li key={page.id}>
            <a
              href={page.path}
              onClick={(e) => handleClick(e, page.path)}
              className={`text-gray-300 hover:text-[#ff6b4a] transition-colors duration-200 ${
                currentPath === page.path ? 'text-[#ff6b4a]' : ''
              }`}
            >
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
