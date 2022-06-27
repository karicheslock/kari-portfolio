import '../index.css';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Blogposts from '../components/Blogposts';
import {Adsense} from '@ctrl/react-adsense';
import CookieConsent from 'react-cookie-consent';

function Dashboard() {
  return (
    <main className='text-gray-300 bg-zinc-900 font-sans'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Blogposts />
      <Contact />
      <Adsense
        client='ca-pub-7831705014229923'
        slot='2895656225'
      />
      <CookieConsent
        enableDeclineButton
        onDecline={() => {
          alert("nay!");
        }}
      >This website uses cookies to enhance the user experience.</CookieConsent>
    </main>
  )
}

export default Dashboard;