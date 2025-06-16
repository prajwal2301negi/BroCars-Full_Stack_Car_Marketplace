'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Car, DollarSign, Shield } from 'lucide-react';
import Link from 'next/link';
import { filterOptions } from '@/lib/car-data';

export function Hero() {
  const [searchType, setSearchType] = useState('buy');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [searchModel, setSearchModel] = useState('');

  const handleSearch = () => {
    if (searchType === 'buy') {
      const params = new URLSearchParams();
      if (selectedCity) params.set('city', selectedCity);
      if (selectedBudget) {
        const budget = filterOptions.priceRanges.find(range => range.label === selectedBudget);
        if (budget) params.set('priceRange', `${budget.min}-${budget.max}`);
      }
      if (searchModel) params.set('model', searchModel);
      
      return `/buy-car?${params.toString()}`;
    }
    return '/sell-car1';
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            India's Most Trusted Platform to 
            <span className="text-yellow-300"> Buy & Sell </span>
            Used Cars
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-orange-100">
            Get the best deals on certified pre-owned cars with warranty and easy financing
          </p>

          {/* Search Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-1 backdrop-blur-sm">
              <Button
                variant={searchType === 'buy' ? 'default' : 'ghost'}
                onClick={() => setSearchType('buy')}
                className={`px-6 py-2 ${searchType === 'buy' ? 'bg-white text-orange-600' : 'text-white hover:bg-white/20'}`}
              >
                <Car className="h-4 w-4 mr-2" />
                Buy Car
              </Button>
              <Button
                variant={searchType === 'sell' ? 'default' : 'ghost'}
                onClick={() => setSearchType('sell')}
                className={`px-6 py-2 ${searchType === 'sell' ? 'bg-white text-orange-600' : 'text-white hover:bg-white/20'}`}
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Sell Car
              </Button>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
            {searchType === 'buy' ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="text-gray-900">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger className="text-gray-900">
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.priceRanges.map((range) => (
                      <SelectItem key={range.label} value={range.label}>{range.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input 
                  placeholder="Search car model..." 
                  className="text-gray-900"
                  value={searchModel}
                  onChange={(e) => setSearchModel(e.target.value)}
                />
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href={handleSearch()}>
                    <Search className="h-4 w-4 mr-2" />
                    Search Cars
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input 
                  placeholder="Enter your car registration number" 
                  className="text-gray-900 md:col-span-2"
                />
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/sell-car1">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Get Quote
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Cars</h3>
              <p className="text-orange-100">200+ quality checks on every car</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-orange-100">Transparent pricing with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Finance</h3>
              <p className="text-orange-100">Instant loan approval in minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}