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
            Work Experience
          </div>
          
          <h2 className="section-title" style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}>
            Professional
            <br />
            <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Two decades of progressive leadership in automation, validation, and technical innovation.
          </div>
        </div>
        
        {/* Timeline */}
        <div className="timeline-container" style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Timeline Line */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '30px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--accent-gradient)',
            borderRadius: '2px'
          }}></div>
          
          {workExperience.map((job, index) => (
            <div 
              key={index}
              className={`timeline-item animate-fade-in animate-delay-${index + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                position: 'relative',
                marginBottom: index === workExperience.length - 1 ? '0' : '2rem',
                paddingLeft: '80px'
              }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '22px',
                top: '1rem',
                width: '18px',
                height: '18px',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                boxShadow: '0 0 0 4px rgba(49, 130, 206, 0.2)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Briefcase size={10} color="white" />
              </div>
              
              {/* Job Card */}
              <div className="job-card glass-card" style={{ 
                position: 'relative', 
                overflow: 'hidden',
                padding: '1.5rem'
              }}>
                {/* Job Header */}
                <div className="job-header" style={{
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                        lineHeight: '1.3'
                      }}>
                        {job.position}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <Building size={14} color="var(--accent-secondary)" />
                        <span style={{
                          color: 'var(--accent-secondary)',
                          fontWeight: '600',
                          fontSize: '0.95rem'
                        }}>
                          {job.company}
                        </span>
                      </div>
                      
                      <div className="job-meta" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <Calendar size={12} color="var(--text-muted)" />
                          <span className="text-body" style={{ 
                            fontWeight: '500',
                            fontSize: '0.85rem'
                          }}>
                            {job.duration}
                          </span>
                        </div>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <MapPin size={12} color="var(--text-muted)" />
                          <span className="text-body" style={{ 
                            fontWeight: '500',
                            fontSize: '0.85rem'
                          }}>
                            {job.location} • {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    {index === 0 && (
                      <div className="status-badge" style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(49, 130, 206, 0.15)',
                        borderRadius: '20px',
                        border: '1px solid rgba(49, 130, 206, 0.3)'
                      }}>
                        <span style={{
                          fontSize: '0.7rem',
                          color: 'var(--accent-secondary)',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          Current
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Job Description */}
                  <div className="text-body" style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem'
                  }}>
                    {job.description}
                  </div>

                  {/* Special roles for Landis+Gyr */}
                  {job.roles && (
                    <div className="job-roles" style={{ marginBottom: '1rem' }}>
                      <div className="label mb-1" style={{ fontSize: '0.7rem' }}>
                        Key Roles
                      </div>
                      <div style={{
                        display: 'grid',
                        gap: '0.5rem'
                      }}>
                        {job.roles.map((role, roleIndex) => (
                          <div key={roleIndex} style={{
                            padding: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}>
                            <div style={{
                              fontSize: '0.85rem',
                              fontWeight: '600',
                              color: 'var(--accent-secondary)',
                              marginBottom: '0.25rem'
                            }}>
                              {role.title} ({role.period})
                            </div>
                            <div style={{
                              fontSize: '0.8rem',
                              color: 'var(--text-secondary)',
                              lineHeight: '1.4'
                            }}>
                              {role.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Key Achievements */}
                <div className="job-achievements" style={{ 
                  marginBottom: '1rem'
                }}>
                  <div className="label mb-1" style={{ fontSize: '0.7rem' }}>
                    Key Achievements
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gap: '0.5rem'
                  }}>
                    {job.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <div key={achIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        padding: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '6px'
                      }}>
                        <CheckCircle 
                          size={12} 
                          color="var(--accent-primary)" 
                          style={{ marginTop: '0.1rem', flexShrink: 0 }}
                        />
                        <span className="text-body" style={{
                          fontSize: '0.8rem',
                          lineHeight: '1.4',
                          color: 'var(--text-secondary)'
                        }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="job-technologies">
                  <div className="label mb-1" style={{ fontSize: '0.7rem' }}>
                    Technologies & Tools
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} style={{
                        padding: '0.35rem 0.75rem',
                        background: 'rgba(49, 130, 206, 0.1)',
                        borderRadius: '15px',
                        border: '1px solid rgba(49, 130, 206, 0.2)',
                        fontSize: '0.7rem',
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
        
        /* FIXED: Complete mobile responsiveness */
        @media (max-width: 768px) {
          .section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
            min-height: auto !important;
          }
          
          .timeline-item {
            padding-left: 60px !important;
          }
          
          .timeline-dot {
            left: 18px !important;
            width: 14px !important;
            height: 14px !important;
          }
          
          .timeline-line {
            left: 25px !important;
            width: 1px !important;
          }
          
          .job-card {
            padding: 1.5rem !important;
          }
          
          .job-meta {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
          
          .status-badge {
            margin-top: 1rem;
            align-self: flex-start;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 1rem !important;
          }
          
          .timeline-item {
            padding-left: 40px !important;
          }
          
          .timeline-dot {
            left: 12px !important;
            width: 12px !important;
            height: 12px !important;
          }
          
          .timeline-line {
            left: 18px !important;
          }
          
          .job-card {
            padding: 1rem !important;
          }
          
          .job-header h3 {
            font-size: 1rem !important;
          }
          
          .section-title {
            font-size: clamp(1.5rem, 6vw, 2rem) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;