import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Shield, Globe, Target, Heart } from 'lucide-react';

const stats = [
  { number: '10L+', label: 'Cars Sold', icon: Award },
  { number: '25L+', label: 'Happy Customers', icon: Users },
  { number: '10+', label: 'Cities', icon: Globe },
  { number: '99.2%', label: 'Customer Satisfaction', icon: Heart },
];

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We believe in complete transparency in all our dealings, ensuring customers get honest pricing and quality assurance.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. We strive to exceed expectations at every touchpoint.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We continuously innovate to make car buying and selling simpler, faster, and more convenient.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards of quality in our cars, services, and customer experience.',
  },
];

const team = [
  {
    name: 'Sachin Singh',
    role: 'Co-Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Visionary leader with 10+ years in real estate sectors.',
  },
  {
    name: 'Sandeep Gulia',
    role: 'Co-Founder & CTO',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Financial strategist with expertise in scaling businesses and managing operations.',
  },
  {
    name: 'Nitin',
    role: 'Co-Founder & CFO',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Expertise of 8+years in car sale/purchase.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About BroCars
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              India's most trusted platform for buying and selling used cars, revolutionizing the automotive industry with technology and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                From a simple idea to Dwarka's largest used car platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="BroCars Story"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Founded in 2015</h3>
                  <p className="text-gray-600">
                    BroCars was founded with a simple mission: to make car buying and selling transparent, 
                    convenient, and trustworthy. What started as a small team with a big vision has now 
                    become Dwarka's most trusted automotive platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Technology-Driven</h3>
                  <p className="text-gray-600">
                    We leverage cutting-edge technology, data analytics, and AI to provide accurate 
                    car valuations, streamline processes, and ensure the best experience for our customers.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pan-India Presence</h3>
                  <p className="text-gray-600">
                    From metros to tier-2 cities, we've expanded our presence across 150+ cities, 
                    making quality used cars accessible to millions of Indians.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries behind BroCars
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl text-blue-100">
                  To revolutionize the used car industry in India by making car buying and selling 
                  transparent, convenient, and trustworthy through technology and innovation.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-xl text-blue-100">
                  To become the most trusted automotive platform globally, empowering millions 
                  of people to make informed decisions about their car ownership journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">
              Recognized for excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Startup 2020</h3>
              <p className="text-gray-600">Economic Times Startup Awards</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Most Trusted Brand</h3>
              <p className="text-gray-600">Brand Trust Report 2023</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Employer</h3>
              <p className="text-gray-600">Great Place to Work 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
