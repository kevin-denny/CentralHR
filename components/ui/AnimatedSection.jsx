'use client';

import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, className = '', animation = 'fadeIn', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [delay]);

    const animationStyles = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
            ? 'translateY(0)'
            : animation === 'slideUp' ? 'translateY(30px)' : 'translateY(0)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
    };

    return (
        <div
            ref={sectionRef}
            className={className}
            style={animationStyles}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
