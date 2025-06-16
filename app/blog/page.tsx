import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, Search, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Used Cars Under 5 Lakhs in 2024',
    excerpt: 'Discover the best value-for-money used cars that offer reliability, fuel efficiency, and modern features without breaking the bank.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Buying Guide',
    author: 'Rahul Sharma',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Electric Cars vs Petrol Cars: Complete Comparison',
    excerpt: 'A comprehensive analysis of electric and petrol vehicles covering cost, performance, maintenance, and environmental impact.',
    image: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Technology',
    author: 'Priya Patel',
    date: '2024-01-12',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'How to Sell Your Car for the Best Price',
    excerpt: 'Expert tips and strategies to maximize your car\'s resale value and ensure a smooth selling experience.',
    image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Selling Tips',
    author: 'Amit Kumar',
    date: '2024-01-10',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Car Maintenance Checklist for Indian Roads',
    excerpt: 'Essential maintenance tips to keep your car running smoothly on Indian roads and extend its lifespan.',
    image: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Maintenance',
    author: 'Sneha Reddy',
    date: '2024-01-08',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Understanding Car Insurance: Types and Benefits',
    excerpt: 'A complete guide to car insurance in India, covering different types, benefits, and how to choose the right policy.',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Insurance',
    author: 'Vikash Singh',
    date: '2024-01-05',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Best Family Cars in India 2024',
    excerpt: 'Explore the top family cars that offer safety, comfort, space, and value for money for Indian families.',
    image: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Reviews',
    author: 'Anita Sharma',
    date: '2024-01-03',
    readTime: '10 min read',
    featured: false,
  },
];

const categories = ['All', 'Buying Guide', 'Selling Tips', 'Technology', 'Maintenance', 'Insurance', 'Reviews'];
const trendingTopics = ['Electric Cars', 'Car Finance', 'Used Car Tips', 'Car Insurance', 'Maintenance Guide'];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cars24 Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest car news, buying guides, maintenance tips, and industry insights
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-8 overflow-hidden">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 hover:bg-red-600">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-blue-600">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest car news and tips delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingTopics.map((topic) => (
                    <Button
                      key={topic}
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      asChild
                    >
                      <Link href={`/blog?topic=${topic.toLowerCase().replace(/\s+/g, '-')}`}>
                        {topic}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">
                          <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <div key={category} className="flex justify-between items-center">
                      <Link
                        href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm hover:text-blue-600"
                      >
                        {category}
                      </Link>
                      <span className="text-xs text-gray-500">
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}