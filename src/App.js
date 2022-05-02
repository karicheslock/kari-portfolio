import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Blogpost1 from './components/blogposts/Blogpost1';
import Blogpost2 from './components/blogposts/Blogpost2';
import Blogpost3 from './components/blogposts/Blogpost3';
import Blogpost4 from './components/blogposts/Blogpost4';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/blogpost1' element={<Blogpost1 />} />
        <Route path='/blogpost2' element={<Blogpost2 />} />
        <Route path='/blogpost3' element={<Blogpost3 />} />
        <Route path='/blogpost4' element={<Blogpost4 />} />
      </Routes>
    </Router>
  )
}

export default App;
