import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Users, ShieldCheck, Briefcase, TrendingUp, DollarSign } from 'lucide-react';

const Services = () => {
    const servicesList = [
        {
            id: 'consulting',
            icon: <Users size={40} />,
            title: 'HR Consulting',
            features: ['Organizational Design', 'Culture Building', 'Policy Development', 'Change Management'],
            desc: 'Our strategic consulting services help you align your people strategy with your business goals. We work with you to design organizational structures that promote efficiency and growth.'
        },
        {
            id: 'talent',
            icon: <Briefcase size={40} />,
            title: 'Talent Acquisition',
            features: ['Executive Search', 'Recruitment Process Outsourcing', 'Onboarding Programs', 'Employer Branding'],
            desc: 'Finding the right talent is crucial. We handle the entire recruitment process, ensuring you attract candidates who fit both the role and your company culture.'
        },
        {
            id: 'compliance',
            icon: <ShieldCheck size={40} />,
            title: 'Compliance & Risk Management',
            features: ['Audit & Assessment', 'Handbook Creation', 'Labor Law Guidance', 'Risk Mitigation'],
            desc: 'Stay compliant with ever-changing labor laws. We provide thorough audits and policy development to protect your business from legal risks.'
        },
        {
            id: 'payroll',
            icon: <DollarSign size={40} />,
            title: 'Payroll Support',
            features: ['Payroll Processing', 'Benefits Administration', 'Tax Filing Support', 'System Implementation'],
            desc: 'Ensure accurate and timely payroll processing. We offer full support for benefits administration and payroll management to reduce administrative burden.'
        },
        {
            id: 'training',
            icon: <TrendingUp size={40} />,
            title: 'Training & Development',
            features: ['Leadership Workshops', 'Skill Assessments', 'Team Building', 'Performance Management'],
            desc: 'Invest in your team\'s growth. Our customized training programs help develop leadership skills and improve overall performance.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Services | Central HR Solutions</title>
                <meta name="description" content="Explore our comprehensive HR services including consulting, talent acquisition, compliance, payroll support, and training & development." />
            </Helmet>
            <section className="hero">
                <div className="container">
                    <h1 className="mb-6">Our Services</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-200">
                        Comprehensive solutions to manage your workforce effectively.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-12">
                {servicesList.map((service, index) => (
                    <Section key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2">
                                <div className="text-accent mb-4">{service.icon}</div>
                                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                                <p className="text-lg text-gray-600 mb-6">{service.desc}</p>
                                <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button to="/contact" variant="primary">Request a Quote</Button>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-500">Image: {service.title}</span>
                                </div>
                            </div>
                        </div>
                    </Section>
                ))}
            </div >

            <Section className="bg-primary text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                <p className="text-xl mb-8">We can tailor our services to fit your specific requirements.</p>
                <Button to="/contact" className="bg-white text-primary hover:bg-gray-100">Contact Us</Button>
            </Section>
        </>
    );
};

export default Services;
