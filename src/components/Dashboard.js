import '../index.css';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Blogposts from '../components/Blogposts';

function Dashboard() {
  return (
    <main className='text-gray-300 bg-zinc-900 font-sans'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Blogposts />
      <Contact />
    </main>
  )
}

export default Dashboard;