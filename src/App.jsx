import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import EducationSkills from './components/EducationSkills';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <EducationSkills />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '30px',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--glass-border)'
      }}>
        <p>© 2026 Adwaith M. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
