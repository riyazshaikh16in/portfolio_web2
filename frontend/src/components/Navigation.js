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
        {/* FIXED: Logo now shows "Riyaz Shaikh" */}
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
            padding: '0.5rem'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(26, 29, 41, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-glass)',
          borderTop: 'none',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 999
        }}
      >
        <ul style={{ 
          padding: '2rem', 
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1rem',
                  background: activeSection === item.id ? 'rgba(49, 130, 206, 0.1)' : 'transparent',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem'
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .nav-header.scrolled {
          background: rgba(26, 29, 41, 0.95);
          backdrop-filter: blur(20px);
        }

        .nav-link.active {
          color: var(--accent-primary);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;