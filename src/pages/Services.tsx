
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Building, FileText, Search, Globe, CheckCircle, Clock, Shield } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      id: 'staffing',
      icon: Users,
      title: 'Staffing Solutions',
      description: 'Comprehensive staffing services to meet your workforce needs.',
      features: [
        'Permanent Staff Placement',
        'Temporary Staffing Solutions',
        'Domestic Staff Services',
        'Executive Search',
        'Volume Recruitment',
        'Specialized Skill Matching'
      ],
      benefits: [
        'Reduced time-to-hire',
        'Quality candidate screening',
        'Flexible employment options',
        'Cost-effective solutions'
      ]
    },
    {
      id: 'hr-consulting',
      icon: Building,
      title: 'HR Consulting',
      description: 'Strategic HR solutions to optimize your human resources management.',
      features: [
        'HR Compliance Audits',
        'Employee Engagement Programs',
        'Performance Management Systems',
        'Training & Development',
        'HR Policy Development',
        'Organizational Development'
      ],
      benefits: [
        'Improved compliance',
        'Enhanced employee satisfaction',
        'Streamlined HR processes',
        'Strategic HR alignment'
      ]
    },
    {
      id: 'pro-services',
      icon: FileText,
      title: 'PRO Services',
      description: 'Complete government relations and administrative support services.',
      features: [
        'Visa Processing & Renewal',
        'Emirates ID Services',
        'Labor Card Processing',
        'Payroll Management',
        'WPS (Wage Protection System)',
        'Ministry Transactions'
      ],
      benefits: [
        'Hassle-free documentation',
        'Compliance assurance',
        'Time-saving solutions',
        'Expert guidance'
      ]
    },
    {
      id: 'recruitment',
      icon: Search,
      title: 'Recruitment Services',
      description: 'End-to-end recruitment solutions for all your hiring needs.',
      features: [
        'Candidate Sourcing',
        'Interview Coordination',
        'Background Verification',
        'Onboarding Support',
        'Cultural Orientation',
        'Post-placement Follow-up'
      ],
      benefits: [
        'Quality candidate pool',
        'Thorough screening process',
        'Smooth onboarding',
        'Ongoing support'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: 'International Recruitment',
      description: 'Sourcing talent from across the globe to meet your specific requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Contract Management',
      description: 'Comprehensive contract workforce management and administration services.'
    },
    {
      icon: Clock,
      title: 'Temporary Staffing',
      description: 'Flexible temporary staffing solutions for project-based and seasonal needs.'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensuring full compliance with UAE labor laws and regulations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
              Our <span className="text-brand-blue">Professional Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive HR and recruitment solutions designed to drive your business success. 
              From staffing to compliance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1 animate-slide-in">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 font-playfair">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Services Include:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-brand-blue mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-brand-gold mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 h-64 flex items-center justify-center">
                        <service.icon className="h-24 w-24 text-brand-blue opacity-20" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Extended support services to complement your core HR needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your specific needs and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a customized approach for your business' },
              { step: '03', title: 'Execution', description: 'Implementing solutions with precision and care' },
              { step: '04', title: 'Follow-up', description: 'Ongoing support and continuous improvement' }
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business thrive and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/business-setup">Business Setup Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
