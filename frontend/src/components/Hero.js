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
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Enhanced Background Elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '15%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(49, 130, 206, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(66, 153, 225, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite reverse'
      }}></div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '6rem',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Content Side - Better Typography Hierarchy */}
          <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="label mb-4" style={{ fontSize: '0.9rem' }}>
              {personalInfo.welcomeLabel}
            </div>
            
            <h1 className="hero-title" style={{ marginBottom: '1.5rem' }}>
              {personalInfo.name}
            </h1>
            
            <div style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--accent-secondary)',
              marginBottom: '2.5rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {personalInfo.title}
            </div>
            
            <div className="text-body" style={{
              fontSize: '1.3rem',
              lineHeight: '1.8',
              marginBottom: '2rem',
              maxWidth: '90%',
              color: 'var(--text-secondary)'
            }}>
              {personalInfo.description}
            </div>
            
            <div className="text-body" style={{
              fontSize: '1.1rem',
              color: 'var(--accent-light)',
              marginBottom: '3.5rem',
              fontStyle: 'italic',
              fontWeight: '500'
            }}>
              {personalInfo.tagline}
            </div>
            
            {/* Enhanced Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '5rem',
              flexWrap: 'wrap'
            }}>
              <button className="btn-primary" onClick={scrollToContact} style={{
                fontSize: '1.1rem',
                padding: '1.5rem 3rem'
              }}>
                <Mail size={22} />
                Get In Touch
              </button>
              
              <button className="btn-secondary" onClick={scrollToAbout} style={{
                fontSize: '1.1rem',
                padding: '1.5rem 3rem'
              }}>
                <Award size={22} />
                View Experience
              </button>
            </div>
            
            {/* Redesigned Stats - Horizontal Layout */}
            <div style={{
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap'
            }}>
              {stats.map((stat, index) => (
                <div key={index} className={`animate-fade-in animate-delay-${index + 1}`} style={{
                  textAlign: 'left'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: 'var(--accent-primary)',
                    marginBottom: '0.5rem',
                    lineHeight: '1'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.label}
                  </div>
                  <div className="text-small" style={{ color: 'var(--text-muted)' }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Photo Side */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Main Photo Container */}
            <div className="photo-container" style={{
              width: '450px',
              height: '450px',
              position: 'relative',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              padding: '6px',
              boxShadow: '0 25px 80px rgba(49, 130, 206, 0.25)'
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
                
                {/* Enhanced Floating Elements */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  right: '-8%',
                  background: 'var(--accent-gradient)',
                  padding: '1.2rem',
                  borderRadius: '50%',
                  boxShadow: '0 15px 40px rgba(49, 130, 206, 0.4)',
                  animation: 'float 6s ease-in-out infinite'
                }}>
                  <Code size={28} color="white" />
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '-12%',
                  background: 'var(--accent-gradient)',
                  padding: '1.2rem',
                  borderRadius: '50%',
                  boxShadow: '0 15px 40px rgba(66, 153, 225, 0.4)',
                  animation: 'float 8s ease-in-out infinite reverse'
                }}>
                  <Award size={28} color="white" />
                </div>
              </div>
            </div>
            
            {/* Decorative Background Ring */}
            <div style={{
              position: 'absolute',
              width: '550px',
              height: '550px',
              border: '1px solid rgba(49, 130, 206, 0.2)',
              borderRadius: '50%',
              zIndex: -1,
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onClick={scrollToAbout}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        }}
        >
          <div className="text-small" style={{ fontWeight: '500' }}>
            Scroll to explore
          </div>
          <div style={{
            animation: 'bounceEnhanced 2s infinite',
            padding: '0.5rem',
            borderRadius: '50%',
            background: 'rgba(49, 130, 206, 0.1)'
          }}>
            <ArrowDown size={24} color="var(--accent-secondary)" />
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
          transition: all 1s ease-out;
        }
        
        .animate-delay-1 {
          transition-delay: 0.3s;
        }
        
        .animate-delay-2 {
          transition-delay: 0.5s;
        }
        
        .animate-delay-3 {
          transition-delay: 0.7s;
        }
        
        @media (max-width: 1024px) {
          .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 4rem !important;
          }
          
          .photo-container {
            width: 350px !important;
            height: 350px !important;
          }
        }
        
        @media (max-width: 768px) {
          .photo-container {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;