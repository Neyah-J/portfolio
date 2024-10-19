import './App.css';
import Chatbot from './Chatbot'; // Importing the chatbot component

function App() {
  return (
    <>
      <header>
        <h1>Neyah Johnson's Personal Portfolio</h1>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Neyah Johnson, an Information Technology major at Kean University,
          with hands-on experience in technical support, cloud management, and web
          development. I'm passionate about creating efficient solutions, from help
          desk support to building dynamic websites using modern technologies. 
          In addition to my technical skills, I’m an active member of the Girls Who Code club, 
          where I contribute to empowering women in tech.
        </p>
        <p>
          I'm also a part of the Kean Leadership Institute, where I am actively working on developing
          my leadership skills through their comprehensive four-year certification program. This program 
          has provided me with valuable experience in leadership and collaboration, helping me grow 
          as a leader within the Kean University community and beyond.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="project">
          <h3>Innovative Method for Assessing the Attitude of Undecided and Underrepresented Students</h3>
          <p>
            A project developed as part of the GS-LSAMP program in Spring 2023. I created a survey
            to measure the attitudes of undecided and underrepresented students toward Computer Science
            and Information Technology. This project focuses on identifying ways to instruct, retain, and 
            engage students from underrepresented groups.
          </p>
          <p>
            <a href="/neyah-johnson-research-days-poster-template.pdf" target="_blank" rel="noopener noreferrer">
              View Project Poster
            </a>
          </p>
        </div>

        <div className="project">
          <h3>Database System Concepts and Applications</h3>
          <p>
            A project completed at Kean University in Spring 2024. This involved developing a course project website
            with login and search functionality hosted on the Kean University web server. I created employee data
            management tools, with secure login functionality using PHP, SQL, and MySQL databases.
          </p>
          <p>
            <a href="https://obi2.kean.edu/~johnsney@kean.edu/TECH3740/" target="_blank" rel="noopener noreferrer">
              Visit Project Website
            </a>
          </p>
        </div>
      </section>

      <section id="ai">
        <h2>AI Chatbot</h2>
        <p>
          This AI chatbot can help answer basic questions about me and my projects. Type a message to start a conversation with the bot!
        </p>
        <Chatbot /> {/* Chatbot component */}
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" placeholder="Your Name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Your Email" />
          </label>
          <label>
            Message:
            <textarea name="message" placeholder="Your Message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Neyah Johnson. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
