import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Image from 'next/image';
import { Users, Heart, BookOpen, Shield, Trophy, Leaf } from 'lucide-react';

export const metadata = {
    title: 'About Us | Central HR Solutions',
    description: 'Learn about Central HR Solutions, our mission, vision, and the expert team dedicated to empowering your business through strategic HR management.',
};

export default function About() {
    const teamMembers = [
        { name: 'Shashi Jayawardena', role: 'Service Sensei, Master Trainer, CEO, Hotelier', bio: '', image: '/team/shashi.png' },
        { name: 'Soundarie David Rodrigo', role: 'Attorney-at-law, Artistic Director, Concert Pianist', bio: '', image: '/team/soundarie.png' },
        { name: 'Bjorn Vanderhorst', role: 'Senior Consultant, Michelin-starred Chef, Culinary Director', bio: '', image: '/team/bjorn.png' },
        { name: 'Priyankara Sumanapalage', role: 'CEO, Educator, Colombo Bartender & Barista School', bio: '', image: '/team/priyankara.png' },
        { name: 'Danu Innasithamby', role: 'Media Advisor, TV Personality', bio: '', image: '/team/danu.png' },
        { name: 'Amaya Rodrigo', role: 'Senior Auditor, Early Childhood Educator, Operations Manager', bio: '', image: '/team/amaya.png' },
        { name: 'Cheranka Mendis', role: 'Senior Consultant, Director of Communications, SM & Communications Trainer', bio: '', image: '/team/cheranka.png' },
    ];

    const leader = teamMembers.find(m => m.name === 'Shashi Jayawardena');
    const restOfTeam = teamMembers.filter(m => m.name !== 'Shashi Jayawardena');

    const values = [
        { icon: <Users size={32} />, title: 'Great People Make Great Organisations', desc: 'So we bring, develop and nourish them for the organisation.' },
        { icon: <Heart size={32} />, title: 'Empathy is Key', desc: 'We work with empathy and embed empathy in everyone we work with.' },
        { icon: <BookOpen size={32} />, title: 'Sustain Learning', desc: 'We want organisations that work with us to be self sufficient within 1 year.' },
        { icon: <Shield size={32} />, title: 'Operational Excellence', desc: 'We guarantee that no bells, no whistles, your operations will thrive.' },
        { icon: <Trophy size={32} />, title: 'Win Win Win', desc: 'Win for the organisation, win for its people, win for the customers — is what we deliver.' },
        { icon: <Leaf size={32} />, title: 'Leave the Place Better', desc: 'We ensure a better place to work once we are done with your organisation.' },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <AnimatedSection key={index} animation="slideUp" delay={index * 100} className="h-full">
                            <Card className="text-center group h-full flex flex-col">
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

                {/* Leader Section */}
                {leader && (
                    <div className="max-w-3xl mx-auto mb-16">
                        <AnimatedSection animation="slideUp" delay={0}>
                            <Card className="text-center group flex flex-col items-center">
                                <div className="w-48 h-48 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 relative rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1)] overflow-hidden">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        width={192}
                                        height={192}
                                        quality={75}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-3xl font-bold mb-2">{leader.name}</h3>
                                <p className="text-accent text-xl font-medium mb-4">{leader.role}</p>
                                {leader.bio && <p className="text-gray-600 leading-relaxed text-lg">{leader.bio}</p>}
                            </Card>
                        </AnimatedSection>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {restOfTeam.map((member, index) => (
                        <AnimatedSection key={index} className="h-full" animation="slideUp" delay={index * 150}>
                            <Card className="text-center group h-full flex flex-col">
                                <div className="w-32 h-32 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 relative rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1)] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        quality={75}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-accent font-medium mb-3">{member.role}</p>
                                {member.bio && <p className="text-gray-600 text-sm leading-relaxed mt-auto">{member.bio}</p>}
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>
        </>
    );
}
