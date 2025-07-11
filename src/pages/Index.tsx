
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Globe, Building, CheckCircle, Star, Award } from 'lucide-react';
import { useState,useEffect } from 'react';

import {
  FaDraftingCompass,       // Architecture
  FaCogs,                  // Mechanical & Electrical
  FaTools,                // Welding & Fabrication
  FaHotel,                // Hotel & Hospitality
  FaBroom,                // Cleaning
  FaShoppingCart,         // Retail
  FaSeedling,             // Agriculture
  FaIndustry,             // Manufacturing
  FaFirstAid,             // Healthcare
  FaShieldAlt,            // Security
  FaClipboard,            // Administration
  FaTshirt,               // Garments
  FaTruckMoving           // Heavy Equipment
} from "react-icons/fa";

const Index = () => {



  const stats = [
    { icon: CheckCircle, value: '582+', label: 'Successful Placements' },
    { icon: Users, value: '215+', label: 'Professionals Serving Clients' },
    { icon: Building, value: '500+', label: 'Satisfied Customers' },
    { icon: Award, value: '30+', label: 'Years of HR Expertise' },
  ];

  const services = [
    {
      title: 'Recruitment Services',
      description: 'End-to-end hiring from job posting to onboarding with global talent pool sourcing.',
      icon: Users,
    },
    {
      title: 'Temporary & Permanent Staffing',
      description: 'Flexible workforce models with skilled, screened, and job-ready candidates.',
      icon: Building,
    },
    {
      title: 'Domestic Staff Supply',
      description: 'Trained housemaids, nannies, cooks, drivers, and caretakers - all background-verified.',
      icon: CheckCircle,
    },
    {
      title: 'HR Consulting & PRO Services',
      description: 'Complete HR solutions including policy development, compliance, and visa processing.',
      icon: Globe,
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Mansouri',
      company: 'Tech Solutions LLC',
      content: 'NM HR Consultancy helped us find exceptional talent for our growing team. Their professionalism and efficiency are unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Trading FZE',
      content: 'The PRO services team made our business setup seamless. They handled all documentation with precision and care.',
      rating: 5,
    },
    {
      name: 'Mohammed Hassan',
      company: 'Construction Plus',
      content: 'Their recruitment process is thorough and results-oriented. We found the perfect candidates for our specialized roles.',
      rating: 5,
    },
  ];

const industries = [
  {
    label: 'Civil & Architecture',
    icon: <FaDraftingCompass className="h-6 w-6 mx-auto mb-2 text-blue-500" />
  },
  {
    label: 'Mechanical & Electrical',
    icon: <FaCogs className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
  },
  {
    label: 'Welding & Fabrication',
    icon: <FaTools className="h-6 w-6 mx-auto mb-2 text-red-500" />
  },
  {
    label: 'Hotel & Hospitality',
    icon: <FaHotel className="h-6 w-6 mx-auto mb-2 text-purple-500" />
  },
  {
    label: 'Cleaning & Housekeeping',
    icon: <FaBroom className="h-6 w-6 mx-auto mb-2 text-green-500" />
  },
  {
    label: 'Supermarkets & Retail',
    icon: <FaShoppingCart className="h-6 w-6 mx-auto mb-2 text-pink-500" />
  },
  {
    label: 'Agriculture & Plantation',
    icon: <FaSeedling className="h-6 w-6 mx-auto mb-2 text-lime-600" />
  },
  {
    label: 'Manufacturing & Production',
    icon: <FaIndustry className="h-6 w-6 mx-auto mb-2 text-orange-500" />
  },
  {
    label: 'Healthcare & Paramedical',
    icon: <FaFirstAid className="h-6 w-6 mx-auto mb-2 text-rose-500" />
  },
  {
    label: 'Security Services',
    icon: <FaShieldAlt className="h-6 w-6 mx-auto mb-2 text-gray-700" />
  },
  {
    label: 'Administration',
    icon: <FaClipboard className="h-6 w-6 mx-auto mb-2 text-indigo-600" />
  },
  {
    label: 'Garments & Textiles',
    icon: <FaTshirt className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
  },
  {
    label: 'Heavy Equipment & Transport',
    icon: <FaTruckMoving className="h-6 w-6 mx-auto mb-2 text-gray-800" />
  }
];

  const countries = ['India', 'Philippines', 'Nepal', 'Sri Lanka', 'Bangladesh'];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        >
          <source src="https://res.cloudinary.com/dbtkas8kr/video/upload/v1751542827/workers_720p_osm2z4.mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Your Trusted <span className="text-blue-400">HR Partner</span> 
              <br className="hidden sm:block" />
              in <span className="text-yellow-400">Abu Dhabi, UAE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Delivering Skilled Talent, Empowering Careers. Over 13 years of expertise in tailored recruitment and manpower solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-white">
                <Link to="/contact">Find Your Dream Job</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
        Our Professional Services
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Ethical, efficient, and aligned with your business needs. We deliver high-quality hiring solutions.
      </p>
    </div>

    {/* Service Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((service, index) => (
    <Card
      key={index}
      className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image on Top with No Gap */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src={`/assets/card${index + 1}.jpg`}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Below with Padding */}
      <CardContent className="flex-1 p-6 text-center flex flex-col justify-start">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm">{service.description}</p>
      </CardContent>
    </Card>
  ))}
</div>


    {/* CTA Button */}
    <div className="text-center mt-12">
      <Button
        variant="outline"
        size="lg"
        className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
      >
        <Link to="/services">View All Services</Link>
      </Button>
    </div>
  </div>
</section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized recruitment across diverse sectors in the UAE and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow duration-300 animate-fade-in border"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.icon}
                <span className="text-gray-700 font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Talent Access */}
<section className="py-20 bg-white">
  {/* Heading */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">
      Global Talent Access
    </h2>
  </div>

  {/* Image + Text Container */}
  <div className="md:relative flex flex-col md:flex-row items-stretch">
    {/* Image Section */}
    <div
      className="bg-cover bg-no-repeat bg-right md:bg-center h-64 md:h-[700px] w-full"
      style={{ backgroundImage: `url('/assets/global-image.jpg')` }}
    >
      {/* Dark overlay only for desktop */}
      <div className="hidden md:block absolute inset-0 bg-black bg-opacity-10"></div>
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/3 flex items-center justify-center bg-white px-6 py-8 md:absolute md:left-0 md:top-0 md:bottom-0 md:pl-10 md:bg-transparent md:text-white">
      <p className="text-lg md:text-4xl font-medium text-black md:text-white text-center md:text-left">
        We source qualified candidates from across multiple countries to meet your specific needs.
      </p>
    </div>
  </div>
</section>




      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our satisfied clients across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you find the perfect talent or your next career opportunity with our 30+ years of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-blue">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
