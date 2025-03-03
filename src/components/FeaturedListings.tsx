'use client';

import Image from 'next/image';
import Link from 'next/link';

// Mock data for featured listings
const mockListings = [
  {
    id: '1',
    title: 'Organic Chemistry Textbook',
    price: 65,
    image: '/api/placeholder/300/200',
    category: 'Textbooks',
    condition: 'Like New',
    seller: 'Emily Johnson',
  },
  {
    id: '2',
    title: 'TI-84 Plus Calculator',
    price: 45,
    image: '/api/placeholder/300/200',
    category: 'Electronics',
    condition: 'Good',
    seller: 'Marcus Chen',
  },
  {
    id: '3',
    title: 'Dorm Desk Lamp',
    price: 15,
    image: '/api/placeholder/300/200',
    category: 'Furniture',
    condition: 'Excellent',
    seller: 'Jessica Lee',
  },
  {
    id: '4',
    title: 'Biology Lab Coat (Size M)',
    price: 20,
    image: '/api/placeholder/300/200',
    category: 'Clothing',
    condition: 'New',
    seller: 'David Wilson',
  },
  {
    id: '5',
    title: 'Psychology 101 Notes',
    price: 12,
    image: '/api/placeholder/300/200',
    category: 'Course Notes',
    condition: 'N/A',
    seller: 'Sophia Martinez',
  },
  {
    id: '6',
    title: 'Wireless Bluetooth Headphones',
    price: 35,
    image: '/api/placeholder/300/200',
    category: 'Electronics',
    condition: 'Good',
    seller: 'James Taylor',
  },
];

export function FeaturedListings() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockListings.map((listing) => (
        <Link key={listing.id} href={`/listing/${listing.id}`}>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#333333] mb-1 truncate">{listing.title}</h3>
              <p className="text-[#003366] font-bold mb-2">${listing.price}</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{listing.category}</span>
                <span>{listing.condition}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500">
                Seller: {listing.seller}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}