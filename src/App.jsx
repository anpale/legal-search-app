import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { ResultsList } from './components/ResultsList';
import { Sidebar } from './components/Sidebar';
import { PopularTopics } from './components/PopularTopics';
import { RecentSearches } from './components/RecentSearches';
import { Navigation } from './components/Navigation';
import { PageContent } from './components/PageContent';
import { PageMeta } from './components/PageMeta';
import { getPageByPath, getPageById } from './utils/pageManager';
import { legalData } from './data/legalData';

export default function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const itemsPerPage = 5;

  useEffect(() => {
    // Get current path and load corresponding page
    const path = window.location.pathname;
    const pageData = getPageByPath(path) || getPageById('home');
    setCurrentPage(pageData);

    // Handle browser navigation
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const handleNavigation = () => {
    const path = window.location.pathname;
    const pageData = getPageByPath(path) || getPageById('home');
    setCurrentPage(pageData);
  };

  const handlePageChange = (path) => {
    window.history.pushState({}, '', path);
    const pageData = getPageByPath(path);
    setCurrentPage(pageData);
  };

  const handleSearch = (query) => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredResults = legalData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.snippet.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setPage(1);
      setIsLoading(false);
    }, 500);
  };

  const paginatedResults = results.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <PageMeta page={currentPage} />
          
          <Navigation onNavigate={handlePageChange} currentPath={currentPage?.path} />
          
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              {results.length === 0 && !isLoading && (
                <PageContent page={currentPage} />
              )}

              {results.length > 0 && (
                <div className="card">
                  <ResultsList
                    results={paginatedResults}
                    page={page}
                    totalPages={Math.ceil(results.length / itemsPerPage)}
                    onPageChange={setPage}
                  />
                </div>
              )}

              {currentPage?.id === 'home' && results.length === 0 && (
                <div className="card mt-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Popular Topics</h2>
                  <PopularTopics />
                </div>
              )}
            </div>

            <div className="col-span-4">
              <div className="card">
                <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                <RecentSearches />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
