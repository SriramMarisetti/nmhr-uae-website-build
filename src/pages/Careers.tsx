
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, DollarSign, Users, Star, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior HR Consultant',
      department: 'Human Resources',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      salary: 'AED 8,000 - 12,000',
      experience: '3-5 years',
      description: 'Looking for an experienced HR consultant to join our growing team.',
      requirements: [
        'Bachelor\'s degree in HR or related field',
        '3+ years of HR consulting experience',
        'Strong knowledge of UAE labor law',
        'Excellent communication skills'
      ]
    },
    {
      id: 2,
      title: 'Recruitment Specialist',
      department: 'Recruitment',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      salary: 'AED 6,000 - 9,000',
      experience: '2-4 years',
      description: 'Seeking a dynamic recruitment specialist to source and place top talent.',
      requirements: [
        'Experience in recruitment and talent acquisition',
        'Strong networking and relationship building skills',
        'Knowledge of various industries',
        'Proficiency in recruitment tools and platforms'
      ]
    },
    {
      id: 3,
      title: 'Business Development Manager',
      department: 'Sales & Marketing',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      salary: 'AED 10,000 - 15,000',
      experience: '4-6 years',
      description: 'Drive business growth through strategic partnerships and client acquisition.',
      requirements: [
        'Proven track record in business development',
        'Strong sales and negotiation skills',
        'Experience in HR services industry preferred',
        'Excellent presentation and communication skills'
      ]
    },
    {
      id: 4,
      title: 'PRO Services Coordinator',
      department: 'Government Relations',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      salary: 'AED 5,000 - 7,000',
      experience: '2-3 years',
      description: 'Handle government relations and PRO services for our clients.',
      requirements: [
        'Experience in PRO services in UAE',
        'Knowledge of UAE government procedures',
        'Strong organizational skills',
        'Fluency in Arabic and English'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      position: 'HR Manager',
      company: 'Tech Solutions LLC',
      content: 'NM HR Consultancy helped me find my dream job. Their team was professional and supportive throughout the entire process.',
      rating: 5
    },
    {
      name: 'Mohammed Ali',
      position: 'Marketing Director',
      company: 'Global Trading FZE',
      content: 'The placement process was smooth and efficient. They understood my requirements and matched me with the perfect opportunity.',
      rating: 5
    },
    {
      name: 'Fatima Hassan',
      position: 'Finance Analyst',
      company: 'Investment Corp',
      content: 'Excellent service and professional guidance. I highly recommend NM HR Consultancy for anyone seeking career opportunities.',
      rating: 5
    }
  ];

  const placementProcess = [
    {
      step: '01',
      title: 'Registration',
      description: 'Submit your application and resume through our online portal.'
    },
    {
      step: '02',
      title: 'Screening',
      description: 'Our team reviews your profile and conducts initial screening.'
    },
    {
      step: '03',
      title: 'Matching',
      description: 'We match your skills with suitable job opportunities.'
    },
    {
      step: '04',
      title: 'Interview',
      description: 'Coordinate interviews with potential employers.'
    },
    {
      step: '05',
      title: 'Placement',
      description: 'Successful placement and onboarding support.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We will contact you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
              Launch Your <span className="text-brand-blue">Career</span> with Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover exciting career opportunities and take the next step in your professional journey. 
              We connect talented professionals with leading companies across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Current Job Openings
            </h2>
            <p className="text-xl text-gray-600">
              Join our team and be part of a dynamic, growing organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={job.id} className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-brand-blue font-medium">{job.department}</p>
                    </div>
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm">{job.type}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.experience}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full gradient-blue text-white hover:opacity-90">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Job Seeker Registration
            </h2>
            <p className="text-xl text-gray-600">
              Register with us to be considered for current and future opportunities.
            </p>
          </div>

          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position of Interest</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hr-consultant">HR Consultant</SelectItem>
                        <SelectItem value="recruitment-specialist">Recruitment Specialist</SelectItem>
                        <SelectItem value="business-development">Business Development Manager</SelectItem>
                        <SelectItem value="pro-coordinator">PRO Services Coordinator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    placeholder="Tell us about yourself and why you're interested in joining our team..."
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-blue text-white hover:opacity-90">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our Placement Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined process to connect you with the right opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {placementProcess.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who found their dream jobs through us.
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
                    <p className="text-sm text-brand-blue">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
