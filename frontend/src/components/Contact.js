import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Clock, CheckCircle, User, Building } from 'lucide-react';
import { contactInfo as contactData, availability } from '../data/portfolioData';

const Contact = () => {
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

  // Contact information using data from portfolioData.js
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: contactData.email,
      link: `mailto:${contactData.email}`,
      color: "rgba(49, 130, 206, 0.2)"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: contactData.phone,
      link: `tel:${contactData.phone.replace(/\s/g, '')}`,
      color: "rgba(66, 153, 225, 0.2)"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: contactData.location,
      link: null,
      color: "rgba(49, 130, 206, 0.2)"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: `https://${contactData.linkedin}`,
      color: "rgba(66, 153, 225, 0.2)"
    }
  ];

  const services = [
    {
      icon: <User size={20} />,
      title: "Consulting & Advisory",
      description: "Strategic guidance on test automation frameworks and validation methodologies",
      availability: "Available"
    },
    {
      icon: <Building size={20} />,
      title: "Project Leadership", 
      description: "Leading complex validation projects across multiple regions and technologies",
      availability: "Available"
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Team Training",
      description: "Upskilling teams on PyATS, automation best practices, and testing methodologies",
      availability: "Available"
    },
    {
      icon: <Clock size={20} />,
      title: "Technical Workshops",
      description: "Conducting workshops on smart meter testing, compliance, and industry standards",
      availability: "Available"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="section"
      style={{ 
        paddingTop: '4rem',
        paddingBottom: '4rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)' 
      }}
    >
      <div className="container">
        {/* Section Header - Compact */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div className="label mb-2">
            Let's Connect
          </div>
          
          <h2 className="section-title" style={{ 
            marginBottom: '1rem',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}>
            Get In
            <br />
            <span className="text-gradient">Touch</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Ready to discuss your next validation project or explore opportunities for collaboration?
          </div>
        </div>
        
        {/* FIXED: Removed send message form, rearranged content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Contact Information - Enhanced */}
          <div className={`animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-card" style={{
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(49, 130, 206, 0.08) 0%, transparent 70%)',
                transform: 'translate(50px, -50px)'
              }}></div>
              
              <div className="label mb-3" style={{ position: 'relative', zIndex: 2 }}>
                Contact Information
              </div>
              
              <div style={{
                display: 'grid',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 2
              }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: info.link ? 'pointer' : 'default',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                  onMouseEnter={(e) => {
                    if (info.link) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(49, 130, 206, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (info.link) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                  >
                    <div style={{
                      padding: '1rem',
                      background: info.color,
                      borderRadius: '12px',
                      color: 'var(--accent-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {info.icon}
                    </div>
                    
                    <div>
                      <div className="label mb-1">
                        {info.label}
                      </div>
                      <div className="text-body" style={{
                        color: 'var(--text-primary)',
                        fontWeight: '600',
                        fontSize: '1rem'
                      }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Services Available - Enhanced */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-card" style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '2rem'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(66, 153, 225, 0.08) 0%, transparent 70%)',
                transform: 'translate(-50px, -50px)'
              }}></div>
              
              <div className="label mb-3" style={{ position: 'relative', zIndex: 2 }}>
                Services Available
              </div>
              
              <div style={{
                display: 'grid',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 2
              }}>
                {services.map((service, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    position: 'relative'
                  }}>
                    {/* Availability Indicator */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'var(--accent-primary)',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite'
                      }}></div>
                      <span style={{
                        fontSize: '0.7rem',
                        color: 'var(--accent-secondary)',
                        fontWeight: '600'
                      }}>
                        {service.availability}
                      </span>
                    </div>
                    
                    <div style={{
                      padding: '0.75rem',
                      background: 'rgba(49, 130, 206, 0.1)',
                      borderRadius: '10px',
                      color: 'var(--accent-secondary)',
                      flexShrink: 0
                    }}>
                      {service.icon}
                    </div>
                    
                    <div>
                      <div className="text-body" style={{
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}>
                        {service.title}
                      </div>
                      <div className="text-body" style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)'
                      }}>
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Contact Information */}
        <div className={`glass-card animate-fade-in animate-delay-3 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          marginTop: '3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '2rem',
          maxWidth: '800px',
          margin: '3rem auto 0 auto'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '100px',
            background: 'radial-gradient(ellipse, rgba(49, 130, 206, 0.1) 0%, transparent 70%)'
          }}></div>
          
          <div className="label mb-2" style={{ position: 'relative', zIndex: 2 }}>
            Response Time
          </div>
          
          <div className="text-body" style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            position: 'relative',
            zIndex: 2,
            color: 'var(--text-secondary)'
          }}>
            I typically respond within <strong style={{ color: 'var(--accent-secondary)' }}>24 hours</strong> during business days. 
            Available for consulting, project leadership, and technical advisory roles across global markets.
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
        
        .animate-delay-3 {
          transition-delay: 0.6s;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @media (max-width: 1024px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;