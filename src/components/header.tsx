import { Link } from 'react-router-dom'
import './header.css'


function Header() {

    return (
      <header className='Header'>
        <a href="#" className='name'>Tiago S.</a>

        <div className='nav'>
            
            <ul className='nav-items'>
                <li>
                    <Link to="/">Inicio</Link> 
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="https://drive.google.com/file/d/1h3IE-bQrp1tZyezSjn_BVlMSatDqnsbr/view">CV</Link>
                </li>
                <li>
                    <Link to="/projects">Projetos</Link>
                </li>
                <li>
                    <Link to="/contacts">Contato</Link>
                </li>
            </ul>           
      
      </div>
      </header>
      
    )
  }
  
  export default Header
  