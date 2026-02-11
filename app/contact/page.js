import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Central HR Solutions',
  description: 'Get in touch with Central HR Solutions. Contact us for HR consulting, recruitment, and compliance support. We\'re here to help.',
};

export default function Contact() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1 className="mb-6">Contact Us</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-200">
                        Get in touch to discuss how we can support your HR needs.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Have questions about our services or ready to get started? Fill out the form or reach out to us directly.
                        </p>

                        <div className="space-y-6">
                            <Card className="flex items-start">
                                <MapPin size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Our Office</h3>
                                    <p className="text-gray-600">
                                        123 Business Avenue, Suite 100<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </Card>

                            <Card className="flex items-center">
                                <Phone size={24} className="text-accent mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <p className="text-gray-600">+94 77 743 1596</p>
                                </div>
                            </Card>

                            <Card className="flex items-center">
                                <Mail size={24} className="text-accent mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-600">
                                        <a href="mailto:hello@centralhrsolutions.com" className="hover:text-primary transition-colors">
                                            hello@centralhrsolutions.com
                                        </a>
                                    </p>
                                </div>
                            </Card>

                            <Card className="flex items-start">
                                <Clock size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                                        Saturday & Sunday: Closed
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                                    <option>General Inquiry</option>
                                    <option>HR Consulting</option>
                                    <option>Recruitment Services</option>
                                    <option>Compliance Assistance</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-16 bg-gray-200 h-96 w-full rounded-lg flex items-center justify-center text-gray-500">
                    {/* In a real app, this would be a Google Maps iframe */}
                    <div className="text-center">
                        <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                        <p className="text-xl font-medium">Google Maps Embed Placeholder</p>
                        <p className="text-sm">Location: New York, NY</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
