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
      Target: <Target size={28} />,
      Code: <Code size={28} />,
      Lightbulb: <Lightbulb size={28} />,
      Award: <Award size={28} />,
      Users: <Users size={28} />
    };
    return icons[iconName] || <CheckCircle size={28} />;
  };

  return (
    <section ref={sectionRef} id="about" className="section" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        {/* Enhanced Section Header */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '6rem'
        }}>
          <div className="label mb-4">
            {aboutMe.label}
          </div>
          
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            {aboutMe.title}
            <br />
            <span className="text-gradient">{aboutMe.titleAccent}</span>
          </h2>
          
          {/* Main Description */}
          <div className="text-body" style={{
            fontSize: '1.25rem',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            {aboutMe.paragraphs[0]}
          </div>
        </div>
        
        {/* Main Content Grid - Better Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
          marginBottom: '6rem'
        }}>
          {/* Left Column - Story & Achievements */}
          <div className={`animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Continued Story */}
            <div style={{ marginBottom: '4rem' }}>
              {aboutMe.paragraphs.slice(1).map((paragraph, index) => (
                <div key={index} className="text-body" style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  color: 'var(--text-secondary)'
                }}>
                  {paragraph}
                </div>
              ))}
            </div>
            
            {/* Achievements - Redesigned as Cards */}
            <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(49, 130, 206, 0.1) 0%, transparent 70%)',
                transform: 'translate(50px, -50px)'
              }}></div>
              
              <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
                Career Highlights
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                position: 'relative',
                zIndex: 2
              }}>
                {achievements.map((achievement, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(49, 130, 206, 0.05)',
                    borderRadius: '16px',
                    border: '1px solid rgba(49, 130, 206, 0.1)'
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      color: 'var(--accent-primary)',
                      minWidth: '80px',
                      textAlign: 'center'
                    }}>
                      {achievement.number}
                    </div>
                    
                    <div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}>
                        {achievement.label}
                      </div>
                      <div className="text-small">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Expertise & Credentials */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Core Expertise - Enhanced Design */}
            <div className="glass-card" style={{ marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(66, 153, 225, 0.08) 0%, transparent 70%)',
                transform: 'translate(-50px, -50px)'
              }}></div>
              
              <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
                Core Expertise
              </div>
              
              <div style={{
                display: 'grid',
                gap: '2rem',
                position: 'relative',
                zIndex: 2
              }}>
                {expertise.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div style={{
                      padding: '1.2rem',
                      background: 'rgba(49, 130, 206, 0.15)',
                      borderRadius: '16px',
                      color: 'var(--accent-secondary)',
                      flexShrink: 0
                    }}>
                      {getIcon(item.icon)}
                    </div>
                    
                    <div>
                      <div className="text-body" style={{
                        fontWeight: '600',
                        marginBottom: '0.75rem',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem'
                      }}>
                        {item.title}
                      </div>
                      <div className="text-body" style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education & Certifications - Side by Side */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem'
            }}>
              {/* Education */}
              <div className="glass-card">
                <div className="label mb-4">
                  Education
                </div>
                
                <div style={{
                  display: 'grid',
                  gap: '2rem'
                }}>
                  {education.map((edu, index) => (
                    <div key={index} style={{
                      padding: '1.5rem',
                      background: 'rgba(49, 130, 206, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(49, 130, 206, 0.1)'
                    }}>
                      <div className="text-body" style={{
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                        fontSize: '1.05rem'
                      }}>
                        {edu.degree}
                      </div>
                      <div className="text-body" style={{
                        color: 'var(--accent-secondary)',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
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
                <div className="label mb-4">
                  Certifications
                </div>
                
                <div style={{
                  display: 'grid',
                  gap: '1rem'
                }}>
                  {certifications.map((cert, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(49, 130, 206, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(49, 130, 206, 0.1)'
                    }}>
                      <CheckCircle size={20} color="var(--accent-primary)" />
                      <span className="text-body" style={{ 
                        fontSize: '0.95rem',
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
          transform: translateY(40px);
        }
        
        .opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fade-in {
          transition: all 0.8s ease-out;
        }
        
        .animate-delay-1 {
          transition-delay: 0.2s;
        }
        
        .animate-delay-2 {
          transition-delay: 0.4s;
        }
        
        @media (max-width: 1024px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;