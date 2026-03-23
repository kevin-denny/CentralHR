import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import TestimonialCard from '../components/ui/TestimonialCard';
import Image from 'next/image';
import { Users, ShieldCheck, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'Central HR Solutions | Expert HR Consulting Services',
    description: 'Professional HR consulting for growing businesses. We offer expertise in compliance, talent acquisition, training, and more. Get HR support today.',
};

export default function Home() {
    const services = [
        {
            icon: <TrendingUp size={32} className="text-accent" />,
            title: 'Training & Development',
            description: 'Empower your team with customized training programs designed to enhance skills and productivity.'
        },
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
                        Expert Training & HR Solutions for Your Growing Business
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
                        <AnimatedSection key={index} animation="slideUp" delay={index * 100} className="h-full">
                            <Card className="text-center group h-full flex flex-col items-center justify-between">
                                <div className="mb-4 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    {service.icon}
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
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
                        <div className="relative rounded-lg overflow-hidden h-80 md:h-96 w-full shadow-xl" style={{ position: "relative" }}>
                            <Image
                                src="/images/img1.webp"
                                alt="Professional Office Team"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={75}
                                style={{ objectFit: "cover" }}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
                        Don&apos;t just take our word for it. Here&apos;s what our partners have to say.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            id: 'mahaweli-reach-hotel',
                            name: "Director of Operations",
                            role: "Mahaweli Reach Hotel",
                            text: "We would like to extend our sincere thanks to Mr. Shashi Jayawardena for his exceptional efforts, dedication, and guidance during the training program. His commitment to ensuring a meaningful and enriching learning experience was highly appreciated by all participants.\n\nThe staff found the training program conducted by Mr. Shashi Jayawardena to be an insightful session. The sessions were well structured, highly engaging, and delivered in a clear and comprehensive manner, ensuring accessibility for all staff members. The content was directly aligned with our day to day operations and thoughtfully designed to address practical challenges within the hotel industry.\n\nMr. Shashi Jayawardena demonstrated a high level of subject expertise and professionalism throughout the program. His approach encouraged active participation through structured discussions and relevant real life examples, contributing to an effective and engaging learning environment. Participants gained valuable insights, strengthened their existing knowledge, and developed practical skills that can be readily applied in their respective roles.\n\nOverall, the training program was both informative and impactful, making a significant contribution to the professional development of our team. We sincerely appreciate the dedication and professionalism demonstrated throughout the engagement and would confidently recommend this training program to organizations seeking structured, results-oriented learning solutions."
                        },
                        {
                            id: 'soul-sounds-academy',
                            name: "Soundarie David",
                            role: "Director – Soul Sounds Academy",
                            text: "I've had the pleasure of attending and collaborating on training sessions with Shashi Jayawardena and Central HR Solutions, and what truly sets them apart is their approach. Each programme is thoughtfully tailored—not just to organisational needs, but to the people within them.\n\nTheir training goes beyond traditional HR practices; it focuses on developing better human beings. In a time where digital interaction often replaces genuine human connection, this people-centric focus is both refreshing and essential.\n\nEvery session I've experienced has been energetic, engaging, and highly motivating. What is especially impressive is the quick turnaround in impact—organisations see tangible results in a short time, and the positive feedback from teams speaks volumes.\n\nShashi brings a unique ability to inspire meaningful change, and Central HR Solutions is undoubtedly a go-to partner for any organisation looking to grow and transform for the better."
                        },
                        {
                            id: 'yasaska-gamage',
                            name: "Yasaska Gamage",
                            role: "Assistant General Manager – Marketing",
                            text: "Coming from Marketing, I have always believed training should solve real business problems, not just fulfil a function. That's what led me to organize a company-wide customer service training stepping outside the \"HR owns training\" mindset. Working with Central HR made that decision worthwhile.\n\nWhat stood out was how naturally Shashi connected with a cross-functional audience. This wasn't a typical HR session, it reframed customer service as a shared responsibility.\n\nEven as the organizer, sitting through the same session, it never felt repetitive. There was always something new to take away. And the feedback said it all. Employees didn't just appreciate it, they wanted more. That's when you know it's not just another program. It is impactful."
                        }
                    ].map((client, i) => (
                        <AnimatedSection key={i} animation="slideUp" delay={i * 150}>
                            <TestimonialCard
                                text={client.text}
                                name={client.name}
                                role={client.role}
                                delay={i * 150}
                                href={`/testimonials#${client.id}`}
                            />
                        </AnimatedSection>
                    ))}

                </div>
            </Section>


            {/* CTA Section */}
            <Section className="bg-primary text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Elevate Your HR Strategy?</h2>
                    <p className="text-xl mb-10 text-gray-200">
                        Join hundreds of businesses that trust Central HR Solutions for their workforce management. Let&apos;s build a better workplace together.

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
