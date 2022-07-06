import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';

const About = () => {
  return (
    <section id="About">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Software Development Internships Completed</small>
            </article>
            <article className='about__card'>
              <IoMdSchool className="about__icon" />
              <h5>Education</h5>
              <small>2nd Year Software Engineering Student</small>
            </article>
            <article className='about__card'>
              <IoMdSchool className="about__icon" />
              <h5>Passion</h5>
              <small>Passionate about software engineering, having completed many personal projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officiis deleniti velit! 
            Minima possimus quisquam odio ipsum soluta beatae, magnam asperiores repellat ab nam totam 
            quia ducimus blanditiis, distinctio aperiam.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About