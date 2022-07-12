import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="Projects">
        <h2>Projects</h2>
        <div className="container projects__container">
            <article className="projects__item">
                <div className="projects__header">
                    <h2>Title</h2>
                    <div className="projects__button">
                        <a href="https://github.com" className="btn" target="_blank">GitHub</a>
                    </div>
                    <small>Date</small>
                </div>
                <small>Description</small>
            </article>
            <article className="projects__item">
                <div className="projects__header">
                    <h2>Title</h2>
                    <div className="projects__button">
                        <a href="https://github.com" className="btn" target="_blank">GitHub</a>
                    </div>
                    <small>Date</small>
                </div>
                <small>Description</small>
            </article>
        </div>
    </section>
  )
}

export default Projects