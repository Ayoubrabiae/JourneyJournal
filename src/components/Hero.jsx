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
          <img src="https://cdn.discordapp.com/attachments/1059547728369156268/1120353894644580433/85e40f33-f9d5-4c15-b8c4-eb6f35f57c69.jpg" alt="hero-image" loading='lazy' />
          <img src="https://cdn.discordapp.com/attachments/1059547728369156268/1120354471952789564/66b3e58b-1716-405d-9b7f-671ab626f697.jpg" alt="hero-image" loading='lazy' />
          <img src="https://cdn.discordapp.com/attachments/1059547728369156268/1120353204551557170/9f7a5305-5904-459c-bacd-366c6f76fdc6.jpg" alt="hero-image" loading='lazy' />
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
