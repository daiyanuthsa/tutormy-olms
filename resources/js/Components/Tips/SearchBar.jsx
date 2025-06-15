import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import PrimaryButton from '../PrimaryButton';

export default function SearchBar({ initialQuery, onSearch }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');

  const performSearch = () => {
    onSearch(searchQuery);
  };

  useEffect(() => {
    setSearchQuery(initialQuery || '');
  }, [initialQuery]);


  return (
    <div className="flex items-center w-full gap-4 text-white">
      <div className="relative flex-1">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Cari kelas"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              performSearch();
            }
          }}
          className="w-full pl-12 py-2.5 rounded-2xl placeholder:text-neutral-1 bg-transparent border-2 border-primary-3 focus:border-primary-3 focus:ring-primary-3 focus:outline-none text-white"
        />
      </div>

      <PrimaryButton
        onClick={performSearch}
        variant='tertiary'
        className='rounded-full whitespace-nowrap'
      >
        Search
      </PrimaryButton>
    </div>
  );
}