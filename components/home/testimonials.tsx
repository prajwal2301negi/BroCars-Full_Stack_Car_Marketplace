'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    avatar: '/placeholder-avatar-1.jpg',
    rating: 5,
    text: 'Amazing experience! Got my dream car at the best price. The entire process was smooth and transparent.',
    car: 'Honda City',
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai',
    avatar: '/placeholder-avatar-2.jpg',
    rating: 5,
    text: 'Sold my car in just 2 days! BroCars offered the best price and handled all the paperwork.',
    car: 'Maruti Swift',
  },
  {
    name: 'Amit Kumar',
    location: 'Bangalore',
    avatar: '/placeholder-avatar-3.jpg',
    rating: 5,
    text: 'Excellent service and support. The car quality checks gave me confidence in my purchase.',
    car: 'Hyundai Creta',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read genuine reviews from thousands of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-blue-600">{testimonial.car}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}