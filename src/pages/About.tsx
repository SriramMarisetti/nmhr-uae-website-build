
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Users, Clock, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and business practices.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, exceeding client expectations.',
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'We are committed to building long-term relationships and delivering on our promises.',
    },
    {
      icon: Users,
      title: 'Respect',
      description: 'We treat all individuals with dignity and respect, valuing diversity and inclusion.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Extensive Talent Pool',
      description: 'Access to a diverse network of qualified professionals across multiple industries.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Efficient processes ensuring fast placement and minimal downtime for your business.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 client support with dedicated account managers for personalized service.',
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Full compliance with UAE labor laws and regulations for worry-free operations.',
    },
  ];

  const achievements = [
    { number: '582+', label: 'Successful Placements' },
    { number: '500+', label: 'Satisfied Clients' },
    { number: '5+', label: 'Countries Served' },
    { number: '10+', label: 'Years of Excellence' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
              About <span className="text-brand-blue">NM HR Consultancy</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted partner in human resources and recruitment solutions across the UAE and beyond. 
              We bridge the gap between exceptional talent and outstanding opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="animate-slide-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-playfair">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses and individuals by providing exceptional HR and recruitment services 
                  that drive growth, foster innovation, and create meaningful career opportunities. We are 
                  committed to building bridges between talent and opportunity, ensuring mutual success for 
                  our clients and candidates.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-playfair">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading HR consultancy in the Middle East, recognized for our innovative 
                  solutions, exceptional service quality, and unwavering commitment to client success. 
                  We envision a future where every organization has access to the talent they need to 
                  thrive and every professional finds their ideal career path.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Why Choose <span className="text-brand-blue">NM HR Consultancy</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with personalized service to deliver exceptional results 
              for our clients and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90">
              Numbers that reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-playfair">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in Abu Dhabi, NM HR Consultancy began with a simple yet powerful vision: 
                to transform the way businesses connect with talent in the UAE and across the Middle East. 
                What started as a small recruitment firm has grown into a comprehensive HR solutions provider.
              </p>
              <p>
                Over the years, we have built strong relationships with leading companies across various 
                industries, from emerging startups to established multinational corporations. Our success 
                is measured not just in placements made, but in the lasting partnerships we've forged and 
                the careers we've helped shape.
              </p>
              <p>
                Today, we continue to evolve and adapt to the changing needs of the modern workplace, 
                incorporating innovative technologies and best practices to deliver superior results. 
                Our commitment to excellence remains unchanged as we look toward the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you achieve your business goals with our comprehensive HR and recruitment solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-blue text-white hover:opacity-90">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
