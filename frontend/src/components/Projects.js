import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, CheckCircle, Code, Zap, Award } from 'lucide-react';
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
      return <Zap size={14} />;
    } else if (status.includes('Delivered')) {
      return <Award size={14} />;
    }
    return <CheckCircle size={14} />;
  };

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            Featured Projects
          </div>
          
          <h2 className="section-title mb-4">
            Notable
            <br />
            <span className="text-gradient">Achievements</span>
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glass-card animate-fade-in animate-delay-${index + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
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
              
              {/* Project Header */}
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
                    {project.title}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(49, 130, 206, 0.15)',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
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
                      <Calendar size={14} color="var(--text-muted)" />
                      <span className="text-small">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: `rgba(${getStatusColor(project.status).replace('var(--accent-primary)', '49, 130, 206').replace('#10b981', '16, 185, 129')}, 0.1)`,
                  borderRadius: '20px',
                  border: `1px solid rgba(${getStatusColor(project.status).replace('var(--accent-primary)', '49, 130, 206').replace('#10b981', '16, 185, 129')}, 0.2)`
                }}>
                  <span style={{ color: getStatusColor(project.status) }}>
                    {getStatusIcon(project.status)}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: getStatusColor(project.status),
                    fontWeight: '600'
                  }}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Project Description */}
              <div className="text-body" style={{
                marginBottom: '2rem',
                fontSize: '1.05rem',
                lineHeight: '1.6',
                position: 'relative',
                zIndex: 2
              }}>
                {project.description}
              </div>
              
              {/* Technologies */}
              <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
                <div className="label mb-2">
                  Technologies Used
                </div>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(49, 130, 206, 0.1)',
                      borderRadius: '20px',
                      border: '1px solid rgba(49, 130, 206, 0.2)',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Code size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Key Highlights */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="label mb-2">
                  Key Highlights
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} style={{
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
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Overview */}
        <div className={`glass-card animate-fade-in animate-delay-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
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
            Project Portfolio
          </div>
          
          <div className="text-body" style={{
            fontSize: '1.125rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            position: 'relative',
            zIndex: 2
          }}>
            These featured projects represent the pinnacle of my technical expertise and leadership capabilities. 
            Each project demonstrates measurable impact, innovative solutions, and successful delivery in 
            complex technical environments. From automation frameworks to large-scale validation projects, 
            these achievements showcase my ability to drive results across diverse technical challenges.
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
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
                {projects.length}+
              </div>
              <div className="text-body" style={{ fontWeight: '600' }}>
                Featured Projects
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                60%
              </div>
              <div className="text-body" style={{ fontWeight: '600' }}>
                Efficiency Improvement
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                99.5%
              </div>
              <div className="text-body" style={{ fontWeight: '600' }}>
                Test Accuracy
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                Global
              </div>
              <div className="text-body" style={{ fontWeight: '600' }}>
                Market Reach
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

export default Projects;