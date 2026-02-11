import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Users, ShieldCheck, Briefcase, TrendingUp, CheckCircle, Quote } from 'lucide-react';

export const metadata = {
  title: 'Central HR Solutions | Expert HR Consulting Services',
  description: 'Professional HR consulting for growing businesses. We offer expertise in compliance, talent acquisition, training, and more. Get HR support today.',
};

export default function Home() {
    const services = [
        {
            icon: <Users size={32} className="text-accent" />,
            title: 'HR Consulting',
            description: 'Strategic HR solutions tailored to your business goals. From organizational design to culture building.'
        },
        {
            icon: <ShieldCheck size={32} className="text-accent" />,
            title: 'Compliance & Risk',
            description: 'Navigate complex labor laws and regulations with confidence. Minimize risk and ensure full compliance.'
        },
        {
            icon: <Briefcase size={32} className="text-accent" />,
            title: 'Talent Acquisition',
            description: 'Attract and retain top talent. We help you build a high-performing workforce that drives success.'
        },
        {
            icon: <TrendingUp size={32} className="text-accent" />,
            title: 'Training & Development',
            description: 'Empower your team with customized training programs designed to enhance skills and productivity.'
        }
    ];

    const features = [
        'Dedicated HR Experts',
        'Tailored Solutions',
        'Proven Track Record',
        'Cost-Effective Strategies'
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto">
                        Expert HR Solutions for Your Growing Business
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        We handle the people side of your business so you can focus on what you do best.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: '1rem' }}>
                        <style>{`
                            @media (min-width: 640px) {
                                .sm\\:flex-row { flex-direction: row !important; }
                            }
                        `}</style>
                        <Button variant="secondary" to="/contact">Get HR Support Today</Button>
                        <Button variant="outline" to="/services" className="border-white text-white hover:bg-white hover:text-primary">
                            Explore Our Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <Section className="bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Comprehensive HR support designed to meet the unique needs of your organization.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                            <Card className="text-center group">
                                <div className="mb-4 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button to="/services" variant="primary">View All Services</Button>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Central HR Solutions?</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            We bring decades of experience and a personalized approach to every partnership. Our goal is to become an extension of your team, providing the expertise and support you need to thrive.
                        </p>
                        <ul className="space-y-4">
                            {features.map((item, index) => (
                                <li key={index} className="flex items-center text-lg text-gray-700">
                                    <CheckCircle size={24} className="text-primary mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button to="/about" variant="outline">Learn More About Us</Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-gray-200 rounded-lg h-80 md:h-96 w-full flex items-center justify-center text-gray-400">
                            {/* Placeholder for an image */}
                            <span className="text-lg font-medium">Image: Professional Office Team</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
                        Don't just take our word for it. Here's what our partners have to say.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Jenkins",
                            role: "CEO, TechStart Inc.",
                            text: "Central HR Solutions transformed our hiring process. We've seen a 40% increase in retention since implementing their strategies."
                        },
                        {
                            name: "Michael Chen",
                            role: "Director of Operations, GrowthCo",
                            text: "Their compliance expertise saved us from potential legal pitfalls. The team is knowledgeable, responsive, and truly cares."
                        },
                        {
                            name: "Emily Rodriguez",
                            role: "Founder, Creative Agency",
                            text: "Outsourcing our HR to Central HR was the best decision we made this year. It allowed us to focus on scaling our business."
                        }
                    ].map((client, i) => (
                        <AnimatedSection key={i} animation="slideUp" delay={i * 150}>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                                <Quote size={40} className="text-accent mb-4 opacity-30 transition-all duration-300 group-hover:opacity-50 group-hover:scale-110" />
                                <p className="text-gray-700 mb-6 italic flex-grow text-lg leading-relaxed">
                                    "{client.text}"
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl shadow-md">
                                        {client.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-primary">{client.name}</div>
                                        <div className="text-sm text-gray-500">{client.role}</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Elevate Your HR Strategy?</h2>
                    <p className="text-xl mb-10 text-gray-200">
                        Join hundreds of businesses that trust Central HR Solutions for their workforce management. Let's build a better workplace together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button to="/contact" variant="secondary" className="px-8 py-4 text-lg shadow-lg">
                            Book a Free Consultation
                        </Button>
                        <Button to="/services" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
                            View Services
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
