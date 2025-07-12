'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Fuel, Settings, Calendar, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { carDatabase, filterCars, sortCars, type Car } from '@/lib/car-data';
import Image from 'next/image';

interface CarListProps {
  filters: any;
  sortBy: string;
  searchQuery: string;
}

export function CarList({ filters, sortBy, searchQuery }: CarListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedCars, setLikedCars] = useState<number[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const carsPerPage = 12;

  // Fetch cars from API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("https://brocarsserver.onrender.com/api/v1/car/getCars");
        const apiCars: Car[] = response.data.cars || [];
        const verifiedCars = apiCars.filter((car) => car.verified === true);

        const carsToUse = verifiedCars
        setAllCars(carsToUse);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setError("Failed to fetch cars from server. Using local data.");
        // Fallback to local database
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Apply filters, search, and sorting
  useEffect(() => {
    if (allCars.length === 0) return;

    let cars = [...allCars];

    // Apply search query
    if (searchQuery) {
      cars = cars.filter(car =>
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.variant.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    cars = filterCars(cars, filters);

    // Apply sorting
    cars = sortCars(cars, sortBy);

    setFilteredCars(cars);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allCars, filters, sortBy, searchQuery]);

  const formatPrice = (price: number) => {
    return (price / 100000).toFixed(1) + ' Lakh';
  };

  const toggleLike = (carId: number) => {
    setLikedCars(prev =>
      prev.includes(carId)
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + carsPerPage);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">Loading cars...</div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Error Message */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">{error}</p>
        </div>
      )}

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {startIndex + 1}-{Math.min(startIndex + carsPerPage, filteredCars.length)} of {filteredCars.length} cars
        </p>
      </div>

      {/* Car Grid */}
      {paginatedCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {paginatedCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                {car?.displayImg?.url && (
                  <Image
                    src={car.displayImg.url}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${likedCars.includes(car.id) ? 'text-red-500' : 'text-gray-600'
                    }`}
                  onClick={() => toggleLike(car.id)}
                >
                  <Heart className={`h-4 w-4 ${likedCars.includes(car.id) ? 'fill-current' : ''}`} />
                </Button>
                <div className="absolute top-2 left-2 space-y-1">
                  {car.verified && (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      Verified
                    </Badge>
                  )}
                  {/* <Badge variant="secondary" className="bg-orange-100 text-orange-800 block">
                    ₹{((car.originalPrice - car.price) / 1000).toFixed(0)}k saved
                  </Badge> */}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {car.year} {car.make} {car.model} {car.variant}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center">
                        <Fuel className="h-4 w-4 mr-1" />
                        {car.fuel}
                      </div>
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-1" />
                        {car.transmission}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-orange-600">
                        ₹{formatPrice(car.price)}
                      </p>
                      {/* <p className="text-sm text-gray-500 line-through">
                        ₹{formatPrice(car.originalPrice)}
                      </p> */}
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {car.kms.toLocaleString()} km
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {car.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{car.owner}</span>
                    <span>{car.color} • {car.bodyType}</span>
                  </div>

                  {/* <div className="flex flex-wrap gap-1">
                    {car.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div> */}

                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  
                      <Link href={`/car/${car._id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">No cars found matching your criteria</div>
          <p className="text-gray-400">Try adjusting your filters to see more results</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>

              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNumber);
                      }}
                      isActive={currentPage === pageNumber}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
