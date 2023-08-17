import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import anime from 'animejs'
import LogoS from '../../../assets/letter.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .to(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 4,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])


  useEffect(() => {
    const pathToDrawElement = outlineLogoRef.current;
  
    // Get the total length of the path
    const pathLength = pathToDrawElement.getTotalLength();
  
    // Set initial properties
    anime.set(pathToDrawElement, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });
  
    // Animate the drawing of the SVG
    anime({
      targets: pathToDrawElement,
      strokeDashoffset: 0,
      duration: 2000, // 2 seconds
      easing: 'linear',
    });
  }, []);


  
  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
fill="#191919" stroke="none" className='svg-container'>
          <path
            ref={outlineLogoRef}
            d="M2095 4899 c-88 -44 -144 -124 -152 -218 -6 -61 -63 105 672 -1940
            107 -299 195 -553 195 -563 0 -28 -26 -74 -52 -92 -19 -14 -68 -16 -340 -16
            l-318 0 -30 28 c-26 23 -53 96 -204 543 -95 283 -183 533 -194 555 -81 158
            -322 183 -432 44 -21 -26 -187 -444 -572 -1436 -518 -1337 -542 -1402 -542
            -1464 0 -48 6 -78 23 -113 28 -57 96 -119 149 -135 28 -9 179 -12 514 -12
            l474 0 52 26 c78 39 111 84 165 231 26 70 80 218 120 328 66 178 77 202 107
            223 l33 22 724 0 723 0 34 -33 c28 -27 52 -81 152 -350 130 -351 147 -381 238
            -423 l51 -24 493 0 c533 0 523 -1 597 56 20 15 48 53 66 90 59 119 123 -66
            -825 2383 -593 1532 -854 2195 -874 2220 -16 20 -53 48 -83 63 l-54 28 -435
            -1 c-414 0 -437 -1 -475 -20z m915 -156 c25 -24 160 -367 866 -2193 461 -1191
            839 -2178 842 -2195 5 -44 -13 -82 -50 -105 -32 -19 -51 -20 -491 -20 -415 0
            -462 2 -488 17 -36 21 -34 17 -165 367 -59 159 -122 310 -138 334 -20 29 -51
            57 -86 76 l-55 31 -744 3 c-831 3 -805 5 -883 -66 -53 -48 -61 -64 -178 -388
            -56 -153 -108 -293 -116 -309 -31 -66 -24 -65 -523 -65 l-451 0 -37 33 c-30
            28 -36 40 -35 73 0 27 161 454 532 1414 584 1510 548 1430 635 1430 80 0 78 3
            275 -575 97 -286 184 -534 193 -551 24 -46 75 -94 122 -115 36 -17 72 -19 381
            -19 381 0 387 1 457 68 63 60 82 105 81 192 -1 72 -10 100 -196 615 -226 622
            -652 1809 -663 1843 -10 35 13 91 49 113 29 18 54 19 433 19 l403 0 30 -27z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo