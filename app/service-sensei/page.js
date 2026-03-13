'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
    Star, ChevronRight, Users, MessageSquare, Briefcase, HeartHandshake, TrendingUp,
    Instagram, Youtube, Facebook, Linkedin, Music2,
    BookOpen, Lightbulb, Video, Zap, Globe, Clock
} from 'lucide-react';

const SOCIAL = [
    {
        icon: <Instagram size={32} />,
        iconSm: <Instagram size={18} />,
        href: 'https://www.instagram.com/servicesensei',
        label: 'Instagram',
        handle: '@servicesensei',
        color: '#E1306C',
        bg: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',
        desc: 'Daily service tips, behind-the-scenes, and reels for professionals on the go.',
    },
    {
        icon: <Youtube size={32} />,
        iconSm: <Youtube size={18} />,
        href: 'https://www.youtube.com/@servicesensei-ss',
        label: 'YouTube',
        handle: '@servicesensei-ss',
        color: '#FF0000',
        bg: '#FF0000',
        desc: 'In-depth training videos and real-world service scenarios for serious professionals.',
    },
    {
        icon: <Music2 size={32} />,
        iconSm: <Music2 size={18} />,
        href: 'https://www.tiktok.com/@servicesensei',
        label: 'TikTok',
        handle: '@servicesensei',
        color: '#fff',
        bg: 'linear-gradient(135deg, #010101 40%, #69C9D0 70%, #EE1D52 100%)',
        desc: 'Quick 60-second service lessons. Great service is a skill — learn it in a scroll.',
    },
    {
        icon: <Facebook size={32} />,
        iconSm: <Facebook size={18} />,
        href: 'https://web.facebook.com/profile.php?id=61573079602119',
        label: 'Facebook',
        handle: 'Service Sensei',
        color: '#1877F2',
        bg: '#1877F2',
        desc: 'Community discussions, articles, and service excellence content for your feed.',
    },
];

const TEACHINGS = [
    {
        icon: <Users size={28} />,
        title: 'Customer Experience',
        desc: 'Understand your customers, anticipate their needs, and deliver memorable experiences that keep them coming back.',
    },
    {
        icon: <MessageSquare size={28} />,
        title: 'Professional Communication',
        desc: 'Master clear, respectful, and confident communication across every interaction — in-person, on-call, or online.',
    },
    {
        icon: <Briefcase size={28} />,
        title: 'Workplace Professionalism',
        desc: 'Develop the habits, mindset, and behaviors of a true professional that sets you apart in any environment.',
    },
    {
        icon: <HeartHandshake size={28} />,
        title: 'Handling Difficult Situations',
        desc: 'Turn complaints and challenges into opportunities to build stronger, longer-lasting customer relationships.',
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'Service Culture',
        desc: 'Understand how consistent service excellence, practiced by everyone, drives measurable business success.',
    },
];

const AUDIENCE = [
    'Customer service professionals',
    'Hospitality and retail staff',
    'Frontline employees',
    'Managers and supervisors',
    'Business leaders improving service culture',
    'Anyone who interacts with customers',
];

const FORMATS = [
    { icon: <Lightbulb size={24} />, label: 'Weekly Service Tips', desc: 'Bite-sized, actionable insights delivered every week.' },
    { icon: <BookOpen size={24} />, label: 'Real-life Scenarios', desc: 'Learn from authentic customer service situations.' },
    { icon: <Globe size={24} />, label: 'Global Best Practices', desc: 'Insights drawn from world-class service leaders.' },
    { icon: <Video size={24} />, label: 'Quick Training Videos', desc: 'Short-form lessons built for busy professionals.' },
    { icon: <Zap size={24} />, label: 'Behavior Lessons', desc: 'Practical lessons on professional habits and mindset.' },
    { icon: <Clock size={24} />, label: 'Ongoing Learning', desc: 'Continuous improvement through consistent practice.' },
];

const TAGLINES = [
    { num: '01', text: 'Master the Art of Service.' },
    { num: '02', text: 'Service Excellence Starts With You.' },
    { num: '03', text: 'Think Like a Professional. Serve Like a Sensei.' },
    { num: '04', text: 'Small Service Improvements. Big Business Results.' },
];

