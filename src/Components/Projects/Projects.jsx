import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="Projects">
        <h2>Projects</h2>
        <div className="container projects__container">
            <article className="projects__item">
                <div className="projects__header">
                <h2><a href="https://github.com" target="_blank">Portfolio</a></h2>
                    <small>July 2022</small>
                </div>
                <small>Description</small>
            </article>
            <article className="projects__item">
                <div className="projects__header">
                    <h2><a href="https://github.com" target="_blank">MERN Todo App</a></h2>
                    <small>July 2022</small>
                </div>
                <small>Description</small>
            </article>
        </div>
    </section>
  )
}

export default Projects