import React, { useEffect, useState } from 'react'
import './index.scss';
import letter from '../../assets/letter.png'
import { Link } from 'react-router-dom';
import Animatedletter from '../Animatedletter';
import Logo from './Logo';
import Loader from 'react-loaders';
function Home() {

  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['n', 's', 'h', ' ', 'P', 'a', 't', 'e', 'l'];
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    const timeout =  setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);


  return (

    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1 className='line-1 '>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I'</span>
          <span className={`${letterClass} _14`}>m</span>
          <img className="img1" src={letter} alt="developer" />
          <img src={letter} alt="developer" />

          <Animatedletter
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <Animatedletter
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>


        <h2>Frontend/Backend Developer / Instagram / </h2>
        <Link to="/contact" className='flat-button'>Contact Me</Link>
      </div>
      <Logo />
    </div>
    
    
<Loader type="pacman" />
</>
  )
}

export default Home