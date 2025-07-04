
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';


const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
const [isDialogOpen, setIsDialogOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding UAE Labor Law: A Complete Guide for Employers',
      excerpt: 'Navigate the complexities of UAE labor law with our comprehensive guide covering employment contracts, working hours, and employee rights.',
      category: 'UAE Labor Law',
      author: 'Sarah Ahmed',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb',
      featured: true
    },
    {
      id: 2,
      title: 'Top 10 Hiring Mistakes to Avoid in 2024',
      excerpt: 'Learn about common hiring pitfalls and how to avoid them to build a stronger, more diverse workforce for your organization.',
      category: 'Hiring Tips',
      author: 'Mohammed Ali',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=900&fit=crop&crop=entropy&cs=tinysrgb'
    },
    {
      id: 3,
      title: 'Remote Work Policies: Best Practices for UAE Companies',
      excerpt: 'Discover how to implement effective remote work policies that comply with UAE regulations while maintaining productivity.',
      category: 'HR Management',
      author: 'Fatima Hassan',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb'
    },
    {
      id: 4,
      title: 'Career Growth Strategies for Young Professionals in UAE',
      excerpt: 'Essential tips and strategies for young professionals looking to advance their careers in the competitive UAE job market.',
      category: 'Career Advice',
      author: 'Ahmed Al-Mansouri',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=900&fit=crop&crop=entropy&cs=tinysrgb'
    },
    {
      id: 5,
      title: 'Digital Transformation in HR: Tools and Technologies',
      excerpt: 'Explore the latest HR technologies and digital tools that are revolutionizing human resources management in the modern workplace.',
      category: 'HR Technology',
      author: 'Sarah Ahmed',
      date: '2024-01-03',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb'
    },
    {
      id: 6,
      title: 'Employee Engagement: Building a Positive Workplace Culture',
      excerpt: 'Learn how to create an engaging workplace culture that boosts employee satisfaction and retention rates.',
      category: 'Employee Engagement',
      author: 'Mohammed Ali',
      date: '2024-01-01',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb'
    }
  ];

  const categories = [
    'All Posts',
    'UAE Labor Law',
    'Hiring Tips',
    'HR Management',
    'Career Advice',
    'HR Technology',
    'Employee Engagement'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section
  className="relative py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('https://rfsonshr.com/wp-content/uploads/2023/10/Rfsons-Meet-the-team.jpg-jpg.webp')`,
  }}
>
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

  {/* Content on top of overlay */}
  <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
      HR Insights & <span className="text-yellow-400">Career Advice</span>
    </h1>
    <p className="text-xl max-w-3xl mx-auto">
      Stay updated with the latest trends in HR, recruitment, and career development. 
      Expert insights to help you navigate the professional landscape.
    </p>
  </div>
</section>


      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  index === 0 
                    ? "bg-brand-blue text-white hover:bg-brand-blue/90" 
                    : "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-brand-blue text-white">{featuredPost.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
<Button
  variant="outline"
  className=" border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
  onClick={() => {
    setSelectedPost(featuredPost);
    setIsDialogOpen(true);
  }}
>
  Read Article
</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Explore our collection of insights and expert advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-80 h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-blue text-white">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
<Button
  variant="outline"
  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
  onClick={() => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  }}
>
  Read More
</Button>


                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{selectedPost && (
  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="max-w-2xl p-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-playfair mb-2">
          {selectedPost.title}
        </DialogTitle>
        <DialogDescription className="text-sm text-gray-500">
          By {selectedPost.author} on {new Date(selectedPost.date).toLocaleDateString()} | {selectedPost.readTime}
        </DialogDescription>
      </DialogHeader>

      <img
        src={selectedPost.image}
        alt={selectedPost.title}
        className="w-full h-64 object-cover rounded-md my-4"
      />

      <p className="text-gray-700 text-base leading-relaxed">
        {selectedPost.excerpt}
        {/* Replace with full article content when available */}
      </p>
    </DialogContent>
  </Dialog>
)}


      {/* Newsletter Signup */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Stay Updated with HR Insights
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and never miss the latest HR trends, tips, and industry insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <Button variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
