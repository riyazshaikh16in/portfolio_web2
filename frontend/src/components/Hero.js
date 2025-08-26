import React, { useState, useEffect } from 'react';
import { Download, Mail, ArrowDown, Award, Code } from 'lucide-react';
import { personalInfo, contactInfo, stats } from '../data/portfolioData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="section" 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(49, 130, 206, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(66, 153, 225, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Content Side */}
          <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="label mb-2">
              {personalInfo.welcomeLabel}
            </div>
            
            <h1 className="hero-title">
              {personalInfo.name}
            </h1>
            
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--accent-secondary)',
              marginBottom: '2rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {personalInfo.title}
            </div>
            
            <div className="text-body" style={{
              fontSize: '1.25rem',
              lineHeight: '1.6',
              marginBottom: '3rem',
              maxWidth: '600px'
            }}>
              {personalInfo.description}
            </div>
            
            <div className="text-body" style={{
              fontSize: '1.1rem',
              color: 'var(--accent-light)',
              marginBottom: '3rem',
              fontStyle: 'italic'
            }}>
              {personalInfo.tagline}
            </div>
            
            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '4rem',
              flexWrap: 'wrap'
            }}>
              <button className="btn-primary" onClick={scrollToContact}>
                <Mail size={20} />
                Get In Touch
              </button>
              
              <button className="btn-secondary" onClick={scrollToAbout}>
                <Award size={20} />
                View Experience
              </button>
            </div>
            
            {/* Stats */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card animate-fade-in animate-delay-${index + 1}`}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--accent-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.label}
                  </div>
                  <div className="text-small">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Photo Side */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="photo-container" style={{
              width: '400px',
              height: '400px',
              position: 'relative',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              padding: '8px',
              boxShadow: '0 20px 60px rgba(49, 130, 206, 0.3)'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                background: 'var(--bg-card)',
                backdropFilter: 'var(--blur-md)'
              }}>
                <img 
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
                
                {/* Floating Icons */}
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  right: '-10%',
                  background: 'var(--accent-gradient)',
                  padding: '1rem',
                  borderRadius: '50%',
                  boxShadow: '0 10px 30px rgba(49, 130, 206, 0.4)',
                  animation: 'float 4s ease-in-out infinite'
                }}>
                  <Code size={24} color="white" />
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '-15%',
                  background: 'var(--accent-gradient)',
                  padding: '1rem',
                  borderRadius: '50%',
                  boxShadow: '0 10px 30px rgba(66, 153, 225, 0.4)',
                  animation: 'float 5s ease-in-out infinite reverse'
                }}>
                  <Award size={24} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer'
        }}
        onClick={scrollToAbout}
        >
          <div className="text-small">
            Scroll to explore
          </div>
          <div style={{
            animation: 'bounceEnhanced 2s infinite'
          }}>
            <ArrowDown size={20} color="var(--accent-secondary)" />
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
      `}</style>
    </section>
  );
};

export default Hero;