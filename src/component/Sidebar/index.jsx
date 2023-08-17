import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import React from 'react';
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faContactBook, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
 


function Sidebar() {
  return (
    <div className='nav-bar'>
<Link className='logo' to='/'>
      </Link>
<img src={logo} alt="Logo" />

<nav className='nav'>
<NavLink exact="true" activeclassname="active" to="/">
  <FontAwesomeIcon icon={faHome} color='#ffff' />
</NavLink>
<NavLink exact="true" activeclassname="active" className="about-link" to="/about">
  <FontAwesomeIcon icon={faUser} color='#ffff' />
</NavLink>
<NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
  <FontAwesomeIcon icon={faContactBook} color='#ffff' />
</NavLink>

  
</nav>

<ul>
      <li>
        <a href="https://www.linkedin.com/in/ansh-patel-95086b21b">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ffff' }} />
        </a>
      </li>
      <li>
        <a href="https://github.com/anshp-30304">
          <FontAwesomeIcon icon={faGithub} style={{ color: '#ffff' }} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/the_noob_developer/">
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#ffff' }} />
        </a>
      </li>
    </ul>

     

    </div>
  )
}

export default Sidebar