'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';
import { filterOptions } from '@/lib/car-data';
import { useState, useEffect } from 'react';

interface CarFiltersProps {
  filters: any;
  onFiltersChange: (filters: any) => void;
}

export function CarFilters({ filters, onFiltersChange }: CarFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [yearRange, setYearRange] = useState([2000, 2024]);
  const [kmRange, setKmRange] = useState([0, 200000]);
  const [selectedMake, setSelectedMake] = useState('');

  useEffect(() => {
    // Update filters when sliders change
    onFiltersChange({
      ...filters,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
      yearMin: yearRange[0],
      yearMax: yearRange[1],
      kmMin: kmRange[0],
      kmMax: kmRange[1],
    });
  }, [priceRange, yearRange, kmRange]);

  const updateFilter = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: string, value: string) => {
    const currentValues = filters[key] ? filters[key].split(',').filter(Boolean) : [];
    let newValues;
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter((v: string) => v !== value);
    } else {
      newValues = [...currentValues, value];
    }
    
    updateFilter(key, newValues.join(','));
  };

  const clearFilters = () => {
    setPriceRange([0, 5000000]);
    setYearRange([2000, 2024]);
    setKmRange([0, 200000]);
    setSelectedMake('');
    onFiltersChange({
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
  };

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${(price / 1000).toFixed(0)}K`;
  };

  const formatKm = (km: number) => {
    if (km >= 100000) {
      return `${(km / 100000).toFixed(1)}L km`;
    }
    return `${(km / 1000).toFixed(0)}K km`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={5000000}
              min={0}
              step={50000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Make & Model */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Make & Model</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Make</Label>
            <Select value={selectedMake} onValueChange={(value) => {
              setSelectedMake(value);
              updateFilter('make', value);
              updateFilter('model', ''); // Clear model when make changes
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.makes.map((make) => (
                  <SelectItem key={make} value={make}>{make}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {selectedMake && (
            <div>
              <Label className="text-sm font-medium">Model</Label>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {filterOptions.models[selectedMake as keyof typeof filterOptions.models]?.map((model) => (
                  <div key={model} className="flex items-center space-x-2">
                    <Checkbox 
                      id={model}
                      checked={filters.model?.includes(model) || false}
                      onCheckedChange={() => toggleArrayFilter('model', model)}
                    />
                    <Label htmlFor={model} className="text-sm">{model}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Fuel Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Fuel Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filterOptions.fuelTypes.map((fuel) => (
              <div key={fuel} className="flex items-center space-x-2">
                <Checkbox 
                  id={fuel}
                  checked={filters.fuelType?.includes(fuel) || false}
                  onCheckedChange={() => toggleArrayFilter('fuelType', fuel)}
                />
                <Label htmlFor={fuel} className="text-sm">{fuel}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transmission */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Transmission</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filterOptions.transmissions.map((trans) => (
              <div key={trans} className="flex items-center space-x-2">
                <Checkbox 
                  id={trans}
                  checked={filters.transmission?.includes(trans) || false}
                  onCheckedChange={() => toggleArrayFilter('transmission', trans)}
                />
                <Label htmlFor={trans} className="text-sm">{trans}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Body Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Body Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filterOptions.bodyTypes.map((body) => (
              <div key={body} className="flex items-center space-x-2">
                <Checkbox 
                  id={body}
                  checked={filters.bodyType?.includes(body) || false}
                  onCheckedChange={() => toggleArrayFilter('bodyType', body)}
                />
                <Label htmlFor={body} className="text-sm">{body}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Year Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={yearRange}
              onValueChange={setYearRange}
              max={2024}
              min={2000}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{yearRange[0]}</span>
              <span>{yearRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KMs Driven */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">KMs Driven</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={kmRange}
              onValueChange={setKmRange}
              max={200000}
              min={0}
              step={5000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatKm(kmRange[0])}</span>
              <span>{formatKm(kmRange[1])}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* City */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">City</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filterOptions.cities.map((city) => (
              <div key={city} className="flex items-center space-x-2">
                <Checkbox 
                  id={city}
                  checked={filters.city?.includes(city) || false}
                  onCheckedChange={() => toggleArrayFilter('city', city)}
                />
                <Label htmlFor={city} className="text-sm">{city}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Color */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Color</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filterOptions.colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox 
                  id={color}
                  checked={filters.color?.includes(color) || false}
                  onCheckedChange={() => toggleArrayFilter('color', color)}
                />
                <Label htmlFor={color} className="text-sm">{color}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Owner */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Owner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filterOptions.owners.map((owner) => (
              <div key={owner} className="flex items-center space-x-2">
                <Checkbox 
                  id={owner}
                  checked={filters.owner?.includes(owner) || false}
                  onCheckedChange={() => toggleArrayFilter('owner', owner)}
                />
                <Label htmlFor={owner} className="text-sm">{owner}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}