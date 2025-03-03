import Image from "next/image";
import Link from "next/link";

// Placeholder components - these would be in separate files in a real app
const SearchBar = () => (
  <div className="flex w-full max-w-md mx-auto">
    <input
      type="text"
      placeholder="Search for textbooks, furniture, electronics..."
      className="flex-grow px-4 py-3 text-gray-800 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="px-6 py-3 bg-[#FFD700] text-[#003366] font-bold rounded-r-md hover:bg-[#E6C200] transition-colors">
      Search
    </button>
  </div>
);

const CategoryNav = () => {
  const categories = [
    { name: "Textbooks", icon: "📚" },
    { name: "Electronics", icon: "💻" },
    { name: "Furniture", icon: "🪑" },
    { name: "Apparel", icon: "👕" },
    { name: "School Supplies", icon: "📝" },
    { name: "Services", icon: "🔧" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          href={`/category/${category.name.toLowerCase()}`}
          key={category.name}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="text-3xl mb-2">{category.icon}</span>
          <span className="font-medium text-[#333333]">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: "Calculus Textbook",
      price: 45,
      condition: "Like New",
      image: "/placeholder-calculus.jpg",
    },
    {
      id: 2,
      title: "Desk Lamp",
      price: 15,
      condition: "Good",
      image: "/placeholder-lamp.jpg",
    },
    {
      id: 3,
      title: "Graphing Calculator",
      price: 50,
      condition: "New",
      image: "/placeholder-calculator.jpg",
    },
    {
      id: 4,
      title: "Biology Lab Manual",
      price: 20,
      condition: "Good",
      image: "/placeholder-manual.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="h-48 bg-gray-200 relative">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span>{listing.title} Image</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{listing.title}</h3>
            <p className="text-[#003366] font-bold">${listing.price}</p>
            <p className="text-sm text-gray-600">Condition: {listing.condition}</p>
            <button className="mt-3 w-full py-2 bg-[#003366] text-white rounded hover:bg-[#002244] transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const PromoSlider = () => {
  const promos = [
    {
      id: 1,
      title: "End of Semester Sale",
      description: "20% off all textbooks!",
    },
    {
      id: 2,
      title: "Dorm Room Essentials",
      description: "Find everything you need for your dorm.",
    },
    {
      id: 3,
      title: "Study Group Services",
      description: "Connect with tutors and study groups.",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-[#003366] to-[#0A4D8F] text-white">
        <h3 className="text-xl font-bold mb-2">{promos[0].title}</h3>
        <p>{promos[0].description}</p>
        <button className="mt-4 px-4 py-2 bg-[#FFD700] text-[#003366] font-medium rounded hover:bg-[#E6C200] transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#003366] text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-[#FFD700] rounded-full flex items-center justify-center">
              <span className="text-[#003366] font-bold">LE</span>
            </div>
            <h1 className="text-2xl font-bold">Lancer Exchange</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-[#FFD700] transition-colors">Home</Link>
            <Link href="/browse" className="hover:text-[#FFD700] transition-colors">Browse</Link>
            <Link href="/about" className="hover:text-[#FFD700] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#FFD700] transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="px-4 py-2 rounded hover:bg-[#002244] transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-4 py-2 bg-[#FFD700] text-[#003366] font-medium rounded hover:bg-[#E6C200] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#003366] to-[#0A4D8F] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Buy, Sell, and Trade with Fellow Lancers</h2>
              <p className="text-lg mb-8">Find textbooks, course materials, and more on CBU's premier marketplace</p>
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">Browse Categories</h2>
            <CategoryNav />
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">Featured Listings</h2>
            <FeaturedListings />
          </div>
        </section>

        {/* Promo Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">Special Deals</h2>
            <PromoSlider />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#333333] mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#003366] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Create an Account</h3>
                <p className="text-gray-600">Sign up with your CBU email to join our trusted community.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#003366] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">List or Browse</h3>
                <p className="text-gray-600">Post items for sale or find what you need at affordable prices.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#003366] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect & Exchange</h3>
                <p className="text-gray-600">Message securely and meet on campus to complete the transaction.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Lancer Exchange</h3>
              <p className="text-sm">The premier marketplace for CBU students</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/browse" className="hover:text-[#FFD700]">Browse Listings</Link></li>
                <li><Link href="/create-listing" className="hover:text-[#FFD700]">Sell an Item</Link></li>
                <li><Link href="/faq" className="hover:text-[#FFD700]">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/safety-tips" className="hover:text-[#FFD700]">Safety Tips</Link></li>
                <li><Link href="/terms" className="hover:text-[#FFD700]">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FFD700]">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm mb-2">support@lancerexchange.com</p>
              <p className="text-sm">California Baptist University</p>
              <p className="text-sm">Riverside, CA 92504</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-blue-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Lancer Exchange. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}