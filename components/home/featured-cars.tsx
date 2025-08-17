'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Fuel, Settings, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { carDatabase } from '@/lib/car-data';
import Image from 'next/image';

export function FeaturedCars() {
  const formatPrice = (price: number) => {
    return (price / 100000).toFixed(1) + ' Lakh';
  };

  // Get first 4 cars from database
  const featuredCars = carDatabase.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sold Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked cars that offer the best value for money with verified quality checks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                {/* <Image 
                  src={car.image} 
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                /> */}
                {car.image && (
                  <Image
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    ₹{((car.originalPrice - car.price) / 1000).toFixed(0)}k saved
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {car.year} {car.make} {car.model}
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
                      <p className="text-sm text-gray-500 line-through">
                        ₹{formatPrice(car.originalPrice)}
                      </p>
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

                  <div className="flex flex-wrap gap-1">
                    {car.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

{/*                   <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                    <Link href={`/car/${car.id}`}>View Details</Link>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="px-8 border-orange-500 text-orange-600 hover:bg-orange-50">
            <Link href="/buy-car">View Available Cars</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
