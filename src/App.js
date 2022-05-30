import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Blogpost1 from './components/blogposts/Blogpost1';
import Blogpost2 from './components/blogposts/Blogpost2';
import Blogpost3 from './components/blogposts/Blogpost3';
import Blogpost4 from './components/blogposts/Blogpost4';
import Blogpost5 from './components/blogposts/Blogpost5';
import Blogpost6 from './components/blogposts/Blogpost6';
import MailchimpFormContainer from './components/blogposts/MailchimpFormContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/blogpost1' element={<Blogpost1 />} />
        <Route path='/blogpost2' element={<Blogpost2 />} />
        <Route path='/blogpost3' element={<Blogpost3 />} />
        <Route path='/blogpost4' element={<Blogpost4 />} />
        <Route path='/blogpost5' element={<Blogpost5 />} />
        <Route path='/blogpost6' element={<Blogpost6 />} />
        <Route path='/subscribe' element={<MailchimpFormContainer />} />
      </Routes>
    </Router>
  )
}

export default App;
