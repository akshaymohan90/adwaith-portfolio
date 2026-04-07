import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Summary', href: '#summary' },
    { title: 'Experience', href: '#experience' },
    { title: 'Skills & Education', href: '#skills' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="nav-container container">
                <a href="#home" className="logo">
                    <span className="text-gold">A</span>dwaith <span className="logo-dot text-gold">.</span>
                </a>

                <div className="nav-desktop">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.title}
                            href={link.href}
                            className="nav-link"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            {link.title}
                        </motion.a>
                    ))}
                </div>

                <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X color="var(--accent-gold)" /> : <Menu color="var(--text-primary)" />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    className="nav-mobile-menu glass-panel"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="nav-mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.title}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
