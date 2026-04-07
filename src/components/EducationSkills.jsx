import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Heart } from 'lucide-react';
import './EducationSkills.css';

const educationList = [
    {
        degree: "Bachelor of Management Studies - Hotel Management",
        school: "A J College of Science and Technology, University of Kerala",
        year: "2025",
    },
    {
        degree: "Higher Secondary Education (HSE)",
        school: "E.H.S.S Parippally, Kollam - HSE Board, Kerala",
        year: "2022",
        score: "70%"
    },
    {
        degree: "Secondary School Leaving Certificate (SSLC)",
        school: "S.N.T.H.S.S Chathanoor, Kollam - Kerala State Board",
        year: "2020",
        score: "72%"
    }
];

const skills = [
    "Front Office Management", "Guest Handling", "Check-in & Check-out operations",
    "Team Collaboration", "Hygiene & Safety Standards"
];

const languages = [
    { name: "Malayalam", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Intermediate" },
    { name: "Tamil", level: "Intermediate" }
];

export default function EducationSkills() {
    return (
        <section id="skills" className="edu-skills-section section-padding">
            <div className="container">
                <div className="edu-skills-grid">

                    <motion.div
                        className="edu-column"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-heading-small">
                            <GraduationCap className="text-gold" size={32} />
                            <h3>Education</h3>
                        </div>

                        <div className="edu-list">
                            {educationList.map((item, i) => (
                                <div key={i} className="edu-card glass-panel">
                                    <span className="edu-year text-gold">{item.year}</span>
                                    <h4>{item.degree}</h4>
                                    <p>{item.school}</p>
                                    {item.score && <div className="edu-score">Score: {item.score}</div>}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-column"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="skills-block">
                            <div className="section-heading-small">
                                <Award className="text-gold" size={30} />
                                <h3>Professional Skills</h3>
                            </div>
                            <div className="skills-container">
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        className="skill-pill"
                                        whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-gold)', color: 'var(--bg-primary)' }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-block">
                            <div className="section-heading-small">
                                <Globe className="text-gold" size={30} />
                                <h3>Languages</h3>
                            </div>
                            <div className="lang-container">
                                {languages.map((lang, i) => (
                                    <div key={i} className="lang-item">
                                        <span className="lang-name">{lang.name}</span>
                                        <div className="lang-bar-bg">
                                            <motion.div
                                                className="lang-bar-fill bg-gold"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: lang.level === 'Fluent' ? '100%' : '60%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                        <span className="lang-level text-muted">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-block hidden-mobile">
                            <div className="section-heading-small">
                                <Heart className="text-gold" size={30} />
                                <h3>Hobbies</h3>
                            </div>
                            <p className="hobbies-text">
                                Cooking | Reading | Interacting with people | Exploring hospitality experiences
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
