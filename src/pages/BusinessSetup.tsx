
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building, FileText, Users, Globe, CheckCircle, Clock, Shield, Award } from 'lucide-react';

const BusinessSetup = () => {
  const setupServices = [
    {
      icon: Building,
      title: 'Company Formation',
      description: 'Complete business registration and licensing services for mainland and free zone companies.',
      features: [
        'Trade License Processing',
        'Company Name Registration',
        'MOA & AOA Preparation',
        'Initial Approval Certificate',
        'Commercial Registration',
        'Chamber of Commerce Registration'
      ]
    },
    {
      icon: FileText,
      title: 'Documentation Services',
      description: 'Comprehensive document preparation and attestation services.',
      features: [
        'Document Attestation',
        'Legal Translation Services',
        'Apostille Services',
        'Power of Attorney',
        'Contract Drafting',
        'Agreement Preparation'
      ]
    },
    {
      icon: Users,
      title: 'Visa & Immigration',
      description: 'Complete visa processing and immigration support for business owners and employees.',
      features: [
        'Investor Visa Processing',
        'Employment Visa Services',
        'Family Visa Applications',
        'Visa Renewal Services',
        'Emirates ID Processing',
        'Medical Insurance Setup'
      ]
    },
    {
      icon: Globe,
      title: 'Banking & Finance',
      description: 'Banking setup and financial services to get your business operational.',
      features: [
        'Corporate Bank Account Opening',
        'Business Loan Assistance',
        'Financial Planning Services',
        'Accounting Setup',
        'VAT Registration',
        'Audit Services'
      ]
    }
  ];

  const businessTypes = [
    {
      title: 'Mainland Company',
      description: 'Operate anywhere in the UAE with full local market access.',
      benefits: ['100% local market access', 'No restrictions on business activities', 'Can bid for government contracts'],
      requirements: ['Local service agent required', 'Minimum share capital varies', 'Office space mandatory']
    },
    {
      title: 'Free Zone Company',
      description: '100% foreign ownership with tax benefits and streamlined processes.',
      benefits: ['100% foreign ownership', 'Tax exemptions', 'Easy repatriation of profits'],
      requirements: ['Must operate within free zone', 'Specific business activities', 'Office space in free zone']
    },
    {
      title: 'Offshore Company',
      description: 'International business operations with maximum privacy and tax efficiency.',
      benefits: ['Complete privacy', 'No corporate tax', 'International business focus'],
      requirements: ['Cannot operate locally', 'Minimum shareholding', 'Annual compliance requirements']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understanding your business needs and recommending the best structure.',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Preparing and processing all required documents and applications.',
      duration: '3-5 days'
    },
    {
      step: '03',
      title: 'Approvals',
      description: 'Obtaining necessary approvals from relevant government authorities.',
      duration: '5-10 days'
    },
    {
      step: '04',
      title: 'Finalization',
      description: 'Completing registration and obtaining all licenses and permits.',
      duration: '2-3 days'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Experienced professionals with deep knowledge of UAE business laws and regulations.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Streamlined processes to get your business up and running quickly and efficiently.'
    },
    {
      icon: Shield,
      title: 'Full Compliance',
      description: 'Ensuring complete compliance with all legal and regulatory requirements.'
    },
    {
      icon: Users,
      title: 'End-to-End Support',
      description: 'Comprehensive support from initial consultation to post-setup services.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
              <span className="text-brand-blue">Business Setup</span> Services in UAE
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your gateway to establishing a successful business in the UAE. From company formation 
              to licensing and compliance, we handle everything for you.
            </p>
          </div>
        </div>
      </section>

      {/* Setup Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Complete Business Setup Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to establish and operate your business in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {setupServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-brand-blue mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Choose Your Business Structure
            </h2>
            <p className="text-xl text-gray-600">
              Different business structures to meet your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <Card key={index} className="h-full animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-brand-blue mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-brand-gold mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our Setup Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined 4-step process to get your business operational quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-brand-blue font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Why Choose NM HR Consultancy?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for business setup in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center h-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
            Ready to Start Your Business in UAE?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experts guide you through the business setup process. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSetup;
