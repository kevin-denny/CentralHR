import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About = () => {
    const teamMembers = [
        { name: 'Jane Doe', role: 'Founder & CEO', bio: '20+ years of HR experience transforming businesses.' },
        { name: 'John Smith', role: 'Head of Consulting', bio: 'Expert in labor law and compliance strategies.' },
        { name: 'Sarah Johnson', role: 'Talent Acquisition Lead', bio: 'Specialist in executive search and recruitment.' },
    ];

    const values = [
        { icon: <Target size={32} />, title: 'Integrity', desc: 'We operate with the highest ethical standards.' },
        { icon: <Eye size={32} />, title: 'Transparency', desc: 'Open communication and honest advice.' },
        { icon: <Heart size={32} />, title: 'Empathy', desc: 'We understand the human side of business.' },
        { icon: <Users size={32} />, title: 'Collaboration', desc: 'Working together to achieve your goals.' },
    ];

    return (
        <>
            <Helmet>
                <title>About Us | Central HR Solutions</title>
                <meta name="description" content="Learn about Central HR Solutions, our mission, vision, and the expert team dedicated to empowering your business through strategic HR management." />
            </Helmet>
            {/* Hero */}
            <section className="hero">
                <div className="container">
                    <h1 className="mb-6">About Central HR Solutions</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-200">
                        Dedicated to empowering businesses through strategic human resource management.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            To provide accessible, high-quality HR expertise that enables businesses to build thriving cultures and sustainable growth.
                        </p>
                        <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
                        <p className="text-lg text-gray-700">
                            To be the most trusted HR partner for businesses seeking to navigate the modern workplace with confidence.
                        </p>
                    </div>
                    <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image: Office Collaboration</span>
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section className="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-gray-600">The principles that guide everything we do.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <AnimatedSection key={index} animation="slideUp" delay={index * 100}>
                            <Card className="text-center group">
                                <div className="text-accent mb-4 flex justify-center">
                                    <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Team */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-gray-600">Experts dedicated to your success.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <AnimatedSection key={index} animation="slideUp" delay={index * 150}>
                            <Card className="text-center group">
                                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Users size={48} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-accent font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default About;
