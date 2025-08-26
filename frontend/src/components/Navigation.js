import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems, personalInfo } from '../data/portfolioData';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div 
          className="nav-logo"
          onClick={() => scrollToSection('hero')}
          style={{ cursor: 'pointer' }}
        >
          {personalInfo.name}
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: '1001'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: '0',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 20, 25, 0.98)',
          backdropFilter: 'blur(20px)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ul style={{ 
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          textAlign: 'center',
          padding: 0,
          margin: 0
        }}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <button
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--accent-secondary)';
                  e.target.style.background = 'rgba(49, 130, 206, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)';
                  e.target.style.background = 'none';
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          background: rgba(15, 20, 25, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-glass);
          transition: all 0.3s ease;
        }
        
        .nav-header.scrolled {
          background: rgba(15, 20, 25, 0.95);
          backdrop-filter: blur(20px);
        }

        .nav-link.active {
          color: var(--accent-primary);
        }

        .mobile-nav-link.active {
          color: var(--accent-primary) !important;
        }

        /* FIXED: Mobile navigation responsiveness */
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          .nav-header {
            padding: 1rem 0;
          }
          
          .nav-container {
            padding: 0 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .nav-logo {
            font-size: 1.25rem !important;
          }
          
          .mobile-nav-link {
            font-size: 1.25rem !important;
            padding: 0.75rem 1.5rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;