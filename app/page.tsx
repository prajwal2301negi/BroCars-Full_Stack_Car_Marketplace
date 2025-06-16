import { Hero } from '@/components/home/hero';
import { FeaturedCars } from '@/components/home/featured-cars';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { Stats } from '@/components/home/stats';
import { Testimonials } from '@/components/home/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
    </div>
  );
}