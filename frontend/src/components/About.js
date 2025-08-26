import React, { useState, useEffect, useRef } from 'react';
import { Target, Code, Lightbulb, Award, Users, CheckCircle } from 'lucide-react';
import { aboutMe, expertise, achievements, education, certifications } from '../data/portfolioData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Target: <Target size={20} />,
      Code: <Code size={20} />,
      Lightbulb: <Lightbulb size={20} />,
      Award: <Award size={20} />,
      Users: <Users size={20} />
    };
    return icons[iconName] || <CheckCircle size={20} />;
  };

  return (
    <section ref={sectionRef} id="about" className="section" style={{ 
      paddingTop: '4rem', 
      paddingBottom: '4rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div className="label mb-2">
            {aboutMe.label}
          </div>
          
          <h2 className="section-title" style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}>
            {aboutMe.title}
            <br />
            <span className="text-gradient">{aboutMe.titleAccent}</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            {aboutMe.paragraphs[0]}
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Column */}
          <div className={`about-left animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Story */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="text-body" style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1rem',
                color: 'var(--text-secondary)'
              }}>
                {aboutMe.paragraphs[1]}
              </div>
              <div className="text-body" style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--text-secondary)'
              }}>
                {aboutMe.paragraphs[2]}
              </div>
            </div>
            
            {/* Compact Achievements */}
            <div className="glass-card" style={{ 
              position: 'relative', 
              overflow: 'hidden',
              padding: '2rem'
            }}>
              <div className="label mb-2">
                Career Highlights
              </div>
              
              <div className="achievements-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '1rem'
              }}>
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item" style={{
                    textAlign: 'center',
                    padding: '1rem',
                    background: 'rgba(49, 130, 206, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(49, 130, 206, 0.1)'
                  }}>
                    <div style={{
                      fontSize: '1.8rem',
                      fontWeight: '800',
                      color: 'var(--accent-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {achievement.number}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {achievement.label}
                    </div>
                    <div className="text-small" style={{ fontSize: '0.7rem' }}>
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className={`about-right animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Expertise */}
            <div className="glass-card" style={{ 
              marginBottom: '2rem', 
              position: 'relative', 
              overflow: 'hidden',
              padding: '2rem'
            }}>
              <div className="label mb-2">
                Core Expertise
              </div>
              
              <div style={{
                display: 'grid',
                gap: '1rem'
              }}>
                {expertise.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div style={{
                      padding: '0.75rem',
                      background: 'rgba(49, 130, 206, 0.15)',
                      borderRadius: '12px',
                      color: 'var(--accent-secondary)',
                      flexShrink: 0
                    }}>
                      {getIcon(item.icon)}
                    </div>
                    
                    <div>
                      <div className="text-body" style={{
                        fontWeight: '600',
                        marginBottom: '0.25rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem'
                      }}>
                        {item.title}
                      </div>
                      <div className="text-body" style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4',
                        fontSize: '0.85rem'
                      }}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education & Certifications */}
            <div className="edu-cert-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}>
              {/* Education */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div className="label mb-2">
                  Education
                </div>
                
                <div style={{
                  display: 'grid',
                  gap: '1rem'
                }}>
                  {education.map((edu, index) => (
                    <div key={index} style={{
                      padding: '1rem',
                      background: 'rgba(49, 130, 206, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(49, 130, 206, 0.1)'
                    }}>
                      <div className="text-body" style={{
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem',
                        fontSize: '0.9rem'
                      }}>
                        {edu.degree}
                      </div>
                      <div className="text-body" style={{
                        color: 'var(--accent-secondary)',
                        marginBottom: '0.25rem',
                        fontWeight: '500',
                        fontSize: '0.8rem'
                      }}>
                        {edu.field}
                      </div>
                      <div className="text-small" style={{ fontSize: '0.75rem' }}>
                        {edu.institution} • {edu.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div className="label mb-2">
                  Certifications
                </div>
                
                <div style={{
                  display: 'grid',
                  gap: '0.75rem'
                }}>
                  {certifications.map((cert, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'rgba(49, 130, 206, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(49, 130, 206, 0.1)'
                    }}>
                      <CheckCircle size={14} color="var(--accent-primary)" />
                      <span className="text-body" style={{ 
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        {cert}
                      </span>
                    </div>
                  ))}
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
        
        /* FIXED: Complete mobile responsiveness */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .edu-cert-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .achievements-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .achievement-item {
            display: flex !important;
            align-items: center !important;
            text-align: left !important;
            gap: 1rem !important;
          }
          
          .achievement-item > div:first-child {
            font-size: 2rem !important;
            min-width: 60px !important;
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
            min-height: auto !important;
          }
          
          .glass-card {
            padding: 1.5rem !important;
          }
          
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
          
          .achievement-item {
            flex-direction: row !important;
            text-align: left !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 1rem !important;
          }
          
          .glass-card {
            padding: 1rem !important;
          }
          
          .section-title {
            font-size: clamp(1.5rem, 6vw, 2rem) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;