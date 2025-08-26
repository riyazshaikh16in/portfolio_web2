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
          }, 800);
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
    <section ref={sectionRef} id="skills" className="section" style={{ 
      paddingTop: '8rem', 
      paddingBottom: '8rem',
      background: 'rgba(0, 0, 0, 0.02)'
    }}>
      <div className="container">
        {/* Enhanced Section Header */}
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          marginBottom: '6rem'
        }}>
          <div className="label mb-4">
            Technical Skills
          </div>
          
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            My
            <br />
            <span className="text-gradient">Expertise</span>
          </h2>
          
          <div className="text-body" style={{
            fontSize: '1.2rem',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Mastering cutting-edge technologies and methodologies to deliver exceptional results in automation, testing, and technical leadership.
          </div>
        </div>
        
        {/* Skills Grid - Improved Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '3rem',
          marginBottom: '6rem'
        }}>
          {categories.map((category, categoryIndex) => (
            <div 
              key={category}
              className={`glass-card animate-fade-in animate-delay-${categoryIndex + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                position: 'relative', 
                overflow: 'hidden',
                padding: '3rem'
              }}
            >
              {/* Enhanced Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: `radial-gradient(circle, rgba(49, 130, 206, 0.1) 0%, transparent 70%)`,
                transform: 'translate(50px, -50px)'
              }}></div>
              
              <div className="label mb-4" style={{ 
                position: 'relative', 
                zIndex: 2,
                fontSize: '0.9rem',
                letterSpacing: '0.1em'
              }}>
                {category}
              </div>
              
              <div style={{
                display: 'grid',
                gap: '2rem',
                position: 'relative',
                zIndex: 2
              }}>
                {technicalSkills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => {
                    const skillIndex = technicalSkills.findIndex(s => s.name === skill.name);
                    const isAnimated = animatedSkills.includes(skillIndex);
                    
                    return (
                      <div key={skill.name}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '1rem'
                        }}>
                          <span className="text-body" style={{
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            fontSize: '1.1rem'
                          }}>
                            {skill.name}
                          </span>
                          <span style={{
                            fontSize: '1rem',
                            color: 'var(--accent-secondary)',
                            fontWeight: '700',
                            background: 'rgba(49, 130, 206, 0.1)',
                            padding: '0.25rem 0.8rem',
                            borderRadius: '20px'
                          }}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Enhanced Skill Bar */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50px',
                          height: '10px',
                          overflow: 'hidden',
                          position: 'relative'
                        }}>
                          <div 
                            style={{
                              height: '100%',
                              background: 'var(--accent-gradient)',
                              borderRadius: '50px',
                              transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                              width: isAnimated ? `${skill.level}%` : '0%',
                              position: 'relative',
                              overflow: 'hidden'
                            }}
                          >
                            {/* Shimmer Effect */}
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                              animation: isAnimated ? 'shimmer 2s infinite' : 'none'
                            }}></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Skills Overview */}
        <div className={`glass-card animate-fade-in animate-delay-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '4rem 3rem'
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
          
          <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
            Skill Highlights
          </div>
          
          <div className="text-body" style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            maxWidth: '900px',
            margin: '0 auto 3rem auto',
            position: 'relative',
            zIndex: 2,
            color: 'var(--text-secondary)'
          }}>
            With over 20 years of experience, I specialize in cutting-edge automation technologies, 
            smart meter validation, and technical leadership. My expertise spans from low-level firmware 
            testing to high-level strategic planning, ensuring comprehensive solutions for complex 
            validation challenges across global markets.
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                {technicalSkills.length}+
              </div>
              <div className="text-body" style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                Technical Skills
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                {categories.length}
              </div>
              <div className="text-body" style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                Skill Categories
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
              }}>
                {Math.round(technicalSkills.reduce((acc, skill) => acc + skill.level, 0) / technicalSkills.length)}%
              </div>
              <div className="text-body" style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                Average Proficiency
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
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @media (max-width: 768px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .glass-card {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;