export default function ServiceSensei() {
    const [scrollY, setScrollY] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    const [visible, setVisible] = useState({});
    const refs = useRef({});

    useEffect(() => {
        const onScroll = () => {
            setScrollY(window.scrollY);
            setShowSidebar(window.scrollY > window.innerHeight * 0.8);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const obs = {};
        Object.entries(refs.current).forEach(([k, el]) => {
            if (!el) return;
            const o = new IntersectionObserver(
                ([e]) => { if (e.isIntersecting) setVisible(p => ({ ...p, [k]: true })); },
                { threshold: 0.12 }
            );
            o.observe(el);
            obs[k] = o;
        });
        return () => Object.values(obs).forEach(o => o.disconnect());
    }, []);

    const ref = k => el => { refs.current[k] = el; };
    const anim = (k, extra = '') => `ss-anim${extra} ${visible[k] ? 'visible' : ''}`;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap');

                .ss-page *, .ss-page *::before, .ss-page *::after { box-sizing: border-box; }
                .ss-page {
                    font-family: 'Inter', sans-serif;
                    background: #000;
                    color: #fff;
                    overflow-x: hidden;
                }
                .ss-page a { text-decoration: none; color: inherit; }
                .ss-page p { margin: 0; }
                .ss-page h1, .ss-page h2, .ss-page h3, .ss-page h4 { margin: 0; color: inherit; line-height: 1; }

                /* ─── ANIMATIONS ─── */
                .ss-anim          { opacity: 0; transform: translateY(36px); transition: opacity .7s ease, transform .7s ease; }
                .ss-anim-left     { opacity: 0; transform: translateX(-36px); transition: opacity .7s ease, transform .7s ease; }
                .ss-anim-right    { opacity: 0; transform: translateX(36px); transition: opacity .7s ease, transform .7s ease; }
                .ss-anim-scale    { opacity: 0; transform: scale(.92); transition: opacity .7s ease, transform .7s ease; }
                .ss-anim.visible, .ss-anim-left.visible, .ss-anim-right.visible, .ss-anim-scale.visible {
                    opacity: 1; transform: none;
                }
                .d1 { transition-delay: .1s; } .d2 { transition-delay: .2s; }
                .d3 { transition-delay: .3s; } .d4 { transition-delay: .4s; }
                .d5 { transition-delay: .5s; } .d6 { transition-delay: .6s; }

                /* ─── HERO ─── */
                .ss-hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex; align-items: center; justify-content: center; text-align: center;
                    overflow: hidden; background: #000;
                }
                .ss-hero-bg {
                    position: absolute; inset: 0; z-index: 0;
                    background:
                        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(253,51,42,.4) 0%, transparent 65%),
                        radial-gradient(ellipse 55% 50% at 8% 100%, rgba(27,58,100,.55) 0%, transparent 60%),
                        radial-gradient(ellipse 45% 40% at 90% 75%, rgba(232,162,101,.18) 0%, transparent 55%);
                }
                .ss-hero-grid {
                    position: absolute; inset: 0; z-index: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                }
                .ss-hero-content { position: relative; z-index: 2; padding: 2rem 1.5rem; max-width: 900px; margin: 0 auto; }

                .ss-eyebrow {
                    display: inline-block;
                    font-size: .7rem; font-weight: 700; letter-spacing: .3em; text-transform: uppercase;
                    color: #e8a265; border: 1px solid rgba(232,162,101,.3);
                    background: rgba(232,162,101,.08); padding: .4rem 1.4rem;
                    border-radius: 9999px; margin-bottom: 2rem;
                }
                .ss-hero-title {
                    font-family: 'Bebas Neue', cursive;
                    font-size: clamp(3.8rem, 11vw, 8.5rem);
                    line-height: .9; margin-bottom: 1.5rem; letter-spacing: .02em; color: #fff;
                }
                .ss-hero-title .red  { color: #fd332a; }
                .ss-hero-title .ghost { -webkit-text-stroke: 2px #fff; color: transparent; }
                .ss-hero-sub {
                    font-size: clamp(1rem, 2.5vw, 1.3rem); font-weight: 300;
                    color: rgba(255,255,255,.65); margin-bottom: 1.25rem; line-height: 1.7;
                }
                .ss-hero-sub em { color: #e8a265; font-style: normal; font-weight: 600; }
                .ss-hero-tagline {
                    font-family: 'Bebas Neue', cursive;
                    font-size: clamp(1.2rem, 3.5vw, 2rem); letter-spacing: .15em;
                    color: rgba(255,255,255,.25); margin-bottom: 2.5rem;
                }
                .ss-stars-row { display: flex; justify-content: center; gap: .4rem; margin-bottom: 2.5rem; }
                .hero-btn-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
                .ss-hero-btn {
                    display: inline-flex; align-items: center; gap: .6rem;
                    padding: 1rem 2.4rem; background: #fd332a; color: #fff;
                    font-weight: 700; font-size: .95rem; letter-spacing: .06em; text-transform: uppercase;
                    border-radius: 3px; border: 2px solid #fd332a;
                    transition: all .3s ease; position: relative; overflow: hidden;
                }
                .ss-hero-btn::after {
                    content: ''; position: absolute; inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,.15), transparent);
                    opacity: 0; transition: opacity .3s;
                }
                .ss-hero-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(253,51,42,.5); }
                .ss-hero-btn:hover::after { opacity: 1; }
                .ss-hero-btn-ghost {
                    display: inline-flex; align-items: center; gap: .6rem;
                    padding: 1rem 2.4rem; background: transparent; color: rgba(255,255,255,.7);
                    font-weight: 600; font-size: .95rem; letter-spacing: .04em;
                    border-radius: 3px; border: 2px solid rgba(255,255,255,.18);
                    transition: all .3s ease;
                }
                .ss-hero-btn-ghost:hover { border-color: rgba(255,255,255,.5); color: #fff; }

                .ss-scroll-line {
                    position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
                    width: 1px; height: 60px;
                    background: linear-gradient(to bottom, rgba(232,162,101,.8), transparent);
                    animation: drip 2s ease-in-out infinite; z-index: 2;
                }
                @keyframes drip {
                    0%   { transform: translateX(-50%) scaleY(0); transform-origin: top; opacity:1; }
                    50%  { transform: translateX(-50%) scaleY(1); transform-origin: top; opacity:1; }
                    100% { transform: translateX(-50%) scaleY(1); transform-origin: bottom; opacity:0; }
                }

                /* ─── MARQUEE ─── */
                .ss-strip { background: #fd332a; padding: .9rem 0; overflow: hidden; white-space: nowrap; }
                .ss-strip-inner {
                    display: inline-flex; gap: 3rem;
                    animation: marquee 20s linear infinite;
                }
                .ss-strip-item {
                    font-family: 'Bebas Neue', cursive; font-size: 1.2rem;
                    letter-spacing: .15em; color: #fff;
                    display: inline-flex; align-items: center; gap: 1rem;
                }
                .ss-dot { width: 5px; height: 5px; background: rgba(255,255,255,.45); border-radius: 50%; }
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

                /* ─── GENERIC SECTION ─── */
                .ss-sec { padding: 7rem 1.5rem; position: relative; }
                .ss-con { max-width: 1100px; margin: 0 auto; }
                .ss-label {
                    font-size: .68rem; font-weight: 700; letter-spacing: .3em; text-transform: uppercase;
                    color: #fd332a; margin-bottom: .75rem;
                }
                .ss-title {
                    font-family: 'Bebas Neue', cursive;
                    font-size: clamp(2.2rem, 5.5vw, 4rem); line-height: 1; margin-bottom: 1.25rem; letter-spacing: .03em;
                }
                .ss-title .a { color: #e8a265; }
                .ss-body { color: rgba(255,255,255,.55); line-height: 1.75; font-size: .95rem; }

                /* ─── INTRO ─── */
                .ss-intro-bg { background: #0a0a0a; }
                .ss-intro-layout {
                    display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center;
                }
                @media (min-width: 860px) { .ss-intro-layout { grid-template-columns: 1fr 1fr; } }
                .ss-intro-quote {
                    font-family: 'Bebas Neue', cursive;
                    font-size: clamp(2rem, 5vw, 3.2rem); letter-spacing: .06em;
                    color: rgba(255,255,255,.08); line-height: 1.1; margin-bottom: 2rem;
                }
                .ss-stat-row { display: flex; gap: 2rem; flex-wrap: wrap; margin-top: 2.5rem; }
                .ss-stat { }
                .ss-stat-num {
                    font-family: 'Bebas Neue', cursive; font-size: 3rem;
                    color: #fd332a; line-height: 1; margin-bottom: .2rem;
                }
                .ss-stat-label { font-size: .75rem; letter-spacing: .12em; color: rgba(255,255,255,.4); text-transform: uppercase; }
                .ss-logo-ring {
                    position: relative; width: 240px; height: 240px;
                    display: flex; align-items: center; justify-content: center;
                    margin: 0 auto;
                }
                .ss-logo-ring::before {
                    content: ''; position: absolute; inset: -3px; border-radius: 50%;
                    background: conic-gradient(#fd332a, #e8a265, #1b3a64, #fd332a);
                    animation: spin 6s linear infinite;
                }
                .ss-logo-inner {
                    position: relative; z-index: 1;
                    width: 230px; height: 230px; border-radius: 50%;
                    background: #0a0a0a; display: flex; align-items: center; justify-content: center;
                }
                @keyframes spin { to { transform: rotate(360deg); } }

                /* ─── PURPOSE ─── */
                .ss-purpose-bg { background: #1b3a64; }
                .ss-purpose-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1px; background: rgba(255,255,255,.08); margin-top: 4rem;
                }
                .ss-purpose-item {
                    padding: 2.25rem 2rem; background: #1b3a64;
                    transition: background .3s;
                    position: relative; overflow: hidden;
                }
                .ss-purpose-item::after {
                    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
                    background: #e8a265; transform: scaleX(0); transition: transform .35s;
                }
                .ss-purpose-item:hover { background: #163260; }
                .ss-purpose-item:hover::after { transform: scaleX(1); }
                .ss-pi-num {
                    font-family: 'Bebas Neue', cursive; font-size: 3.5rem;
                    color: rgba(232,162,101,.15); line-height: 1; margin-bottom: .75rem;
                }
                .ss-purpose-item p { font-size: .88rem; color: rgba(255,255,255,.7); line-height: 1.6; }

                /* ─── TEACHINGS ─── */
                .ss-teach-bg { background: #000; }
                .ss-teach-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem; margin-top: 4rem;
                }
                .ss-teach-card {
                    border: 1px solid rgba(255,255,255,.07); border-radius: 2px;
                    padding: 2.25rem 2rem; background: rgba(255,255,255,.02);
                    transition: border-color .3s, background .3s, transform .3s;
                    position: relative; overflow: hidden;
                }
                .ss-teach-card:hover {
                    border-color: #e8a265; background: rgba(232,162,101,.04);
                    transform: translateY(-5px);
                }
                .ss-teach-icon {
                    width: 52px; height: 52px; border-radius: 4px;
                    background: rgba(232,162,101,.08); color: #e8a265;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 1.25rem;
                    transition: background .3s, color .3s;
                }
                .ss-teach-card:hover .ss-teach-icon { background: #e8a265; color: #000; }
                .ss-teach-card h3 { font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: .6rem; color: #fff; }
                .ss-teach-card p { font-size: .85rem; color: rgba(255,255,255,.5); line-height: 1.7; }

                /* ─── AUDIENCE ─── */
                .ss-aud-bg { background: #0a0a0a; }
                .ss-aud-layout {
                    display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center;
                }
                @media (min-width: 860px) { .ss-aud-layout { grid-template-columns: 1fr 1fr; } }
                .ss-aud-list { margin-top: 2rem; display: flex; flex-direction: column; gap: .75rem; }
                .ss-aud-item {
                    display: flex; align-items: center; gap: 1rem;
                    padding: 1rem 1.25rem; background: rgba(255,255,255,.03);
                    border: 1px solid rgba(255,255,255,.06); border-radius: 2px;
                    transition: border-color .3s, background .3s;
                }
                .ss-aud-item:hover { border-color: rgba(253,51,42,.35); background: rgba(253,51,42,.04); }
                .ss-aud-dot { width: 8px; height: 8px; background: #fd332a; border-radius: 50%; flex-shrink: 0; }
                .ss-aud-item span { font-size: .9rem; color: rgba(255,255,255,.75); }
                .ss-aud-cta {
                    margin-top: 2rem; padding: 2rem; border-radius: 2px;
                    background: linear-gradient(135deg, rgba(253,51,42,.12), rgba(27,58,100,.3));
                    border: 1px solid rgba(253,51,42,.2);
                }
                .ss-aud-cta p { font-size: .95rem; color: rgba(255,255,255,.65); line-height: 1.7; margin-bottom: 1.5rem; }

                /* ─── FORMATS ─── */
                .ss-fmt-bg { background: #000; }
                .ss-fmt-grid {
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1px; background: rgba(255,255,255,.06); margin-top: 4rem;
                    border: 1px solid rgba(255,255,255,.06);
                }
                .ss-fmt-item {
                    padding: 2.25rem 2rem; background: #000;
                    transition: background .3s; cursor: default;
                    position: relative; overflow: hidden;
                }
                .ss-fmt-item::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: #fd332a; transform: scaleX(0); transition: transform .35s;
                }
                .ss-fmt-item:hover { background: #0a0a0a; }
                .ss-fmt-item:hover::before { transform: scaleX(1); }
                .ss-fmt-icon {
                    width: 44px; height: 44px; border-radius: 4px;
                    background: rgba(253,51,42,.1); color: #fd332a;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 1rem;
                    transition: background .3s, color .3s;
                }
                .ss-fmt-item:hover .ss-fmt-icon { background: #fd332a; color: #fff; }
                .ss-fmt-item h3 { font-size: .95rem; font-weight: 700; color: #fff; margin-bottom: .5rem; }
                .ss-fmt-item p { font-size: .82rem; color: rgba(255,255,255,.4); line-height: 1.6; }

                /* ─── TAGLINES ─── */
                .ss-tag-bg { background: #0a0a0a; }
                .ss-taglines { margin-top: 3.5rem; display: flex; flex-direction: column; gap: 0; }
                .ss-tagline-row {
                    display: flex; align-items: center; gap: 2rem;
                    padding: 1.75rem 0; border-bottom: 1px solid rgba(255,255,255,.06);
                    transition: padding-left .3s;
                    cursor: default;
                }
                .ss-tagline-row:hover { padding-left: 1rem; }
                .ss-tagline-row:hover .ss-tagline-text { color: #fff; }
                .ss-tagline-num { font-family: 'Bebas Neue', cursive; font-size: 1rem; color: #fd332a; letter-spacing: .1em; flex-shrink: 0; }
                .ss-tagline-text {
                    font-family: 'Bebas Neue', cursive; font-size: clamp(1.4rem, 3.5vw, 2.4rem);
                    letter-spacing: .04em; color: rgba(255,255,255,.5);
                    transition: color .3s;
                }

                /* ─── SOCIAL SECTION ─── */
                .ss-social-bg { background: #000; }
                .ss-social-header { text-align: center; margin-bottom: 4rem; }
                .ss-bio {
                    display: inline-block; max-width: 520px;
                    font-size: 1rem; color: rgba(255,255,255,.5); line-height: 1.8; margin-top: 1rem;
                }
                .ss-bio em { color: #e8a265; font-style: normal; }

                /* Platform cards */
                .ss-platform-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .ss-platform-card {
                    position: relative; border-radius: 4px; overflow: hidden;
                    background: #0d0d0d; border: 1px solid rgba(255,255,255,.07);
                    padding: 2.25rem 2rem;
                    transition: transform .35s, border-color .35s, box-shadow .35s;
                    display: flex; flex-direction: column; gap: 1rem;
                }
                .ss-platform-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(255,255,255,.18);
                    box-shadow: 0 20px 50px rgba(0,0,0,.5);
                }
                .ss-platform-card::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
                    opacity: 0; transition: opacity .35s;
                }
                .ss-platform-card:hover::before { opacity: 1; }
                .ss-plat-top { display: flex; align-items: center; justify-content: space-between; }
                .ss-plat-icon {
                    width: 56px; height: 56px; border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .ss-plat-follow {
                    font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
                    padding: .45rem 1rem; border-radius: 9999px;
                    border: 1px solid rgba(255,255,255,.15);
                    color: rgba(255,255,255,.6);
                    transition: all .3s;
                }
                .ss-platform-card:hover .ss-plat-follow {
                    border-color: rgba(255,255,255,.4); color: #fff;
                }
                .ss-plat-name {
                    font-family: 'Bebas Neue', cursive; font-size: 1.8rem;
                    letter-spacing: .06em; line-height: 1;
                }
                .ss-plat-handle {
                    font-size: .8rem; color: rgba(255,255,255,.35); letter-spacing: .04em;
                    margin-top: .2rem;
                }
                .ss-plat-desc { font-size: .85rem; color: rgba(255,255,255,.5); line-height: 1.65; }

                /* ─── FLOATING SIDEBAR ─── */
                .ss-sidebar {
                    position: fixed; right: 0; top: 50%;
                    transform: translateY(-50%) translateX(calc(100% - 3px));
                    z-index: 99;
                    display: flex; flex-direction: column; gap: 2px;
                    transition: transform .4s cubic-bezier(.77,0,.175,1);
                }
                .ss-sidebar.show { transform: translateY(-50%) translateX(0); }
                .ss-sidebar-btn {
                    display: flex; align-items: center; gap: .6rem;
                    padding: .65rem 1rem;
                    background: #111; color: rgba(255,255,255,.7);
                    border: none; border-left: none;
                    font-size: .75rem; font-weight: 600; letter-spacing: .05em;
                    cursor: pointer; transition: all .25s;
                    white-space: nowrap;
                    border-left: 3px solid transparent;
                    text-decoration: none;
                }
                .ss-sidebar-btn:hover { color: #fff; padding-right: 1.4rem; }
                .ss-sidebar-icon {
                    width: 28px; height: 28px; border-radius: 6px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }

                /* ─── CTA ─── */
                .ss-cta-bg {
                    background: #000; padding: 8rem 1.5rem; text-align: center;
                    position: relative; overflow: hidden;
                }
                .ss-cta-bg::before {
                    content: ''; position: absolute; inset: 0;
                    background:
                        radial-gradient(ellipse 55% 70% at 20% 50%, rgba(253,51,42,.18) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 60% at 80% 50%, rgba(27,58,100,.4) 0%, transparent 60%);
                }
                .ss-cta-bg > * { position: relative; z-index: 1; }
                .ss-cta-title {
                    font-family: 'Bebas Neue', cursive;
                    font-size: clamp(3rem, 8vw, 6.5rem); line-height: 1; margin-bottom: 1.25rem; letter-spacing: .02em;
                }
                .ss-cta-sub { font-size: 1.1rem; color: rgba(255,255,255,.5); margin-bottom: 3rem; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.7; }
                .ss-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
                .ss-cta-btn-red {
                    display: inline-flex; align-items: center; gap: .6rem;
                    padding: 1.1rem 3rem; background: #fd332a; color: #fff;
                    font-weight: 800; font-size: 1rem; letter-spacing: .07em; text-transform: uppercase;
                    border-radius: 3px; border: 2px solid #fd332a; transition: all .35s ease;
                }
                .ss-cta-btn-red:hover { background: transparent; color: #fd332a; box-shadow: 0 0 40px rgba(253,51,42,.3); transform: scale(1.04); }
                .ss-cta-btn-ghost {
                    display: inline-flex; align-items: center; gap: .6rem;
                    padding: 1.1rem 2.5rem; background: transparent; color: rgba(255,255,255,.6);
                    font-weight: 600; font-size: 1rem; letter-spacing: .04em;
                    border-radius: 3px; border: 2px solid rgba(255,255,255,.15); transition: all .3s;
                }
                .ss-cta-btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,.45); }
            `}</style>

            {/* ─── FLOATING SOCIAL SIDEBAR ─── */}
            <div className={`ss-sidebar${showSidebar ? ' show' : ''}`} aria-label="Follow us on social media">
                {SOCIAL.map((s, i) => (
                    <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ss-sidebar-btn"
                        title={s.label}
                        style={{ borderLeftColor: s.color }}
                    >
                        <span
                            className="ss-sidebar-icon"
                            style={{ background: typeof s.bg === 'string' && s.bg.includes('gradient') ? s.bg : s.color, color: '#fff' }}
                        >
                            {s.iconSm}
                        </span>
                        {s.label}
                    </a>
                ))}
            </div>

            <div className="ss-page">

                {/* ═══ HERO ═══ */}
                <section className="ss-hero">
                    <div className="ss-hero-bg" />
                    <div className="ss-hero-grid" style={{ transform: `translateY(${scrollY * 0.12}px)` }} />
                    <div className="ss-hero-content">
                        <div className="ss-eyebrow">A Central HR Solutions Initiative</div>
                        <h1 className="ss-hero-title">
                            <span className="red">Service</span><br />
                            <span className="ghost">Sensei</span>
                        </h1>
                        <p className="ss-hero-sub">
                            Your guide to mastering the art of professional service.<br />
                            <em>Great service is not accidental — it is intentional.</em>
                        </p>
                        <div className="ss-hero-tagline">Think Like a Pro. Serve Like a Sensei.</div>
                        <div className="ss-stars-row">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={22} fill="#e8a265" color="#e8a265" />
                            ))}
                        </div>
                        <div className="hero-btn-row">
                            <Link href="/contact" className="ss-hero-btn">
                                Get Started <ChevronRight size={16} />
                            </Link>
                            <Link href="#teachings" className="ss-hero-btn-ghost">
                                Explore Teachings
                            </Link>
                        </div>
                    </div>
                    <div className="ss-scroll-line" />
                </section>

                {/* ═══ MARQUEE ═══ */}
                <div className="ss-strip" aria-hidden="true">
                    <div className="ss-strip-inner">
                        {[...Array(2)].map((_, r) =>
                            ['Customer Experience', 'Service Excellence', 'Empathy+ Mindset', 'Professional Communication', 'Workplace Professionalism', 'Serve Like a Sensei']
                                .map((t, i) => (
                                    <span key={`${r}-${i}`} className="ss-strip-item">
                                        {t}<span className="ss-dot" />
                                    </span>
                                ))
                        )}
                    </div>
                </div>

                {/* ═══ INTRO ═══ */}
                <section className="ss-sec ss-intro-bg">
                    <div className="ss-con">
                        <div className="ss-intro-layout">
                            <div ref={ref('intro')} className={anim('intro')}>
                                <div className="ss-label">What is Service Sensei</div>
                                <h2 className="ss-title">Your guide to <span className="a">service mastery</span></h2>
                                <p className="ss-body" style={{ marginBottom: '1.25rem' }}>
                                    Service Sensei is your guide to mastering the art of professional service.
                                    Through practical insights, real-world examples, and proven global best practices,
                                    Service Sensei helps individuals and organizations elevate the way they serve customers,
                                    colleagues, and communities.
                                </p>
                                <p className="ss-body">
                                    Whether you are a front-line employee, a manager, or a business owner, Service Sensei
                                    equips you with the mindset and skills needed to deliver exceptional service every day.
                                </p>
                                <div className="ss-stat-row">
                                    <div className="ss-stat">
                                        <div className="ss-stat-num">5</div>
                                        <div className="ss-stat-label">Service Disciplines</div>
                                    </div>
                                    <div className="ss-stat">
                                        <div className="ss-stat-num">6</div>
                                        <div className="ss-stat-label">Learning Formats</div>
                                    </div>
                                    <div className="ss-stat">
                                        <div className="ss-stat-num">S3</div>
                                        <div className="ss-stat-label">Star Standard</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`ss-anim-right d2 ${visible['intro'] ? 'visible' : ''}`}>
                                <div className="ss-logo-ring">
                                    <div className="ss-logo-inner">
                                        <Image
                                            src="/ss.webp"
                                            alt="Service Sensei Logo"
                                            width={170}
                                            height={170}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ PURPOSE ═══ */}
                <section className="ss-sec ss-purpose-bg">
                    <div className="ss-con">
                        <div ref={ref('purpose')} className={anim('purpose')}>
                            <div className="ss-label">Brand Purpose</div>
                            <h2 className="ss-title">Great service is <span className="a">intentional</span></h2>
                            <p className="ss-body" style={{ maxWidth: '600px' }}>
                                At Service Sensei, our mission is to help professionals build the mindset and skills that transform ordinary interactions into extraordinary service moments.
                            </p>
                        </div>
                        <div className="ss-purpose-grid">
                            {[
                                { num: '01', text: 'Develop a service excellence mindset' },
                                { num: '02', text: 'Improve communication and professionalism' },
                                { num: '03', text: 'Build customer trust and loyalty' },
                                { num: '04', text: 'Create positive workplace cultures' },
                            ].map((m, i) => (
                                <div key={i} className={`ss-purpose-item ss-anim d${i + 1} ${visible['purpose'] ? 'visible' : ''}`}>
                                    <div className="ss-pi-num">{m.num}</div>
                                    <p>{m.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ TEACHINGS ═══ */}
                <section id="teachings" className="ss-sec ss-teach-bg">
                    <div className="ss-con">
                        <div ref={ref('teach')} className={anim('teach')}>
                            <div className="ss-label">What We Teach</div>
                            <h2 className="ss-title">Five <span className="a">service disciplines</span></h2>
                            <p className="ss-body" style={{ maxWidth: '560px' }}>
                                Practical lessons that immediately improve service quality — with real-world relevance in every module.
                            </p>
                        </div>
                        <div className="ss-teach-grid">
                            {TEACHINGS.map((t, i) => (
                                <div key={i} className={`ss-teach-card ss-anim d${i + 1} ${visible['teach'] ? 'visible' : ''}`}>
                                    <div className="ss-teach-icon">{t.icon}</div>
                                    <h3>{t.title}</h3>
                                    <p>{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ WHO IT'S FOR ═══ */}
                <section className="ss-sec ss-aud-bg">
                    <div className="ss-con">
                        <div className="ss-aud-layout">
                            <div ref={ref('aud')} className={`ss-anim-left ${visible['aud'] ? 'visible' : ''}`}>
                                <div className="ss-label">Who It's For</div>
                                <h2 className="ss-title">Built for <span className="a">every professional</span></h2>
                                <p className="ss-body" style={{ marginBottom: '0' }}>
                                    Anyone who interacts with customers can benefit from Service Sensei. If you serve people — this is for you.
                                </p>
                                <div className="ss-aud-list">
                                    {AUDIENCE.map((a, i) => (
                                        <div key={i} className={`ss-aud-item ss-anim d${i + 1} ${visible['aud'] ? 'visible' : ''}`}>
                                            <div className="ss-aud-dot" />
                                            <span>{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`ss-anim-right d2 ${visible['aud'] ? 'visible' : ''}`}>
                                <div className="ss-aud-cta">
                                    <div className="ss-label">TikTok / Reel Caption</div>
                                    <p style={{ color: 'rgba(255,255,255,.85)', fontStyle: 'italic', marginBottom: '1.25rem', lineHeight: 1.8 }}>
                                        "Great service is not luck — it is a skill."
                                    </p>
                                    <p>
                                        Welcome to Service Sensei, where we share quick lessons to help you become a true professional in customer service. Follow for weekly tips on:
                                    </p>
                                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                                        {['Customer experience', 'Professional communication', 'Service excellence'].map((it, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '.7rem', alignItems: 'center', fontSize: '.88rem', color: 'rgba(255,255,255,.6)' }}>
                                                <span style={{ color: '#e8a265' }}>✔</span> {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="ss-aud-cta" style={{ marginTop: '1.5rem', background: 'rgba(27,58,100,.3)', borderLeft: '3px solid #1b3a64' }}>
                                    <div className="ss-label">Social Media Bio</div>
                                    <p style={{ color: 'rgba(255,255,255,.7)', fontWeight: 600, marginBottom: '.5rem' }}>Service Sensei</p>
                                    <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '.88rem', lineHeight: 1.7 }}>
                                        Helping professionals master service excellence.<br />
                                        Weekly tips on customer experience, professionalism, and workplace success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ FORMATS ═══ */}
                <section className="ss-sec ss-fmt-bg">
                    <div className="ss-con">
                        <div ref={ref('fmt')} className={anim('fmt')}>
                            <div className="ss-label">Content Format</div>
                            <h2 className="ss-title">How we <span className="a">deliver learning</span></h2>
                            <p className="ss-body" style={{ maxWidth: '520px' }}>
                                Easy-to-digest learning formats built for busy professionals — always practical, always relevant.
                            </p>
                        </div>
                        <div className="ss-fmt-grid">
                            {FORMATS.map((f, i) => (
                                <div key={i} className={`ss-fmt-item ss-anim d${i + 1} ${visible['fmt'] ? 'visible' : ''}`}>
                                    <div className="ss-fmt-icon">{f.icon}</div>
                                    <h3>{f.label}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ TAGLINES ═══ */}
                <section className="ss-sec ss-tag-bg">
                    <div className="ss-con">
                        <div ref={ref('tag')} className={anim('tag')}>
                            <div className="ss-label">Brand Voice</div>
                            <h2 className="ss-title">Our <span className="a">taglines</span></h2>
                        </div>
                        <div className="ss-taglines">
                            {TAGLINES.map((t, i) => (
                                <div key={i} className={`ss-tagline-row ss-anim d${i + 1} ${visible['tag'] ? 'visible' : ''}`}>
                                    <span className="ss-tagline-num">{t.num}</span>
                                    <span className="ss-tagline-text">{t.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ SOCIAL ═══ */}
                <section className="ss-sec ss-social-bg">
                    <div className="ss-con">
                        <div ref={ref('social')} className={`ss-social-header ${anim('social')}`}>
                            <div className="ss-label">Follow Service Sensei</div>
                            <h2 className="ss-title">Find us on <span className="a">social media</span></h2>
                            <p className="ss-bio">
                                Weekly tips on <em>customer experience</em>, <em>professionalism</em>, and <em>workplace success</em> — wherever you spend your time.
                            </p>
                        </div>
                        <div className="ss-platform-grid">
                            {SOCIAL.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`ss-platform-card ss-anim d${i + 1} ${visible['social'] ? 'visible' : ''}`}
                                    style={{ '--plat-color': s.color }}
                                >
                                    <style>{`.ss-platform-card:nth-child(${i + 1})::before { background: ${typeof s.bg === 'string' && s.bg.includes('gradient') ? s.bg : s.color
                                        }; }`}</style>
                                    <div className="ss-plat-top">
                                        <div
                                            className="ss-plat-icon"
                                            style={{
                                                background: typeof s.bg === 'string' && s.bg.includes('gradient') ? s.bg : s.color,
                                                color: '#fff',
                                            }}
                                        >
                                            {s.icon}
                                        </div>
                                        <span className="ss-plat-follow">Follow →</span>
                                    </div>
                                    <div>
                                        <div className="ss-plat-name" style={{ color: s.label === 'TikTok' ? '#fff' : s.color }}>
                                            {s.label}
                                        </div>
                                        <div className="ss-plat-handle">{s.handle}</div>
                                    </div>
                                    <p className="ss-plat-desc">{s.desc}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ CTA ═══ */}
                <section className="ss-cta-bg">
                    <div ref={ref('cta')} className={anim('cta')}>
                        <div className="ss-label" style={{ display: 'block', marginBottom: '1rem', textAlign: 'center' }}>Start Your Journey</div>
                        <div className="ss-cta-title">
                            Service Excellence<br /><span style={{ color: '#e8a265' }}>Starts With You.</span>
                        </div>
                        <p className="ss-cta-sub">
                            Join professionals who are mastering the art of service — one lesson, one interaction, one standard at a time.
                        </p>
                        <div className="ss-cta-btns">
                            <Link href="/contact" className="ss-cta-btn-red">
                                Get In Touch <ChevronRight size={16} />
                            </Link>
                            <Link href="/grade-service" className="ss-cta-btn-ghost">
                                Grade Your Service →
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
