'use client';

import Link from 'next/link';

// Define the categories with their icons
const categories = [
  { id: 'textbooks', name: 'Textbooks', icon: '📚' },
  { id: 'electronics', name: 'Electronics', icon: '🖥️' },
  { id: 'furniture', name: 'Furniture', icon: '🪑' },
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'supplies', name: 'School Supplies', icon: '✏️' },
  { id: 'notes', name: 'Course Notes', icon: '📝' },
  { id: 'transportation', name: 'Transportation', icon: '🚲' },
  { id: 'services', name: 'Services', icon: '🔧' },
];

export function CategoryNav() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link 
          key={category.id}
          href={`/category/${category.id}`}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="text-3xl mb-2">{category.icon}</span>
          <span className="text-[#333333] font-medium text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}