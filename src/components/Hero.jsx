import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the Font Awesome CSS file
library.add(fas);

export default function Hero() {
  return (
    <section className="hero">
      <div className="container" id='home'>
        <div className="images">
          <img src="../../public/hero-img1.jpg" alt="hero-image" loading='lazy' />
          <img src="../../public/hero-img2.jpg" alt="hero-image" loading='lazy' />
          <img src="../../public/hero-img3.jpg" alt="hero-image" loading='lazy' />
        </div>
        <p className="text">
          Collect moments, not things. Let your journeys become stories,
          and your stories become cherished memories. Welcome to Journey
          Journal, where every step is an adventure worth remembering.
        </p>
        <a href="#browse"><FontAwesomeIcon className='arrow' icon="fa-solid fa-arrow-down" bounce /></a>
      </div>
    </section>
  )
}