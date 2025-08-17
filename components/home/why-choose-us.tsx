import { Shield, Award, Clock, HeadphonesIcon, CreditCard, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '200+ Quality Checks',
    description: 'Every car goes through comprehensive quality inspection to ensure you get the best value.',
  },
  {
    icon: Award,
    title: 'Certified Cars',
    description: 'All cars come with detailed inspection reports and certified quality assurance.',
  },
  {
    icon: Clock,
    title: 'Instant Loan Approval',
    description: 'Get pre-approved loans in minutes with our partner banks and NBFCs.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to help you with your car buying journey.',
  },
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    description: 'No hidden charges. What you see is what you pay with complete price transparency.',
  },
  {
    icon: MapPin,
    title: 'Doorstep Service',
    description: 'Car inspection, documentation, and delivery right at your doorstep.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BroCars?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            India's most trusted platform with end-to-end solutions for buying and selling used cars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
