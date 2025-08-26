import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, CheckCircle, Code, Zap, Award, Rocket } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
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

  const getStatusColor = (status) => {
    if (status.includes('Active') || status.includes('Development')) {
      return 'var(--accent-primary)';
    } else if (status.includes('Delivered')) {
      return '#10b981'; // Green
    }
    return 'var(--text-muted)';
  };

  const getStatusIcon = (status) => {
    if (status.includes('Active') || status.includes('Development')) {
      return <Zap size={16} />;
    } else if (status.includes('Delivered')) {
      return <Award size={16} />;
    }
    return <CheckCircle size={16} />;
  };

  return (
    <section ref={sectionRef} id="projects" className="section" style={{ 
      paddingTop: '8rem', 
      paddingBottom: '8rem',
      background: 'rgba(0, 0, 0, 0.02)'
    }}>
      <div className="container">
        {/* Enhanced Section Header */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '6rem'
        }}>
          <div className="label mb-4">
            Featured Projects
          </div>
          
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Notable
            <br />
            <span className="text-gradient">Achievements</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Transformative projects that showcase innovation, technical excellence, and measurable business impact across global markets.
          </div>
        </div>
        
        {/* Projects Grid - Enhanced Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))',
          gap: '3rem',
          marginBottom: '6rem'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glass-card animate-fade-in animate-delay-${index + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                position: 'relative', 
                overflow: 'hidden',
                padding: '3rem',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(49, 130, 206, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
              }}
            >
              {/* Enhanced Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '250px',
                height: '250px',
                background: `radial-gradient(circle, rgba(${index % 2 === 0 ? '49, 130, 206' : '66, 153, 225'}, 0.08) 0%, transparent 70%)`,
                transform: 'translate(80px, -80px)'
              }}></div>
              
              {/* Project Icon */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                padding: '1rem',
                background: 'rgba(49, 130, 206, 0.15)',
                borderRadius: '50%',
                zIndex: 2
              }}>
                <Rocket size={24} color="var(--accent-secondary)" />
              </div>
              
              {/* Project Header - Improved Layout */}
              <div style={{
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      lineHeight: '1.3'
                    }}>
                      {project.title}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      flexWrap: 'wrap',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(49, 130, 206, 0.15)',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: 'var(--accent-secondary)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {project.category}
                      </span>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Calendar size={16} color="var(--text-muted)" />
                        <span className="text-body" style={{ fontWeight: '500' }}>
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Status Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1.5rem',
                    background: `rgba(${getStatusColor(project.status) === 'var(--accent-primary)' ? '49, 130, 206' : '16, 185, 129'}, 0.15)`,
                    borderRadius: '25px',
                    border: `2px solid rgba(${getStatusColor(project.status) === 'var(--accent-primary)' ? '49, 130, 206' : '16, 185, 129'}, 0.3)`
                  }}>
                    <span style={{ color: getStatusColor(project.status) }}>
                      {getStatusIcon(project.status)}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      color: getStatusColor(project.status),
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Project Description */}
                <div className="text-body" style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem'
                }}>
                  {project.description}
                </div>
              </div>
              
              {/* Technologies - Enhanced Design */}
              <div style={{ 
                marginBottom: '2.5rem', 
                position: 'relative', 
                zIndex: 2 
              }}>
                <div className="label mb-3">
                  Technologies Used
                </div>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      padding: '0.75rem 1.25rem',
                      background: 'rgba(49, 130, 206, 0.1)',
                      borderRadius: '25px',
                      border: '1px solid rgba(49, 130, 206, 0.2)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
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
                      <Code size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Key Highlights - Enhanced Layout */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="label mb-3">
                  Key Highlights
                </div>
                
                <div style={{
                  display: 'grid',
                  gap: '1rem'
                }}>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} style={{
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
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Project Overview */}
        <div className={`glass-card animate-fade-in animate-delay-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
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
            Project Portfolio Impact
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
            These featured projects represent the pinnacle of my technical expertise and leadership capabilities. 
            Each project demonstrates measurable impact, innovative solutions, and successful delivery in 
            complex technical environments. From automation frameworks to large-scale validation projects, 
            these achievements showcase my ability to drive results across diverse technical challenges.
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            maxWidth: '1000px',
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
                {projects.length}+
              </div>
              <div className="text-body" style={{ 
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Featured Projects
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                60%
              </div>
              <div className="text-body" style={{ 
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Efficiency Improvement
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                99.5%
              </div>
              <div className="text-body" style={{ 
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Test Accuracy
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                Global
              </div>
              <div className="text-body" style={{ 
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Market Reach
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
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .glass-card {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;