import React from 'react';
import { FaSearch } from 'react-icons/fa';

export function SearchBar({ onSearch, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          name="search"
          className="search-input pl-12"
          placeholder="Search legal topics..."
          required
        />
      </div>
    </form>
  );
}
