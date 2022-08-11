import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Subject from './component/Subject';
import Blog from './component/Blog';
import Signup from './component/Signup';
//import Footer from './component/Footer';


function App() {
  return (

    <div>
      <Subject/>
    </div>
   /* <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/subject">Subject</Link>
        <Link to="/about">About</Link>
        <Link to ="/blog">Blog</Link>
        <Link to ="/signup">Sign Up</Link>       
      </nav>
      <Routes>
        <Route exact path="/" elememt={<Home />} />

        <Route path="/subject" elememt={<Subject />} />

        <Route path="/about" elememt={<About />} />
        
        <Route path="/blog" elememt={<Blog />} />

        <Route path="/Signup" elememt={< Signup/>} />
      </Routes>
      <div>
        Footer
      </div>
   </Router>*/ 
  );
}

export default App;
