import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '3rem 0',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#0f172a',
  },
  role: {
    fontSize: '1.25rem',
    color: '#64748b',
    marginBottom: '1.5rem',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  section: {
    marginBottom: '3rem',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1.5rem',
    transition: 'transform 0.2s',
  },
  button: {
    background: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
  }
};

function App() {
  const [projects] = useState([
    {
      title: "E-Commerce Dashboard",
      desc: "A React-based admin dashboard with real-time data visualization.",
      tech: ["React", "Chart.js", "Node.js"]
    },
    {
      title: "Task Manager API",
      desc: "RESTful API built with Express to manage daily tasks and auth.",
      tech: ["Express", "MongoDB", "JWT"]
    },
    {
      title: "Portfolio V1",
      desc: "My first personal website built with vanilla HTML/CSS.",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ]);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.header}>
        <h1 style={styles.name}>Alex Developer</h1>
        <p style={styles.role}>Full Stack Engineer & UI Designer</p>
        <div style={styles.socials}>
          <a href="#" title="GitHub"><Github /></a>
          <a href="#" title="LinkedIn"><Linkedin /></a>
          <a href="mailto:email@example.com" title="Email"><Mail /></a>
        </div>
      </header>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p>
          Hi! I'm a passionate developer building modern web applications. 
          I specialize in the React ecosystem and love solving complex problems 
          with simple, elegant solutions. When I'm not coding, you can find me hiking or reading sci-fi.
        </p>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <h3 style={{marginTop: 0}}>{project.title}</h3>
              <p style={{color: '#64748b', fontSize: '0.9rem'}}>{project.desc}</p>
              <div style={{marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {project.tech.map(t => (
                  <span key={t} style={{background: '#eff6ff', color: '#2563eb', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem'}}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p>Interested in working together? I'm currently open to new opportunities.</p>
        <button style={styles.button}>
          Say Hello
        </button>
      </section>

      <footer style={{textAlign: 'center', color: '#94a3b8', paddingBottom: '2rem'}}>
        <p>&copy; {new Date().getFullYear()} Alex Developer. Built with Vite & React.</p>
      </footer>
    </div>
  )
}

export default App