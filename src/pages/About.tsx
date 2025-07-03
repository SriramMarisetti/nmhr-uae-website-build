
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Users, Clock, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and accountability at every step of our process.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'High-quality service that exceeds expectations and delivers results.',
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'Dedication to long-term client satisfaction and partnership success.',
    },
    {
      icon: Users,
      title: 'Respect',
      description: 'Valuing every client, candidate, and partner equally with dignity.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Extensive Global Talent Pool',
      description: 'Access to qualified candidates from India, Philippines, Nepal, Sri Lanka, and Bangladesh.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround Time',
      description: 'Efficient processes ensuring fast placement and minimal downtime for urgent staffing needs.',
    },
    {
      icon: Users,
      title: 'Long-term Support',
      description: 'Post-placement client support and follow-up to ensure continued satisfaction.',
    },
    {
      icon: Shield,
      title: 'UAE Labor Law Compliance',
      description: 'Full compliance with UAE labor laws and international regulations for worry-free operations.',
    },
  ];

  const achievements = [
    { number: '582+', label: 'Successful Placements' },
    { number: '215+', label: 'Professionals Serving Clients' },
    { number: '500+', label: 'Satisfied Customers' },
    { number: '30+', label: 'Years of HR Expertise' },
  ];

  const process = [
    { step: 'Consultation', description: 'Understanding your requirements and company culture' },
    { step: 'Sourcing', description: 'Accessing our global recruitment network across 5 countries' },
    { step: 'Screening', description: 'Background checks, skill assessments, and cultural orientation' },
    { step: 'Mobilization', description: 'Visa processing, travel arrangements, and onboarding' },
    { step: 'Follow-Up', description: 'Post-deployment support and continuous feedback' },
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
              Your trusted HR partner in Abu Dhabi, UAE. With over 30 years of expertise, we specialize in 
              providing tailored recruitment and manpower solutions across diverse sectors.
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
                  To empower clients with skilled and dependable human resources, while enabling job seekers 
                  to achieve professional growth and success. Our solutions are people-first, compliant, 
                  and results-driven, connecting businesses with the right talent that drives growth.
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
                  To redefine recruitment by offering reliable, ethical, and efficient manpower solutions. 
                  We aim to be the leading HR consultancy in the Middle East, connecting businesses with 
                  the right talent while helping professionals build meaningful careers.
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
              The principles that guide everything we do for over 30 years.
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
              with our skilled internal team and global talent network.
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

      {/* Our 5-Step Hiring Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our 5-Step Hiring Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to deliver exceptional results with quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.step}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
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
              Numbers that reflect our commitment to excellence and client satisfaction.
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
                Founded in Abu Dhabi, NM HR Consultancy began with a vision to transform recruitment 
                through reliable, ethical, and efficient manpower solutions. With over 30 years of 
                expertise, we have evolved from a small recruitment firm into a comprehensive HR 
                solutions provider.
              </p>
              <p>
                Our skilled internal team and global talent network spanning India, Philippines, Nepal, 
                Sri Lanka, and Bangladesh have enabled us to serve 500+ satisfied customers with 582+ 
                successful placements. We pride ourselves on delivering high-quality hiring solutions 
                that are people-first, compliant, and results-driven.
              </p>
              <p>
                Today, we continue to redefine recruitment by connecting businesses with the right talent 
                that drives growth while helping professionals achieve meaningful career success. Our 
                commitment to excellence and long-term client satisfaction remains at the heart of 
                everything we do.
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
            Let us help you achieve your business goals with our comprehensive HR and recruitment solutions 
            backed by 30+ years of expertise.
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
