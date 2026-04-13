import Section from '../../components/ui/Section';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Quote, Star } from 'lucide-react';

export const metadata = {
    title: 'Client Testimonials | Central HR Solutions',
    description: 'Read what our clients say about Central HR Solutions—real feedback from organizations that have experienced our training and HR consulting services.',
};

const testimonials = [
    {
        id: 'mahaweli-reach-hotel',
        name: 'Director of Operations',
        role: 'Mahaweli Reach Hotel',
        paragraphs: [
            "We would like to extend our sincere thanks to Mr. Shashi Jayawardena for his exceptional efforts, dedication, and guidance during the training program. His commitment to ensuring a meaningful and enriching learning experience was highly appreciated by all participants.",
            "The staff found the training program conducted by Mr. Shashi Jayawardena to be an insightful session. The sessions were well structured, highly engaging, and delivered in a clear and comprehensive manner, ensuring accessibility for all staff members. The content was directly aligned with our day to day operations and thoughtfully designed to address practical challenges within the hotel industry.",
            "Mr. Shashi Jayawardena demonstrated a high level of subject expertise and professionalism throughout the program. His approach encouraged active participation through structured discussions and relevant real life examples, contributing to an effective and engaging learning environment. Participants gained valuable insights, strengthened their existing knowledge, and developed practical skills that can be readily applied in their respective roles.",
            "Overall, the training program was both informative and impactful, making a significant contribution to the professional development of our team. We sincerely appreciate the dedication and professionalism demonstrated throughout the engagement and would confidently recommend this training program to organizations seeking structured, results-oriented learning solutions."
        ]
    },
    {
        id: 'soul-sounds-academy',
        name: 'Soundarie David',
        role: 'Director – Soul Sounds Academy',
        paragraphs: [
            "I've had the pleasure of attending and collaborating on training sessions with Shashi Jayawardena and Central HR Solutions, and what truly sets them apart is their approach. Each programme is thoughtfully tailored—not just to organisational needs, but to the people within them.",
            "Their training goes beyond traditional HR practices; it focuses on developing better human beings. In a time where digital interaction often replaces genuine human connection, this people-centric focus is both refreshing and essential.",
            "Every session I've experienced has been energetic, engaging, and highly motivating. What is especially impressive is the quick turnaround in impact—organisations see tangible results in a short time, and the positive feedback from teams speaks volumes.",
            "Shashi brings a unique ability to inspire meaningful change, and Central HR Solutions is undoubtedly a go-to partner for any organisation looking to grow and transform for the better."
        ]
    },
    {
        id: 'yasaska-gamage',
        name: 'Yasaska Gamage',
        role: 'Assistant General Manager – Marketing',
        paragraphs: [
            "Coming from Marketing, I have always believed training should solve real business problems, not just fulfil a function. That's what led me to organize a company-wide customer service training stepping outside the \"HR owns training\" mindset. Working with Central HR made that decision worthwhile.",
            "What stood out was how naturally Shashi connected with a cross-functional audience. This wasn't a typical HR session, it reframed customer service as a shared responsibility.",
            "Even as the organizer, sitting through the same session, it never felt repetitive. There was always something new to take away. And the feedback said it all. Employees didn't just appreciate it, they wanted more. That's when you know it's not just another program. It is impactful."
        ]
    },
    {
        id: 'new-philip-hospitals',
        name: 'Dr. Isshani Fernando',
        role: 'CEO New Philip Hospitals Kalutara',
        paragraphs: [
            "We had the pleasure of working with Central HR Solutions for staff training and motivation at our hospital. The experience has been exceptional from beginning to end. The Central HR team demonstrated a deep understanding of private healthcare and tailored their programs for our specific requirements.",
            "The training sessions were engaging and very interesting as well as well-structured. They kept the content relevant to staff at all levels. They combined practical knowledge with interactive methods, ensuring that participants stayed actively involved and be able to apply the knowledge they learnt in their daily roles. The team at Central HR Solutions are very professional and well experienced.",
            "They were excellent in motivation and boosting team morale. There is definitely improvement in team work, confidence and communication within the staff.",
            "Their commitment to excellence, attention to detail and ability to connect and inspire staff at all levels make them a highly recommended partner for any healthcare institution looking to enhance staff performance."
        ]
    },
    {
        id: 'gateway-college-kandy',
        name: 'Nelum De Alwis',
        role: 'Ex Principal – Hillwood College Kandy / Current Principal – Gateway College Kandy',
        paragraphs: [
            "I came in contact with Mr Shashi Jayawardena of Central HR Solutions, many years ago when we were looking for a trainer to conduct a series of training sessions for teachers and students in Hillwood College Kandy. I am so happy I could get his service once again for the staff and children of Gateway College Kandy.",
            "As a school principal, I extend my sincere appreciation to this exceptional trainer and motivational speaker for his invaluable contribution to students and staff. I witnessed the transformation he brings into their outlook to life and work, which generate a positive work environment and foster unity and progress.",
            "His inspiring words, practical guidance, and engaging approach have left a meaningful and lasting impact on our school community. He has successfully encouraged our students to believe in themselves, aim higher, and develop a positive mindset towards learning and life.",
            "Such dedication to empowering young minds is truly admirable, and we are grateful for his remarkable service. On behalf of our school community we wish him continued success in empowering many generations to come."
        ]
    }
];

export default function TestimonialsPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Client Testimonials
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Real words from real clients — organizations that have partnered with Central HR Solutions and seen the difference.
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <Section>
                <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {testimonials.map((t, i) => (
                        <AnimatedSection key={t.id} animation="slideUp" delay={i * 120}>
                            <div
                                id={t.id}
                                style={{
                                    background: '#fff',
                                    borderRadius: '1rem',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                    padding: '2.5rem 2.5rem 2rem',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Accent bar */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #003f7d, #fd7702)'
                                }} />

                                {/* Stars */}
                                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
                                    {[...Array(5)].map((_, s) => (
                                        <Star key={s} size={18} fill="#fd7702" color="#fd7702" />
                                    ))}
                                </div>

                                {/* Quote icon */}
                                <Quote size={36} style={{ color: '#fd7702', opacity: 0.25, marginBottom: '1rem' }} />

                                {/* Paragraphs */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    {t.paragraphs.map((para, p) => (
                                        <p key={p} style={{ color: '#374151', fontSize: '1rem', lineHeight: '1.8', fontStyle: 'italic', margin: 0 }}>
                                            {p === 0 ? `"${para}` : para}{p === t.paragraphs.length - 1 ? '"' : ''}
                                        </p>
                                    ))}
                                </div>

                                {/* Author */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f3f4f6', paddingTop: '1.25rem' }}>
                                    <div style={{
                                        width: '48px', height: '48px', flexShrink: 0,
                                        background: 'linear-gradient(135deg, #003f7d, #fd7702)',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', fontWeight: '700', fontSize: '1.125rem',
                                        boxShadow: '0 2px 8px rgba(0,63,125,0.25)'
                                    }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '700', color: '#003f7d', fontSize: '1rem' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>
        </>
    );
}
