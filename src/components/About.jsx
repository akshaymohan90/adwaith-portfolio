import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import aboutImage from '../assets/images/about_male_concierge_1775572792820.png';
import './About.css';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="summary" className="about-section section-padding">
            <div className="container about-grid">
                <motion.div
                    className="about-image-container glass-panel"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={aboutImage} alt="Male Concierge Operations" className="about-image" />
                    <div className="experience-badge">
                        <span className="text-gold h2">5★</span>
                        <p>Passionate about<br />Service Excellence</p>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={itemVariants} className="section-title">
                        Professional <span className="text-gold">Summary</span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="about-text">
                        A motivated Hotel Management graduate with hands-on experience in front office operations and hospitality services across reputed 5-star hotels. Skilled in guest handling, reservations, and delivering excellent customer service.
                    </motion.p>
                    <motion.p variants={itemVariants} className="about-text">
                        Eager to contribute to a professional hospitality team while ensuring a high-quality guest experience, upholding hygiene & safety standards, and ensuring seamless front desk operations.
                    </motion.p>

                    <motion.div variants={itemVariants} className="contact-info">
                        <div className="contact-item">
                            <Mail className="text-gold" size={20} />
                            <span>madwaith895@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <Phone className="text-gold" size={20} />
                            <span>+91 9778029046</span>
                        </div>
                        <div className="contact-item">
                            <MapPin className="text-gold" size={20} />
                            <span>Kollam, Kerala, India</span>
                        </div>
                        <div className="contact-item">
                            <User className="text-gold" size={20} />
                            <span>Born: 2004-06-03 | Indian</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
