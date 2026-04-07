import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        type: "Industrial Training",
        hotel: "Crowne Plaza",
        location: "Kochi",
        description: "Learned basics of hospitality service operations in a 5-star environment.",
        skills: ["Service Operations", "5-Star Standards", "Hospitality Basics"]
    },
    {
        type: "OJT Experience",
        hotel: "Leela Ashtamudi",
        location: "Kerala",
        description: "Managed guest check-in/out processes and handled guest inquiries to ensure customer satisfaction.",
        skills: ["Guest Handling", "Reservations", "Billing", "Customer Satisfaction"]
    },
    {
        type: "ODC Experience",
        hotel: "Hotel Port Palace",
        location: "Kovalam, Trivandrum",
        description: "Assisted in banquet setups, guest service, and on-demand catering.",
        skills: ["Banquet Setup", "Guest Service", "Catering"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="experience-section section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Industry <span className="text-gold">Exposure</span></h2>
                    <p className="subtitle">Hands-on experience across renowned 5-star properties.</p>
                </motion.div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="timeline-content glass-panel">
                                <div className="exp-icon bg-gold">
                                    <Briefcase color="var(--bg-primary)" size={24} />
                                </div>
                                <h3 className="exp-type text-gold">{exp.type}</h3>
                                <h4 className="exp-hotel">{exp.hotel}</h4>
                                <div className="exp-location">
                                    <MapPin size={16} className="text-muted" />
                                    <span className="text-muted">{exp.location}</span>
                                </div>
                                <p className="exp-desc">{exp.description}</p>
                                <div className="exp-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="skill-tag">
                                            <CheckCircle size={14} className="text-gold" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
