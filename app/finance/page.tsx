import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, Calculator, FileText, Users } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Clock,
    title: 'Instant Approval',
    description: 'Get pre-approved in just 2 minutes with our AI-powered system',
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Bank-grade security for all your financial information',
  },
  {
    icon: Calculator,
    title: 'Best Rates',
    description: 'Competitive interest rates starting from 8.5% per annum',
  },
  {
    icon: FileText,
    title: 'Minimal Documentation',
    description: 'Simple paperwork with digital document upload',
  },
];

const loanOptions = [
  {
    title: 'New Car Loan',
    rate: '8.5% - 12%',
    tenure: 'Up to 7 years',
    processing: '1% of loan amount',
    features: ['Zero down payment options', 'Flexible EMI plans', 'Quick approval'],
  },
  {
    title: 'Used Car Loan',
    rate: '9% - 14%',
    tenure: 'Up to 5 years',
    processing: '1.5% of loan amount',
    features: ['Cars up to 10 years old', 'Up to 80% financing', 'Doorstep service'],
  },
  {
    title: 'Car Refinance',
    rate: '8.75% - 11%',
    tenure: 'Up to 5 years',
    processing: '0.5% of loan amount',
    features: ['Lower EMIs', 'Top-up facility', 'Balance transfer'],
  },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Car Finance Made Simple
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Get instant pre-approval for your dream car with competitive rates and flexible terms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/finance/emi-calculator">Calculate EMI</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/finance/process">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Car Finance?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the fastest and most transparent car financing process in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Loan Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Loan Type</h2>
            <p className="text-xl text-gray-600">Flexible financing options for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <Badge variant="secondary">{option.rate}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tenure</span>
                      <span className="font-medium">{option.tenure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-medium">{option.processing}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/finance/process">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your EMI</h2>
            <p className="text-xl text-gray-600 mb-8">
              Use our EMI calculator to plan your car purchase budget
            </p>
            <Card className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <Calculator className="h-16 w-16 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">EMI Calculator</h3>
                  <p className="text-gray-600 mb-4">
                    Get instant EMI calculations for your car loan
                  </p>
                  <Button asChild size="lg">
                    <Link href="/finance/emi-calculator">Calculate Now</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Features & Benefits</h3>
                <p className="text-gray-600 text-sm mb-4">Learn about all the benefits of our car finance</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/finance/features">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Calculator className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">EMI Calculator</h3>
                <p className="text-gray-600 text-sm mb-4">Calculate your monthly EMI instantly</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/finance/emi-calculator">Calculate</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Documents Required</h3>
                <p className="text-gray-600 text-sm mb-4">Check what documents you need</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/finance/documents">View List</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Application Process</h3>
                <p className="text-gray-600 text-sm mb-4">Step-by-step application guide</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/finance/process">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}