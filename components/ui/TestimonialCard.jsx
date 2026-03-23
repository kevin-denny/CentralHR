'use client';

import { Quote, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PREVIEW_LENGTH = 220;

export default function TestimonialCard({ text, name, role, delay = 0, href }) {
    const isLong = text.length > PREVIEW_LENGTH;
    const preview = isLong ? text.slice(0, PREVIEW_LENGTH).trimEnd() + '…' : text;

    return (
        <div
            className="bg-white rounded-lg border border-gray-100 flex flex-col h-full group"
            style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.13)';
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Accent top bar */}
            <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #003f7d, #fd7702)',
                flexShrink: 0
            }} />

            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#fd7702" color="#fd7702" />
                    ))}
                </div>

                <Quote size={32} style={{ color: '#fd7702', opacity: 0.25, marginBottom: '0.75rem' }} />

                {/* Preview text */}
                <p style={{
                    color: '#374151',
                    fontStyle: 'italic',
                    fontSize: '0.95rem',
                    lineHeight: '1.75',
                    flexGrow: 1,
                    margin: '0 0 1.25rem 0'
                }}>
                    &quot;{preview}&quot;
                </p>

                {/* Read full testimonial link */}
                {isLong && href && (
                    <Link
                        href={href}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            color: '#003f7d',
                            textDecoration: 'none',
                            marginBottom: '1.25rem',
                            transition: 'color 0.2s, gap 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.color = '#fd7702';
                            e.currentTarget.style.gap = '10px';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.color = '#003f7d';
                            e.currentTarget.style.gap = '6px';
                        }}
                    >
                        Read full testimonial <ArrowRight size={14} />
                    </Link>
                )}

                {/* Author */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    borderTop: '1px solid #f3f4f6', paddingTop: '1rem'
                }}>
                    <div style={{
                        width: '42px', height: '42px', flexShrink: 0,
                        background: 'linear-gradient(135deg, #003f7d, #fd7702)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontWeight: '700', fontSize: '1rem',
                        boxShadow: '0 2px 8px rgba(0,63,125,0.2)'
                    }}>
                        {name.charAt(0)}
                    </div>
                    <div>
                        <div style={{ fontWeight: '700', color: '#003f7d', fontSize: '0.9rem' }}>{name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
