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
      Target: <Target size={24} />,
      Code: <Code size={24} />,
      Lightbulb: <Lightbulb size={24} />,
      Award: <Award size={24} />,
      Users: <Users size={24} />
    };
    return icons[iconName] || <CheckCircle size={24} />;
  };

  return (
    <section ref={sectionRef} id="about" className="section">
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            {aboutMe.label}
          </div>
          
          <h2 className="section-title mb-4">
            {aboutMe.title}
            <br />
            <span className="text-gradient">{aboutMe.titleAccent}</span>
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '5rem'
        }}>
          {/* About Content */}
          <div className={`animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {aboutMe.paragraphs.map((paragraph, index) => (
              <div key={index} className="text-body" style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                {paragraph}
              </div>
            ))}
            
            {/* Achievements Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card" style={{
                  padding: '2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(49, 130, 206, 0.05) 0%, transparent 100%)',
                    opacity: 0.5
                  }}></div>
                  
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--accent-primary)',
                    marginBottom: '0.5rem',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {achievement.number}
                  </div>
                  
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {achievement.label}
                  </div>
                  
                  <div className="text-small" style={{
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Expertise & Education */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Core Expertise */}
            <div className="glass-card" style={{ marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(49, 130, 206, 0.1) 0%, transparent 70%)',
                transform: 'translate(50px, -50px)'
              }}></div>
              
              <div className="label mb-3" style={{ position: 'relative', zIndex: 2 }}>
                Core Expertise
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 2
              }}>
                {expertise.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      padding: '1rem',
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
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)'
                      }}>
                        {item.title}
                      </div>
                      <div className="text-body">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
              <div className="label mb-3">
                Education
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {education.map((edu, index) => (
                  <div key={index} style={{
                    paddingBottom: '1.5rem',
                    borderBottom: index < education.length - 1 ? '1px solid var(--border-glass)' : 'none'
                  }}>
                    <div className="text-body" style={{
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {edu.degree}
                    </div>
                    <div className="text-body" style={{
                      color: 'var(--accent-secondary)',
                      marginBottom: '0.25rem'
                    }}>
                      {edu.field}
                    </div>
                    <div className="text-small">
                      {edu.institution} • {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="glass-card">
              <div className="label mb-3">
                Certifications
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
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
                    <CheckCircle size={16} color="var(--accent-primary)" />
                    <span className="text-body" style={{ fontSize: '0.95rem' }}>
                      {cert}
                    </span>
                  </div>
                ))}
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
          transition-delay: 0.1s;
        }
        
        .animate-delay-2 {
          transition-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default About;