import React, { useState, useEffect, useRef } from 'react';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

const Experience = () => {
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

  return (
    <section ref={sectionRef} id="experience" className="section">
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            Work Experience
          </div>
          
          <h2 className="section-title mb-4">
            Professional
            <br />
            <span className="text-gradient">Journey</span>
          </h2>
        </div>
        
        <div className="timeline">
          {workExperience.map((job, index) => (
            <div 
              key={index}
              className={`timeline-item animate-fade-in animate-delay-${index + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="timeline-dot"></div>
              
              <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  background: `radial-gradient(circle, rgba(${index % 2 === 0 ? '49, 130, 206' : '66, 153, 225'}, 0.08) 0%, transparent 70%)`,
                  transform: 'translate(50px, -50px)'
                }}></div>
                
                {/* Job Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div>
                    <div className="card-title" style={{ marginBottom: '0.5rem' }}>
                      {job.position}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Building size={16} color="var(--accent-secondary)" />
                      <span className="text-body" style={{
                        color: 'var(--accent-secondary)',
                        fontWeight: '600'
                      }}>
                        {job.company}
                      </span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Calendar size={14} color="var(--text-muted)" />
                        <span className="text-small">
                          {job.duration}
                        </span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <MapPin size={14} color="var(--text-muted)" />
                        <span className="text-small">
                          {job.location} • {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(49, 130, 206, 0.1)',
                    borderRadius: '20px',
                    border: '1px solid rgba(49, 130, 206, 0.2)'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent-secondary)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Current
                    </span>
                  </div>
                </div>
                
                {/* Job Description */}
                <div className="text-body" style={{
                  marginBottom: '2rem',
                  fontSize: '1.05rem',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {job.description}
                </div>
                
                {/* Key Achievements */}
                <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
                  <div className="label mb-2">
                    Key Achievements
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {job.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}>
                        <CheckCircle 
                          size={16} 
                          color="var(--accent-primary)" 
                          style={{ marginTop: '0.25rem', flexShrink: 0 }}
                        />
                        <span className="text-body" style={{
                          fontSize: '0.95rem',
                          lineHeight: '1.5'
                        }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="label mb-2">
                    Technologies & Tools
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}>
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(49, 130, 206, 0.1)',
                        borderRadius: '20px',
                        border: '1px solid rgba(49, 130, 206, 0.2)',
                        fontSize: '0.875rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Career Summary */}
        <div className={`glass-card animate-fade-in animate-delay-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          marginTop: '4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '300px',
            height: '150px',
            background: 'radial-gradient(ellipse, rgba(49, 130, 206, 0.1) 0%, transparent 70%)'
          }}></div>
          
          <div className="label mb-3" style={{ position: 'relative', zIndex: 2 }}>
            Career Impact
          </div>
          
          <div className="text-body" style={{
            fontSize: '1.125rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            position: 'relative',
            zIndex: 2
          }}>
            Throughout my career, I've consistently delivered innovative solutions that bridge the gap 
            between complex technical requirements and practical business outcomes. My focus on automation, 
            quality assurance, and team leadership has resulted in measurable improvements across all projects.
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                20+
              </div>
              <div className="text-body" style={{ fontWeight: '600' }}>
                Years of Experience
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                30+
              </div>
              <div className="text-body" style={{ fontWeight: '600' }}>
                Projects Delivered
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
              15+
              </div>
              <div className="text-body" style={{ fontWeight: '600' }}>
                Teams Led
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
        
        .animate-delay-3 {
          transition-delay: 0.3s;
        }
        
        .animate-delay-4 {
          transition-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Experience;