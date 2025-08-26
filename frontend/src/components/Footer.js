import React from 'react';
import { Mail, Phone, Linkedin, Github, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData'; // FIXED: Now importing from portfolioData

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // FIXED: Now using data from portfolioData.js instead of hardcoded values
  const socialLinks = [
    { 
      icon: <Mail size={20} />, 
      href: `mailto:${contactInfo.email}`, // FIXED: Using actual email from portfolioData
      label: "Email",
      color: "rgba(49, 130, 206, 0.2)" // FIXED: Professional blue instead of purple
    },
    { 
      icon: <Phone size={20} />, 
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`, // FIXED: Using actual phone from portfolioData
      label: "Phone",
      color: "rgba(66, 153, 225, 0.2)" // FIXED: Professional blue instead of purple
    },
    { 
      icon: <Linkedin size={20} />, 
      href: `https://${contactInfo.linkedin}`, // FIXED: Using actual LinkedIn from portfolioData
      label: "LinkedIn",
      color: "rgba(49, 130, 206, 0.2)" // FIXED: Professional blue instead of purple
    }
    // FIXED: Removed GitHub as it's commented out in portfolioData
    // { 
    //   icon: <Github size={20} />, 
    //   href: contactInfo.github || "https://github.com/technical-expert", 
    //   label: "GitHub",
    //   color: "rgba(66, 153, 225, 0.2)"
    // }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const expertise = [
    "Python Automation (PyATS)",
    "Smart Meter Testing",
    "Firmware Validation",
    "EMI/EMC Compliance",
    "Project Leadership",
    "Team Management"
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 62, 0.95) 100%)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border-glass)',
      padding: '4rem 0 2rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(49, 130, 206, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(66, 153, 225, 0.05) 0%, transparent 50%)
        `, // FIXED: Professional blue instead of purple
        opacity: 0.6
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Section */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {personalInfo.name} {/* FIXED: Using actual name from portfolioData */}
            </div>
            
            <div className="text-body" style={{
              marginBottom: '2rem',
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              {personalInfo.description} {/* FIXED: Using actual description from portfolioData */}
            </div>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="glass-card"
                  style={{
                    width: '50px',
                    height: '50px',
                    padding: '0',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    background: link.color,
                    color: 'var(--accent-secondary)'
                  }}
                  title={link.label}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-4px)';
                    e.target.style.boxShadow = '0 12px 40px rgba(49, 130, 206, 0.3)'; // FIXED: Professional blue instead of purple
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'var(--shadow-glass)';
                  }}
                >
                  {link.icon}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <div className="label mb-3">
              Quick Navigation
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                    fontSize: '1rem',
                    padding: '0.5rem 0',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--accent-secondary)';
                    e.target.style.paddingLeft = '0.5rem';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  <ExternalLink size={14} style={{ opacity: 0.5 }} />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Core Expertise */}
          <div>
            <div className="label mb-3">
              Core Expertise
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {expertise.map((skill, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 0'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: 'var(--accent-primary)',
                    borderRadius: '50%'
                  }}></div>
                  <span className="text-body" style={{ fontSize: '0.95rem' }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact & Availability */}
          <div>
            <div className="label mb-3">
              Contact & Availability
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Mail size={16} color="var(--accent-secondary)" />
                <div>
                  <div className="text-body" style={{ fontSize: '0.9rem' }}>
                    {contactInfo.email} {/* FIXED: Using actual email from portfolioData */}
                  </div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Phone size={16} color="var(--accent-secondary)" />
                <div>
                  <div className="text-body" style={{ fontSize: '0.9rem' }}>
                    {contactInfo.phone} {/* FIXED: Using actual phone from portfolioData */}
                  </div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <MapPin size={16} color="var(--accent-secondary)" />
                <div>
                  <div className="text-body" style={{ fontSize: '0.9rem' }}>
                    {contactInfo.location} • Global Projects {/* FIXED: Using actual location from portfolioData */}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Availability Status */}
            <div className="glass-card" style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              background: 'rgba(49, 130, 206, 0.05)', // FIXED: Professional blue instead of purple
              border: '1px solid rgba(49, 130, 206, 0.2)' // FIXED: Professional blue instead of purple
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  background: 'var(--accent-primary)',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}></div>
                <span className="label" style={{
                  color: 'var(--accent-secondary)',
                  fontSize: '0.75rem'
                }}>
                  Available for Projects
                </span>
              </div>
              
              <div className="text-small">
                Currently accepting consulting, leadership roles, and technical advisory positions
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-glass)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div className="text-body" style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted)'
          }}>
            © {currentYear} {personalInfo.name} Portfolio. Crafted with precision and expertise. {/* FIXED: Using actual name from portfolioData */}
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '0.875rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent-secondary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              Privacy Policy
            </button>
            
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '0.875rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent-secondary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;