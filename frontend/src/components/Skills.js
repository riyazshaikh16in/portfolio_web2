import React, { useState, useEffect, useRef } from 'react';
import { technicalSkills } from '../data/portfolioData';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills after a delay
          setTimeout(() => {
            setAnimatedSkills(technicalSkills.map((_, index) => index));
          }, 800);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(technicalSkills.map(skill => skill.category))];

  return (
    <section ref={sectionRef} id="skills" className="section" style={{ 
      paddingTop: '4rem', 
      paddingBottom: '4rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.02)'
    }}>
      <div className="container">
        {/* Section Header - Compact */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div className="label mb-2">
            Technical Skills
          </div>
          
          <h2 className="section-title" style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}>
            My
            <br />
            <span className="text-gradient">Expertise</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Mastering cutting-edge technologies and methodologies to deliver exceptional results.
          </div>
        </div>
        
        {/* FIXED: All skills in single box */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* All Skills in One Box */}
          <div className={`glass-card animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ 
            position: 'relative', 
            overflow: 'hidden',
            padding: '2rem'
          }}>
            <div className="label mb-3">
              Technical Proficiency
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem'
            }}>
              {categories.map((category, categoryIndex) => (
                <div key={category}>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--accent-secondary)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {category}
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gap: '1rem'
                  }}>
                    {technicalSkills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => {
                        const skillIndex = technicalSkills.findIndex(s => s.name === skill.name);
                        const isAnimated = animatedSkills.includes(skillIndex);
                        
                        return (
                          <div key={skill.name}>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '0.5rem'
                            }}>
                              <span className="text-body" style={{
                                fontWeight: '600',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem'
                              }}>
                                {skill.name}
                              </span>
                              <span style={{
                                fontSize: '0.8rem',
                                color: 'var(--accent-secondary)',
                                fontWeight: '700',
                                background: 'rgba(49, 130, 206, 0.1)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '12px'
                              }}>
                                {skill.level}%
                              </span>
                            </div>
                            
                            {/* Skill Bar */}
                            <div style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '50px',
                              height: '6px',
                              overflow: 'hidden',
                              position: 'relative'
                            }}>
                              <div 
                                style={{
                                  height: '100%',
                                  background: 'var(--accent-gradient)',
                                  borderRadius: '50px',
                                  transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                  width: isAnimated ? `${skill.level}%` : '0%',
                                  position: 'relative',
                                  overflow: 'hidden'
                                }}
                              >
                                <div style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                                  animation: isAnimated ? 'shimmer 2s infinite' : 'none'
                                }}></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FIXED: Separate Skills Highlight Box */}
          <div className={`glass-card animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
          }}>
            <div className="label mb-3">
              Skill Highlights
            </div>
            
            <div className="text-body" style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              color: 'var(--text-secondary)'
            }}>
              Over 20 years of experience with cutting-edge automation technologies and technical leadership.
            </div>
            
            <div style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {technicalSkills.length}
                </div>
                <div className="text-body" style={{ 
                  fontWeight: '600', 
                  fontSize: '0.9rem',
                  marginBottom: '0.25rem'
                }}>
                  Technical Skills
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {categories.length}
                </div>
                <div className="text-body" style={{ 
                  fontWeight: '600', 
                  fontSize: '0.9rem',
                  marginBottom: '0.25rem'
                }}>
                  Skill Categories
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'var(--accent-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {Math.round(technicalSkills.reduce((acc, skill) => acc + skill.level, 0) / technicalSkills.length)}%
                </div>
                <div className="text-body" style={{ 
                  fontWeight: '600', 
                  fontSize: '0.9rem'
                }}>
                  Average Proficiency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .opacity-0 {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fade-in {
          transition: all 0.6s ease-out;
        }
        
        .animate-delay-1 {
          transition-delay: 0.2s;
        }
        
        .animate-delay-2 {
          transition-delay: 0.4s;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @media (max-width: 1024px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .container > div:nth-child(2) > div:first-child > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;