'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for textbooks, electronics, furniture..."
        className="w-full py-3 px-4 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 top-2 bg-[#FFD700] text-[#003366] px-4 py-1 rounded-full hover:bg-[#E6C200] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366]"
      >
        Search
      </button>
    </form>
  );
}