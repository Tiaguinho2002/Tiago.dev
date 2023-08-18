import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.tsx'
import Main from './pages/main.tsx'
import Footer from './components/footer.tsx'
import './global.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './pages/about.tsx'
import Projects from './pages/projects.tsx'
import Contact from './pages/contact.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
<Router basename='/tiago.dev'>
<React.StrictMode>
    <Header></Header>
    <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
    <Footer></Footer>
  </React.StrictMode>,
</Router>
)
