import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Clock, CheckCircle, User, Building } from 'lucide-react';
import { contactInfo as contactData, availability } from '../data/portfolioData';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  // FIXED: Now using data from portfolioData.js
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
      icon: <User size={24} />,
      title: "Consulting & Advisory",
      description: "Strategic guidance on test automation frameworks and validation methodologies",
      availability: "Available"
    },
    {
      icon: <Building size={24} />,
      title: "Project Leadership", 
      description: "Leading complex validation projects across multiple regions and technologies",
      availability: "Available"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Team Training",
      description: "Upskilling teams on PyATS, automation best practices, and testing methodologies",
      availability: "Available"
    },
    {
      icon: <Clock size={24} />,
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
        paddingTop: '8rem',
        paddingBottom: '8rem',
        backgroundColor: 'rgba(0, 0, 0, 0.1)' 
      }}
    >
      <div className="container">
        {/* Enhanced Section Header */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '6rem'
        }}>
          <div className="label mb-4">
            Let's Connect
          </div>
          
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Get In
            <br />
            <span className="text-gradient">Touch</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Ready to discuss your next validation project or explore opportunities for collaboration? Let's start the conversation.
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Contact Information - Enhanced Layout */}
          <div className={`animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Contact Cards - Better Design */}
            <div style={{
              display: 'grid',
              gap: '1.5rem',
              marginBottom: '4rem'
            }}>
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card" style={{
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: info.link ? 'pointer' : 'default',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => info.link && window.open(info.link, '_blank')}
                onMouseEnter={(e) => {
                  if (info.link) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(49, 130, 206, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (info.link) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
                  }
                }}
                >
                  {/* Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    background: info.color,
                    borderRadius: '50%',
                    transform: 'translate(40px, -40px)',
                    opacity: 0.5
                  }}></div>
                  
                  <div style={{
                    padding: '1.2rem',
                    background: info.color,
                    borderRadius: '16px',
                    color: 'var(--accent-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {info.icon}
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div className="label mb-1">
                      {info.label}
                    </div>
                    <div className="text-body" style={{
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      fontSize: '1.05rem'
                    }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Services Available - Enhanced Design */}
            <div className="glass-card" style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '3rem'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(49, 130, 206, 0.08) 0%, transparent 70%)',
                transform: 'translate(-50px, -50px)'
              }}></div>
              
              <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
                Services Available
              </div>
              
              <div style={{
                display: 'grid',
                gap: '2rem',
                position: 'relative',
                zIndex: 2
              }}>
                {services.map((service, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
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
                        fontSize: '0.75rem',
                        color: 'var(--accent-secondary)',
                        fontWeight: '600'
                      }}>
                        {service.availability}
                      </span>
                    </div>
                    
                    <div style={{
                      padding: '1rem',
                      background: 'rgba(49, 130, 206, 0.1)',
                      borderRadius: '12px',
                      color: 'var(--accent-secondary)',
                      flexShrink: 0
                    }}>
                      {service.icon}
                    </div>
                    
                    <div>
                      <div className="text-body" style={{
                        fontWeight: '600',
                        marginBottom: '0.75rem',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem'
                      }}>
                        {service.title}
                      </div>
                      <div className="text-body" style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
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
          
          {/* Contact Form - Enhanced Design */}
          <div className={`glass-card animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(49, 130, 206, 0.08) 0%, transparent 70%)',
              transform: 'translate(80px, -80px)'
            }}></div>
            
            <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
              Send Message
            </div>
            
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              position: 'relative',
              zIndex: 2
            }}>
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '1rem', fontWeight: '600' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                  style={{ padding: '1.2rem', fontSize: '1rem' }}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '1rem', fontWeight: '600' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@company.com"
                  style={{ padding: '1.2rem', fontSize: '1rem' }}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '1rem', fontWeight: '600' }}>
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your company name"
                  style={{ padding: '1.2rem', fontSize: '1rem' }}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '1rem', fontWeight: '600' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell me about your project or how I can help you achieve your validation goals..."
                  style={{ padding: '1.2rem', fontSize: '1rem', resize: 'vertical' }}
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  padding: '1.5rem 2rem',
                  fontSize: '1.1rem'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid transparent',
                      borderTop: '2px solid currentColor',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
            
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(49, 130, 206, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(49, 130, 206, 0.2)',
              position: 'relative',
              zIndex: 2
            }}>
              <div className="text-body" style={{
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem'
              }}>
                <strong>Response Time:</strong> I typically respond within 24 hours during business days
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
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;