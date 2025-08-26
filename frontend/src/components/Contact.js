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
      color: "rgba(49, 130, 206, 0.2)" // FIXED: Professional blue instead of purple
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: contactData.phone,
      link: `tel:${contactData.phone.replace(/\s/g, '')}`,
      color: "rgba(66, 153, 225, 0.2)" // FIXED: Professional blue instead of purple
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: contactData.location,
      link: null,
      color: "rgba(49, 130, 206, 0.2)" // FIXED: Professional blue instead of purple
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: `https://${contactData.linkedin}`,
      color: "rgba(66, 153, 225, 0.2)" // FIXED: Professional blue instead of purple
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
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
    >
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            Let's Connect
          </div>
          
          <h2 className="section-title mb-4">
            Get In
            <br />
            <span className="text-gradient">Touch</span>
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div className={`animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-body mb-4" style={{
              fontSize: '1.125rem',
              lineHeight: '1.7'
            }}>
              Ready to discuss your next validation project or explore opportunities for collaboration? 
              I'm available for consulting, project leadership, and technical advisory roles across 
              global markets.
            </div>
            
            {/* Contact Cards */}
            <div style={{
              display: 'grid',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card" style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: info.link ? 'pointer' : 'default'
                }}
                onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  {/* Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '80px',
                    height: '80px',
                    background: info.color,
                    borderRadius: '50%',
                    transform: 'translate(30px, -30px)',
                    opacity: 0.3
                  }}></div>
                  
                  <div style={{
                    padding: '1rem',
                    background: info.color,
                    borderRadius: '12px',
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
                      fontWeight: '500'
                    }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Services Available */}
            <div>
              <div className="label mb-3">
                Services Available
              </div>
              
              <div style={{
                display: 'grid',
                gap: '1rem'
              }}>
                {services.map((service, index) => (
                  <div key={index} className="glass-card" style={{
                    padding: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden'
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
                        borderRadius: '50%'
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
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem'
                    }}>
                      <div style={{
                        padding: '0.75rem',
                        background: 'rgba(49, 130, 206, 0.1)', // FIXED: Professional blue instead of purple
                        borderRadius: '8px',
                        color: 'var(--accent-secondary)',
                        flexShrink: 0,
                        marginTop: '0.25rem'
                      }}>
                        {service.icon}
                      </div>
                      
                      <div>
                        <div className="text-body" style={{
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          color: 'var(--text-primary)'
                        }}>
                          {service.title}
                        </div>
                        <div className="text-body" style={{
                          fontSize: '0.9rem'
                        }}>
                          {service.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`glass-card animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(49, 130, 206, 0.1) 0%, transparent 70%)', // FIXED: Professional blue instead of purple
              transform: 'translate(-50px, -50px)'
            }}></div>
            
            <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
              Send Message
            </div>
            
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 2
            }}>
              <div className="form-group">
                <label className="form-label">
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
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
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
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
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
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid transparent',
                      borderTop: '2px solid currentColor',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
            
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: 'rgba(49, 130, 206, 0.05)', // FIXED: Professional blue instead of purple
              borderRadius: '8px',
              border: '1px solid rgba(49, 130, 206, 0.2)', // FIXED: Professional blue instead of purple
              position: 'relative',
              zIndex: 2
            }}>
              <div className="text-small" style={{
                textAlign: 'center',
                color: 'var(--text-secondary)'
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
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;