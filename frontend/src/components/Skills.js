import React, { useState, useEffect, useRef } from 'react';
import { technicalSkills } from '../data/portfolioData';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills after a delay
          setTimeout(() => {
            setAnimatedSkills(technicalSkills.map((_, index) => index));
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(technicalSkills.map(skill => skill.category))];

  return (
    <section ref={sectionRef} id="skills" className="section">
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            Technical Skills
          </div>
          
          <h2 className="section-title mb-4">
            My
            <br />
            <span className="text-gradient">Expertise</span>
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem'
        }}>
          {categories.map((category, categoryIndex) => (
            <div 
              key={category}
              className={`glass-card animate-fade-in animate-delay-${categoryIndex + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: `radial-gradient(circle, rgba(49, 130, 206, 0.${Math.random() > 0.5 ? '08' : '06'}) 0%, transparent 70%)`,
                transform: 'translate(40px, -40px)'
              }}></div>
              
              <div className="label mb-3" style={{ position: 'relative', zIndex: 2 }}>
                {category}
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 2
              }}>
                {technicalSkills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <span className="text-body" style={{
                          fontWeight: '600',
                          color: 'var(--text-primary)'
                        }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontSize: '0.875rem',
                          color: 'var(--accent-secondary)',
                          fontWeight: '600'
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: animatedSkills.includes(
                              technicalSkills.findIndex(s => s.name === skill.name)
                            ) ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Overview */}
        <div className={`glass-card animate-fade-in animate-delay-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          marginTop: '3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
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
          
          <div className="label mb-3" style={{ position: 'relative', zIndex: 2 }}>
            Skill Highlights
          </div>
          
          <div className="text-body" style={{
            fontSize: '1.125rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}>
            With over 20 years of experience, I specialize in cutting-edge automation technologies, 
            smart meter validation, and technical leadership. My expertise spans from low-level firmware 
            testing to high-level strategic planning, ensuring comprehensive solutions for complex 
            validation challenges across global markets.
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.25rem'
              }}>
                8+
              </div>
              <div className="text-small">
                Technical Skills
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.25rem'
              }}>
                {categories.length}
              </div>
              <div className="text-small">
                Skill Categories
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '0.25rem'
              }}>
                95%
              </div>
              <div className="text-small">
                Average Proficiency
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

export default Skills;