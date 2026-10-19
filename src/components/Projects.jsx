import { useState } from 'react';

function Projects() {

    const handleFilterClick = (e) => {
    const filterValue = e.currentTarget.getAttribute('data-filter');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });

    // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn =>
        btn.classList.remove('active')
        );
        e.currentTarget.classList.add('active');
    };

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Featured Projects</h2>

                <div className="filter-buttons">
                    <button className="filter-btn active" data-filter="all" onClick={handleFilterClick}>All Projects</button>
                    <button className="filter-btn" data-filter="frontend" onClick={handleFilterClick}>Frontend</button>
                    <button className="filter-btn" data-filter="fullstack" onClick={handleFilterClick}>Fullstack</button>
                    <button className="filter-btn" data-filter="design" onClick={handleFilterClick}>Design</button>
                    <button className="filter-btn" data-filter="webapp" onClick={handleFilterClick}>Web app</button>
                </div>

                <div className="projects-grid">
                    <div className="project-card featured" data-category="fullstack">
                        <div className="project-image">
                            <img src="https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App" alt="E-Commerce Platform"/>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href="#" className="project-link">
                                        <span>🔗</span> Live Demo
                                    </a>
                                    <a href="#" className="project-link">
                                        <span>💻</span> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">E-Commerce Platform</h3>
                                <span className="project-category">Full-Stack</span>
                            </div>
                            <p className="project-description">A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.</p>
                            <div className="project-tags">
                                <span className="project-tag">React</span>
                                <span className="project-tag">Node.js</span>
                                <span className="project-tag">MongoDB</span>
                                <span className="project-tag">Stripe</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" data-category="frontend">
                        <div className="project-image">
                            <img src="https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App" alt="Weather Dashboard"/>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href="#" className="project-link">
                                        <span>🔗</span> Live Demo
                                    </a>
                                    <a href="#" className="project-link">
                                        <span>💻</span> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">Weather Dashboard</h3>
                                <span className="project-category">Frontend</span>
                            </div>
                            <p className="project-description">Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.</p>
                            <div className="project-tags">
                                <span className="project-tag">JavaScript</span>
                                <span className="project-tag">CSS3</span>
                                <span className="project-tag">API</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" data-category="webapp">
                        <div className="project-image">
                            <img src="https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager" alt="Task Management App"/>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href="#" className="project-link">
                                        <span>🔗</span> Live Demo
                                    </a>
                                    <a href="#" className="project-link">
                                        <span>💻</span> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">Task Management App</h3>
                                <span className="project-category">Web App</span>
                            </div>
                            <p className="project-description">Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.</p>
                            <div className="project-tags">
                                <span className="project-tag">React</span>
                                <span className="project-tag">TypeScript</span>
                                <span className="project-tag">Firebase</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card" data-category="design">
                        <div className="project-image">
                            <img src="https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site" alt="Portfolio Website"/>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href="#" className="project-link">
                                        <span>🔗</span> Live Demo
                                    </a>
                                    <a href="#" className="project-link">
                                        <span>💻</span> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">Creative Portfolio</h3>
                                <span className="project-category">Design</span>
                            </div>
                            <p className="project-description">Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.</p>
                            <div className="project-tags">
                                <span className="project-tag">HTML5</span>
                                <span className="project-tag">CSS3</span>
                                <span className="project-tag">GSAP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;