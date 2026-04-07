import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/images/hero_group_executives_1775573008224.png';
import './Hero.css';

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <img
                    src={heroImage}
                    alt="Front Office Executives"
                    className="hero-image"
                />
            </div>

            <div className="hero-content container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-text-wrapper"
                >
                    <motion.p
                        className="hero-subtitle text-gold"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Aspiring Hospitality Professional
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Adwaith<br />
                        <span className="text-gradient">M</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        Delivering exceptional guest experiences with a passion for front office management and 5-star hospitality standards.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <a href="#summary" className="btn-primary">Explore Portfolio</a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <p>Scroll to explore</p>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="text-gold" />
                </motion.div>
            </motion.div>
        </section>
    );
}
