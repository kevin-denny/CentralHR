import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Image from 'next/image';
import { Star, ClipboardList, MapPin, Target, TrendingUp, CheckCircle, CarFront, DoorOpen, ShoppingBag, UserCheck, Phone, Map } from 'lucide-react';

export const metadata = {
    title: 'Service Sensei | Central HR Solutions',
    description: 'Sensei Service Stars (S3) - "Be known for your service". Get a graded audit of your Critical Customer Contact Points (CCCPs).',
};

export default function ServiceSensei() {
    const registrationSteps = [
        {
            num: '01',
            title: 'Request for Audit',
            desc: 'Start by stating why your service is above the rest and request an initial assessment.'
        },
        {
            num: '02',
            title: 'Service Sensei Mystery Audit',
            desc: 'Our experts will conduct a covert evaluation of your service points as real customers.'
        },
        {
            num: '03',
            title: 'Service Sensei Star Awarding',
            desc: 'Receive your official S3 rating based on the audit and celebrate your service excellence.'
        }
    ];

    const cccps = [
        { icon: <CarFront size={32} />, name: 'Parking Experience' },
        { icon: <DoorOpen size={32} />, name: 'Entrance Experience' },
        { icon: <ShoppingBag size={32} />, name: 'Sales Experience' },
        { icon: <UserCheck size={32} />, name: 'Grooming & Hygiene' },
        { icon: <Phone size={32} />, name: 'Telephone Experience' },
        { icon: <Map size={32} />, name: 'Place Experience' },
    ];

    const starLevels = [
        { stars: 1, title: 'Poor Service', desc: 'Service is poor, do not visit for service.', color: 'text-gray-400' },
        { stars: 2, title: 'Acceptable Service', desc: 'Service is acceptable.', color: 'text-yellow-600' },
        { stars: 3, title: 'Good Service', desc: 'Service is good, complements the product.', color: 'text-yellow-500' },
        { stars: 4, title: 'Excellent Service', desc: 'Worth going JUST to see the service.', color: 'text-orange-500' },
        { stars: 5, title: 'Industry Leader', desc: 'Leading the way in service, go to learn from this organisation how service is done.', color: 'text-yellow-400' },
    ];

    const benefits = [
        'Be known for your service',
        'Get a graded audit of your CCCPs (Critical Customer Contact Points)',
        'Know your winners, low hanging fruits and derailers',
        'Understand your Service culture',
        'Know the bar, and Know how to strategically raise it',
        'Get best in class advice and training to be EMPATHY+ workforce'
    ];

    return (
        <>
            <section className="hero bg-gradient-to-r from-primary to-accent text-white">
                <div className="container relative z-10">
                    <AnimatedSection animation="fadeIn" delay={100}>
                        <h1 className="mb-4 text-4xl md:text-5xl font-bold">Sensei Service Stars (S3)</h1>
                        <p className="text-2xl md:text-3xl font-light italic text-gray-100 mb-8 max-w-3xl mx-auto">
                            &quot;Be known for your service&quot;
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section className="bg-white py-16">
                <AnimatedSection animation="slideUp" delay={100}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">3 Step Registration Process</h2>
                        <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {registrationSteps.map((step, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-8xl font-black text-gray-100 absolute -top-4 -right-4 z-0">
                                    {step.num}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4 text-primary">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="bg-gray-50 py-16">
                <AnimatedSection animation="slideUp" delay={100}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">S3 CCCPs of Audit</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Critical Customer Contact Points evaluated during the Mystery Audit.
                        </p>
                        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {cccps.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="bg-white py-16">
                <AnimatedSection animation="slideUp" delay={100}>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">3S Levels</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Our rating system acts as a true reflection of your organization&apos;s service quality, guiding you on where you stand and where you need to go.
                            </p>
                            <div className="space-y-6">
                                {starLevels.map((level, index) => (
                                    <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
                                        <div className="flex flex-shrink-0 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={20}
                                                    className={i < level.stars ? level.color : 'text-gray-200'}
                                                    fill={i < level.stars ? 'currentColor' : 'none'}
                                                />
                                            ))}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 leading-snug">{level.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-1 shadow-xl">
                                <div className="bg-white rounded-[22px] p-8 h-full">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Target className="text-accent" />
                                        Benefits with S3
                                    </h3>
                                    <ul className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                                <span className="text-gray-700 font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-20 mb-8 w-full border-t border-gray-100 pt-16">
                        <div className="relative p-6 flex items-center justify-center group w-full max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100 rounded-[2.5rem] transform group-hover:scale-105 transition-all duration-500 shadow-xl shadow-gray-200/50 border border-gray-100/50"></div>
                            <div className="absolute inset-0 bg-white rounded-[2.5rem] transform -rotate-2 group-hover:-rotate-1 transition-all duration-500 shadow-md"></div>

                            <Image
                                src="/ss.webp"
                                alt="Service Sensei Logo"
                                width={180}
                                height={180}
                                style={{ objectFit: 'contain' }}
                                className="w-40 h-40 md:w-56 md:h-56 relative z-10 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                            />
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="bg-primary text-white text-center">
                <AnimatedSection animation="fadeIn" delay={100}>
                    <h2 className="text-3xl font-bold mb-6">Ready to be known for your service?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                        Join the Sensei Service Stars program and take your customer experience to the next level.
                    </p>
                    <Button to="/contact" variant="secondary" className="text-lg px-8 py-4">Request Your Audit</Button>
                </AnimatedSection>
            </Section>
        </>
    );
}
