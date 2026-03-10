import "./App.css";

const projects = [
  {
    title: "Facial Emotion Recognition AI",
    desc: "Deep learning system that predicts human emotions from facial images using PyTorch and CNN architectures.",
    github: "https://github.com/CelalIbrahimli/facial-emotion-recognition-ai",
    live: "https://huggingface.co/spaces/CelalIbrahimli/emotion-detection-ai",
  },
  {
    title: "Letterboxd Couple Recommender",
    desc: "A movie recommendation system that helps users discover films based on shared taste and similarity.",
    github: "https://github.com/CelalIbrahimli",
    live: "https://huggingface.co/celalibr",
  },
  {
    title: "Turbo.az Price Prediction",
    desc: "Machine learning model that predicts car prices using real-world vehicle listing data and feature engineering.",
    github: "https://github.com/CelalIbrahimli",
    live: "https://github.com/CelalIbrahimli",
  },
];

const techStack = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "OpenCV",
  "Docker",
  "Linux",
  "Git",
  "GitHub",
  "React",
  "Vite",
  "Hugging Face",
];

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <div className="logo">Celal Ibrahimli</div>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroContent">
          <div className="heroText">
            <span className="badge">AI Engineer Portfolio</span>
            <h1>
              Building intelligent systems with
              <span> Machine Learning & AI</span>
            </h1>
            <p>
              I am Celal Ibrahimli, an Information Technologies student at UNEC
              focused on Machine Learning, Deep Learning, Computer Vision and
              modern AI systems. I enjoy turning ideas into real products.
            </p>

            <div className="heroButtons">
              <a
                className="btn primary"
                href="https://github.com/CelalIbrahimli"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a
                className="btn secondary"
                href="https://www.linkedin.com/in/celal-ibrahimli-b7a47227b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="heroCard">
            <h3>Current Focus</h3>
            <ul>
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>ML Systems</li>
              <li>LLM Applications</li>
            </ul>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p className="sectionText">
            I work on machine learning and deep learning projects, especially in
            computer vision and practical AI applications. I like building
            models, experimenting with architectures, and deploying useful
            systems people can actually use.
          </p>
        </section>

        <section id="stack" className="section">
          <h2>Tech Stack</h2>
          <div className="stackGrid">
            {techStack.map((item, index) => (
              <span className="stackItem" key={index}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="projectsGrid">
            {projects.map((project, index) => (
              <div className="projectCard" key={index}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="cardButtons">
                  <a
                    className="btn small primary"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn small secondary"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contactGrid">
            <a
              className="contactCard"
              href="https://github.com/CelalIbrahimli"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="contactCard"
              href="https://www.linkedin.com/in/celal-ibrahimli-b7a47227b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="contactCard"
              href="https://huggingface.co/celalibr"
              target="_blank"
              rel="noreferrer"
            >
              Hugging Face
            </a>
            <a
              className="contactCard"
              href="https://www.instagram.com/celaalibr/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Celal Ibrahimli — Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;