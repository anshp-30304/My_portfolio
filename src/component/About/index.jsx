import React from 'react';
import './index.scss';
import { useState, useEffect } from 'react';
import Animatedletter from '../Animatedletter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

function About() {

  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timeout =  setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
      // Clean up the timeout when the component unmounts or when the effect is re-run
  return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className='container about-page'>
      <div className="text-zone">
        <h1>
          <Animatedletter
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
            />

        </h1>


        <p className='p1'>I'm a very ambitious front-end developer searching for a position at a reputable IT firm where I can use the newest technology on difficult and varied projects.
        </p>
        <p className='p2'>
          I have a peaceful sense of assurance, am innately interested, and am constantly trying to get better at design by solving one design challenge at a time.
        </p>
        <p className='p3'>
          If I had to sum up who I am in one word, I'd say that I'm a tech nerd, a sports lover, a bored student</p>

      </div>
<div className="stage-cube-cont">

  <div className="cubespinner">
    <div className="face1">
      <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
    </div>
    <div className="face2">
      <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
    </div>
    <div className="face3">
      <FontAwesomeIcon icon={faJs} color='#EFD81D'/>
    </div>
    <div className="face4">
      <FontAwesomeIcon icon={faReact} color='#5eD4F4'/>
    </div>
    <div className="face5">
      <FontAwesomeIcon icon={faPhp} color='#8993be'/>
    </div>
    <div className="face6">
      <FontAwesomeIcon icon={faGit} color='#EC4328'/>
    </div>
  </div>
</div>
    </div>

<Loader type="pacman" />

            </>
  )
}

export default About