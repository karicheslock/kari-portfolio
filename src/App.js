import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Blogpost1 from './components/blogposts/Blogpost1';
import Blogpost2 from './components/blogposts/Blogpost2';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/blogpost1' element={<Blogpost1 />} />
        <Route path='/blogpost2' element={<Blogpost2 />} />
      </Routes>
    </Router>
  )
}

export default App;
