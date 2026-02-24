import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Image from 'next/image';
import { Target, Eye, Heart, Users } from 'lucide-react';

export const metadata = {
    title: 'About Us | Central HR Solutions',
    description: 'Learn about Central HR Solutions, our mission, vision, and the expert team dedicated to empowering your business through strategic HR management.',
};

export default function About() {
    const teamMembers = [
        { name: 'Jane Doe', role: 'Founder & CEO', bio: '20+ years of HR experience transforming businesses.', image: '/images/img8.webp' },
        { name: 'John Smith', role: 'Head of Consulting', bio: 'Expert in labor law and compliance strategies.', image: '/images/img9.webp' },
        { name: 'Sarah Johnson', role: 'Talent Acquisition Lead', bio: 'Specialist in executive search and recruitment.', image: '/images/img10.webp' },
    ];

    const values = [
        { icon: <Target size={32} />, title: 'Integrity', desc: 'We operate with the highest ethical standards.' },
        { icon: <Eye size={32} />, title: 'Transparency', desc: 'Open communication and honest advice.' },
        { icon: <Heart size={32} />, title: 'Empathy', desc: 'We understand the human side of business.' },
        { icon: <Users size={32} />, title: 'Collaboration', desc: 'Working together to achieve your goals.' },
    ];

    return (
        <>
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
                        <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Our Founder, Shashi Jayawardena, had a Vision. What if there was a HR Solutions provider who understood operations. Who understood customer complaints. Who understood Profits. Who understood Culture is in Recruitment, its in Audits, its in SOPs and Policy documents. That Culture is not one thing but EVERYTHING. and Culture is found in the Human elements of an organisation.

                            So he formed CHRS with a focus to bring business leaders, CEOs, COOs, CFOs HR solutions that make their business thrive. With tailor made operational audits, a spectacular &quot;Customer Service Program&quot; and all the HR elements that make operational leaders focus on strategy and leave the Human Elements to us.

                        </p>
                    </div>
                    <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl" style={{ position: "relative" }}>
                        <Image
                            src="/images/img7.webp"
                            alt="Office Collaboration"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={75}
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                        />
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
                                <div className="w-32 h-32 mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 relative" style={{ position: "relative" }}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="128px"
                                        quality={70}
                                        style={{ objectFit: "cover" }}
                                        className="rounded-full"
                                    />
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
}
