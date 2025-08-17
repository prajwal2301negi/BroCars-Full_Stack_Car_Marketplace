// 'use client';

// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { CarFilters } from '@/components/buy-car/car-filters';
// import { CarList } from '@/components/buy-car/car-list';
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
// import { Search, SlidersHorizontal } from 'lucide-react';

// export default function BuyCarPage() {
//   const searchParams = useSearchParams();
//   const [showFilters, setShowFilters] = useState(false);
//   const [sortBy, setSortBy] = useState('relevance');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     make: '',
//     model: '',
//     priceMin: 0,
//     priceMax: 5000000,
//     fuelType: '',
//     transmission: '',
//     bodyType: '',
//     yearMin: 2000,
//     yearMax: 2024,
//     kmMin: 0,
//     kmMax: 200000,
//     city: '',
//     color: '',
//     owner: '',
//   });

//   // Initialize filters from URL parameters
//   useEffect(() => {
//     const urlFilters = { ...filters };
    
//     // Handle URL parameters
//     if (searchParams.get('make')) {
//       urlFilters.make = searchParams.get('make') || '';
//     }
//     if (searchParams.get('model')) {
//       urlFilters.model = searchParams.get('model') || '';
//     }
//     if (searchParams.get('bodyType')) {
//       urlFilters.bodyType = searchParams.get('bodyType') || '';
//     }
//     if (searchParams.get('fuelType')) {
//       urlFilters.fuelType = searchParams.get('fuelType') || '';
//     }
//     if (searchParams.get('transmission')) {
//       urlFilters.transmission = searchParams.get('transmission') || '';
//     }
//     if (searchParams.get('city')) {
//       urlFilters.city = searchParams.get('city') || '';
//     }
    
//     // Handle price range
//     const priceRange = searchParams.get('priceRange');
//     if (priceRange) {
//       const [min, max] = priceRange.split('-').map(Number);
//       urlFilters.priceMin = min;
//       urlFilters.priceMax = max;
//     }
    
//     setFilters(urlFilters);
//   }, [searchParams]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Buy Used Cars</h1>
//           <p className="text-gray-600">Find your perfect pre-owned car from thousands of verified listings</p>
//         </div>

//         {/* Search and Sort Bar */}
//         <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//           <div className="flex flex-col lg:flex-row gap-4 items-center">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <Input
//                 placeholder="Search by make, model, or keyword..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <div className="flex gap-2">
//               <Button
//                 variant="outline"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="flex items-center gap-2"
//               >
//                 <SlidersHorizontal className="h-4 w-4" />
//                 Filters
//               </Button>
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-48">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="relevance">Relevance</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="year-new">Year: Newest First</SelectItem>
//                   <SelectItem value="year-old">Year: Oldest First</SelectItem>
//                   <SelectItem value="km-low">KMs: Low to High</SelectItem>
//                   <SelectItem value="km-high">KMs: High to Low</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-6">
//           {/* Filters Sidebar */}
//           <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80`}>
//             <CarFilters filters={filters} onFiltersChange={setFilters} />
//           </div>

//           {/* Car Listings */}
//           <div className="flex-1">
//             <CarList filters={filters} sortBy={sortBy} searchQuery={searchQuery} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CarFilters } from '@/components/buy-car/car-filters';
import { CarList } from '@/components/buy-car/car-list';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function BuyCarPage() {
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    priceMin: 0,
    priceMax: 5000000,
    fuelType: '',
    transmission: '',
    bodyType: '',
    yearMin: 2000,
    yearMax: 2024,
    kmMin: 0,
    kmMax: 200000,
    city: '',
    color: '',
    owner: '',
  });

  // Initialize filters from URL parameters
  useEffect(() => {
    const urlFilters = { ...filters };
    
    // Handle URL parameters
    if (searchParams.get('make')) {
      urlFilters.make = searchParams.get('make') || '';
    }
    if (searchParams.get('model')) {
      urlFilters.model = searchParams.get('model') || '';
    }
    if (searchParams.get('bodyType')) {
      urlFilters.bodyType = searchParams.get('bodyType') || '';
    }
    if (searchParams.get('fuelType')) {
      urlFilters.fuelType = searchParams.get('fuelType') || '';
    }
    if (searchParams.get('transmission')) {
      urlFilters.transmission = searchParams.get('transmission') || '';
    }
    if (searchParams.get('city')) {
      urlFilters.city = searchParams.get('city') || '';
    }
    
    // Handle price range
    const priceRange = searchParams.get('priceRange');
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      urlFilters.priceMin = min;
      urlFilters.priceMax = max;
    }
    
    setFilters(urlFilters);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Buy Used Cars</h1>
          <p className="text-gray-600">Find your perfect pre-owned car from thousands of verified listings</p>
        </div>

        {/* Search and Sort Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by make, model, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                  <SelectItem value="km-low">KMs: Low to High</SelectItem>
                  <SelectItem value="km-high">KMs: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80`}>
            <CarFilters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Car Listings */}
          <div className="flex-1">
            <CarList filters={filters} sortBy={sortBy} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}
