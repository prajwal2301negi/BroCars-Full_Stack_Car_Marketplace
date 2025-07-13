'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageSquare, HeadphonesIcon } from 'lucide-react';
import axios from 'axios'
import  { toast } from 'react-toastify'


const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 9711220289', '+91 9091920006'],
    description: 'Mon-Sun 9AM-9PM',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['support@brocars.com', 'sales@brocars.com'],
    description: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    details: ['BRO CARS Services Pvt Ltd', 'Sector 3, Dwarka, Delhi'],
    description: 'Visit us Mon-Sat 10AM-7PM',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    details: ['1800-123-4567', 'Toll Free'],
    description: 'Round the clock assistance',
  },
];

const offices = [
  { city: 'Delhi NCR', address: 'Sector 3, Dwarka, Delhi 110078', phone: '+91 9711220289' },
  // { city: 'Mumbai', address: 'Andheri East, Mumbai, Maharashtra 400069', phone: '+91 98765 43211' },
  // { city: 'Bangalore', address: 'Koramangala, Bangalore, Karnataka 560034', phone: '+91 98765 43212' },
  // { city: 'Chennai', address: 'Anna Nagar, Chennai, Tamil Nadu 600040', phone: '+91 98765 43213' },
  // { city: 'Hyderabad', address: 'Hitech City, Hyderabad, Telangana 500081', phone: '+91 98765 43214' },
  // { city: 'Pune', address: 'Baner, Pune, Maharashtra 411045', phone: '+91 98765 43215' },
];

export default function ContactPage() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   subject: '',
  //   message: '',
  //   inquiryType: '',
  // });

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [inquiryType, setInquiryType] = useState('')


  const handleSubmit = async(e: React.FormEvent) => {
     e.preventDefault();
    try {
      const res = await axios.post(
        'https://brocarsserver.onrender.com/api/v1/contact/sendMessage',
        { name, email, phone, subject, message, inquiryType },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success(res.data.message);
      setName('');
      setMessage('');
      setEmail('')
      setInquiryType('')
      setSubject('')
      setPhone('')
      
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    // setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Have questions? We're here to help. Reach out to us anytime and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Quick Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select onValueChange={(value) => setInquiryType(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Buying a Car</SelectItem>
                          <SelectItem value="selling">Selling a Car</SelectItem>
                          <SelectItem value="finance">Car Finance</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office</h2>
            <p className="text-xl text-gray-600">Visit us at our office in Dwarka.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{office.city}</h3>
                      <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                      <p className="text-blue-600 text-sm font-medium">{office.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How do I sell my car?</h3>
                <p className="text-gray-600 text-sm">
                  Simply visit our sell car page, enter your car details, upload photos, and get an instant quote. 
                  Our team will handle the rest.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Are all cars verified?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, every car goes through 20+ quality checks by our certified technicians before being listed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide financing?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we offer car loans with competitive interest rates and quick approval through our partner banks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What is your return policy?</h3>
                <p className="text-gray-600 text-sm">
                  We offer a 7-day return policy if you're not satisfied with your purchase. Terms and conditions apply.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
