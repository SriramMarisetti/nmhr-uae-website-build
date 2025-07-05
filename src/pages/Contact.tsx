
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    resume: null as File | null,
    message: '',
    service: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'UAE Office',
      details: 'Abu Dhabi, United Arab Emirates',
      description: 'Visit our office for in-person consultations'
    },
    {
      icon: Phone,
      title: 'UAE Contact',
      details: '+971-54-7593444',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'UAE Email',
      details: 'recruit@nmhruae.com',
      description: 'Send us your queries and requirements'
    },
    {
  icon: MapPin,
  title: 'Indian Office',
  details: 'Visakhapatnam, Andhra Pradesh',
  description: 'Bhupathi Surya Central Mall, Dondaparthy, Railway New Colony, Visakhapatnam, 530016'
},
{
  icon: Phone,
  title: 'India Contact',
  details: '+91 86880 53307',
  description: 'Connect with our Indian recruitment team'
},
{
  icon: Mail,
  title: 'Indian Email',
  details: 'hr.vizag@nmhruae.com',
  description: 'For Indian branch recruitment and queries'
},
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday & Sunday: Closed'
    }

  ];

  const services = [
    'Recruitment Services',
    'Temporary & Permanent Staffing',
    'Domestic Staff Supply',
    'HR Consulting',
    'PRO & Payroll Services',
    'International Recruitment',
    'Other'
  ];

  const socialLinks = [
    { name: 'Website', url: 'www.nmhruae.com', icon: Globe },
    { name: 'LinkedIn', url: 'www.linkedin.com/', icon: MessageCircle },
    { name: 'Instagram', url: 'www.instagram.com/nmhrconsultancyuae', icon: MessageCircle },
    { name: 'Facebook', url: 'www.facebook.com/profile.php?id=61575714767656', icon: MessageCircle },
    
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We will get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      resume: null as File | null,
      message: '',
      service: ''
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
      Get in <span className="text-yellow-400">Touch</span> with Us
    </h1>
    <p className="text-xl max-w-3xl mx-auto">
      Whether you're based in the UAE or India, NM HR Consultancy is ready to transform your business with 
      top-tier HR solutions. Contact us today and leverage 30+ years of recruitment expertise.
    </p>
  </div>
</section>


      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-brand-blue font-medium mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                All fields marked with * are required.
              </p>

              <Card>
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
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="service">Service of Interest</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    <div>
                      <Label htmlFor="resume">Upload Resume *</Label>
                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            resume: e.target.files ? e.target.files[0] : null,
                          }))
                        }
                        className="mt-1"
                      />
                      {formData.resume && (
                        <p className="text-sm text-gray-600 mt-2">
                          Selected file: <span className="font-medium">{formData.resume.name}</span>
                        </p>
                      )}
                    </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell us about your requirements, timeline, and any specific needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-blue text-white hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Social Links & Additional Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
                Connect with Us
              </h2>
              <p className="text-gray-600 mb-8">
                Located in the heart of Abu Dhabi, our office is easily accessible. 
                Follow us on social media for updates and industry insights.
              </p>

              {/* Social Media Links */}
<div className="space-y-4 mb-8">
  {socialLinks.map((link, index) => {
    const secureUrl = link.url.startsWith("http") ? link.url : `https://${link.url}`;
    const displayUrl = link.url.replace(/^https?:\/\//, '');

    return (
      <a
        key={index}
        href={secureUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                <link.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{link.name}</p>
                <p className="text-brand-blue text-sm break-all">{displayUrl}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    );
  })}
</div>

              {/* WhatsApp CTA */}
              <Card className="bg-green-50 border-green-200 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Quick Support via WhatsApp</h3>
                      <p className="text-gray-600 text-sm">Get instant answers to your questions</p>
                    </div>
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => {
                          window.open("https://wa.me/971564039813?text=Hi%2C%20I'm%20looking%20for%20opportunities", "_blank");
                        }}
                      >
                        Chat Now
                      </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday & Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600">
              Visit us in the UAE or India — we’re here to help you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* India Office Map */}
            <div className="w-full h-[450px] shadow-md rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6472.477355732037!2d83.29740022859333!3d17.726375970045865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943240631685d%3A0x67c4871ce095afb1!2sBhupathi%20Surya%20Central%20Mall!5e0!3m2!1sen!2sin!4v1751702120108!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Dubai Office Map */}
            <div className="w-full h-[450px] shadow-md rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79652.8337235643!2d54.341780105531726!3d24.486738747905008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8076d1a634b0e363%3A0x6d625b25c99e27c2!2sNM%20HUMAN%20RESOURCES%20CONSULTANCY!5e0!3m2!1sen!2sin!4v1751702070129!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What services does NM HR Consultancy offer?",
                answer: "We provide comprehensive HR solutions including recruitment services, temporary & permanent staffing, domestic staff supply, HR consulting, and PRO & payroll services across various industries."
              },
              {
                question: "How long does the recruitment process typically take?",
                answer: "Our 5-step process typically ranges from 2-4 weeks for standard positions. Timeline may vary based on specific requirements and the complexity of the role."
              },
              {
                question: "Which countries do you source candidates from?",
                answer: "We have a global talent network spanning India, Philippines, Nepal, Sri Lanka, and Bangladesh, allowing us to source qualified candidates based on your specific needs."
              },
              {
                question: "Do you provide post-placement support?",
                answer: "Yes, we offer comprehensive follow-up and post-deployment support to ensure continued satisfaction and address any concerns that may arise."
              },
              {
                question: "How can I get started with your services?",
                answer: "Simply contact us through the form above, call us at +971-54-7593444, or email recruit@nmhruae.com. We'll schedule a consultation to understand your needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
