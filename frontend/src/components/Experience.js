import React, { useState, useEffect, useRef } from 'react';
import { Building, Calendar, MapPin, CheckCircle, Briefcase } from 'lucide-react';
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
    <section ref={sectionRef} id="experience" className="section" style={{ 
      paddingTop: '8rem', 
      paddingBottom: '8rem' 
    }}>
      <div className="container">
        {/* Enhanced Section Header */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '6rem'
        }}>
          <div className="label mb-4">
            Work Experience
          </div>
          
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Professional
            <br />
            <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Two decades of progressive leadership in automation, validation, and technical innovation across global markets.
          </div>
        </div>
        
        {/* Enhanced Timeline */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '50px',
            top: '0',
            bottom: '0',
            width: '3px',
            background: 'var(--accent-gradient)',
            borderRadius: '2px'
          }}></div>
          
          {workExperience.map((job, index) => (
            <div 
              key={index}
              className={`animate-fade-in animate-delay-${index + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                position: 'relative',
                marginBottom: '4rem',
                paddingLeft: '120px'
              }}
            >
              {/* Enhanced Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '38px',
                top: '2rem',
                width: '28px',
                height: '28px',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                boxShadow: '0 0 0 6px rgba(49, 130, 206, 0.2)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Briefcase size={14} color="white" />
              </div>
              
              {/* Job Card - Enhanced Design */}
              <div className="glass-card" style={{ 
                position: 'relative', 
                overflow: 'hidden',
                padding: '3rem'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, rgba(${index % 2 === 0 ? '49, 130, 206' : '66, 153, 225'}, 0.06) 0%, transparent 70%)`,
                  transform: 'translate(70px, -70px)'
                }}></div>
                
                {/* Job Header - Improved Layout */}
                <div style={{
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                        lineHeight: '1.3'
                      }}>
                        {job.position}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem'
                      }}>
                        <Building size={18} color="var(--accent-secondary)" />
                        <span style={{
                          color: 'var(--accent-secondary)',
                          fontWeight: '600',
                          fontSize: '1.1rem'
                        }}>
                          {job.company}
                        </span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <Calendar size={16} color="var(--text-muted)" />
                          <span className="text-body" style={{ fontWeight: '500' }}>
                            {job.duration}
                          </span>
                        </div>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <MapPin size={16} color="var(--text-muted)" />
                          <span className="text-body" style={{ fontWeight: '500' }}>
                            {job.location} • {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div style={{
                      padding: '0.75rem 1.5rem',
                      background: 'rgba(49, 130, 206, 0.15)',
                      borderRadius: '25px',
                      border: '2px solid rgba(49, 130, 206, 0.3)'
                    }}>
                      <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--accent-secondary)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {index === 0 ? 'Current' : 'Previous'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Job Description */}
                  <div className="text-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                  }}>
                    {job.description}
                  </div>
                </div>
                
                {/* Key Achievements - Better Spacing */}
                <div style={{ 
                  marginBottom: '2.5rem', 
                  position: 'relative', 
                  zIndex: 2 
                }}>
                  <div className="label mb-3">
                    Key Achievements
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gap: '1rem'
                  }}>
                    {job.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}>
                        <CheckCircle 
                          size={18} 
                          color="var(--accent-primary)" 
                          style={{ marginTop: '0.2rem', flexShrink: 0 }}
                        />
                        <span className="text-body" style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)'
                        }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies - Enhanced Layout */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="label mb-3">
                    Technologies & Tools
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} style={{
                        padding: '0.75rem 1.25rem',
                        background: 'rgba(49, 130, 206, 0.1)',
                        borderRadius: '25px',
                        border: '1px solid rgba(49, 130, 206, 0.2)',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(49, 130, 206, 0.2)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(49, 130, 206, 0.1)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Career Summary - Enhanced */}
        <div className={`glass-card animate-fade-in animate-delay-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          marginTop: '6rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '4rem 3rem'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(49, 130, 206, 0.1) 0%, transparent 70%)'
          }}></div>
          
          <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
            Career Impact
          </div>
          
          <div className="text-body" style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            maxWidth: '900px',
            margin: '0 auto 3rem auto',
            position: 'relative',
            zIndex: 2,
            color: 'var(--text-secondary)'
          }}>
            Throughout my career, I've consistently delivered innovative solutions that bridge the gap 
            between complex technical requirements and practical business outcomes. My focus on automation, 
            quality assurance, and team leadership has resulted in measurable improvements across all projects.
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                20+
              </div>
              <div className="text-body" style={{ 
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Years of Experience
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                30+
              </div>
              <div className="text-body" style={{ 
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Projects Delivered
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                15+
              </div>
              <div className="text-body" style={{ 
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Teams Led
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
        
        .animate-delay-3 {
          transition-delay: 0.6s;
        }
        
        .animate-delay-4 {
          transition-delay: 0.8s;
        }
        
        @media (max-width: 768px) {
          .container > div:nth-child(2) > div {
            padding-left: 80px !important;
          }
          
          .container > div:nth-child(2) > div > div:first-child {
            left: 30px !important;
            width: 20px !important;
            height: 20px !important;
          }
          
          .container > div:nth-child(2)::before {
            left: 40px !important;
            width: 2px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;