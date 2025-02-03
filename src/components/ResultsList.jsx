import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export function ResultsList({ results, page, totalPages, onPageChange }) {
  return (
    <div>
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.id} className="p-4 rounded-xl bg-[#2b3241] hover:bg-[#323a4b] transition-colors duration-200">
            <h3 className="text-lg font-semibold text-white mb-2">
              <a href={result.url} className="hover:text-[#ff6b4a] flex items-center gap-2">
                {result.title}
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </h3>
            <p className="text-gray-400 text-sm">{result.snippet}</p>
            <div className="mt-2">
              <span className="text-xs text-[#ff6b4a] bg-[#ff6b4a]/10 px-2 py-1 rounded">
                {result.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  page === i + 1
                    ? 'bg-[#ff6b4a] text-white'
                    : 'bg-[#2b3241] text-gray-400 hover:bg-[#323a4b]'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
