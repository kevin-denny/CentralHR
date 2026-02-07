import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Resources = () => {
    const articles = [
        {
            category: 'HR Guides',
            title: 'The Ultimate Guide to Remote Work Policies',
            excerpt: 'Learn how to create effective remote work policies that boost productivity and employee satisfaction.',
            date: 'October 15, 2023',
        },
        {
            category: 'Compliance Tips',
            title: 'Navigating New Labor Laws for 2024',
            excerpt: 'Stay ahead of the curve with our breakdown of upcoming labor law changes and what they mean for your business.',
            date: 'October 1, 2023',
        },
        {
            category: 'Industry Trends',
            title: 'The Future of Employee Benefits',
            excerpt: 'Explore emerging trends in employee benefits, from mental health support to flexible wellness programs.',
            date: 'September 20, 2023',
        },
        {
            category: 'HR Guides',
            title: 'Building a Positive Company Culture',
            excerpt: 'Strategies for fostering a workplace environment where employees feel valued, engaged, and motivated.',
            date: 'September 10, 2023',
        },
        {
            category: 'Compliance Tips',
            title: 'Common Hiring Mistakes to Avoid',
            excerpt: 'Ensure your recruitment process is legally sound and effective by avoiding these common pitfalls.',
            date: 'August 28, 2023',
        },
        {
            category: 'Industry Trends',
            title: 'Leveraging AI in Human Resources',
            excerpt: 'How artificial intelligence is transforming HR processes, from recruitment to performance management.',
            date: 'August 15, 2023',
        }
    ];

    return (
        <>
            <Helmet>
                <title>HR Resources & Insights | Central HR Solutions</title>
                <meta name="description" content="Stay updated with the latest HR trends, compliance guides, and industry insights in our resources section." />
            </Helmet>
            <section className="hero">
                <div className="container">
                    <h1 className="mb-6">Resources</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-200">
                        Insights, guides, and news to help you manage your workforce better.
                    </p>
                </div>
            </section>

            <Section className="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Card key={index} className="flex flex-col h-full hover:shadow-xl transition-shadow">
                            <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                                {article.category}
                            </div>
                            <h3 className="text-xl font-bold mb-3 flex-grow">
                                <a href="#" className="hover:text-primary transition-colors">{article.title}</a>
                            </h3>
                            <p className="text-gray-600 mb-4">{article.excerpt}</p>
                            <div className="mt-auto flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                                <span>{article.date}</span>
                                <a href="#" className="font-medium text-primary hover:underline">Read More</a>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button variant="outline">Load More Articles</Button>
                </div>
            </Section>

            <Section className="bg-accent text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-8">Get the latest HR insights delivered straight to your inbox.</p>
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                    />
                    <button className="bg-primary text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition-colors">
                        Subscribe
                    </button>
                </div>
            </Section>
        </>
    );
};

export default Resources;
