import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src="https://videos.pexels.com/video-files/4884242/4884242-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-4xl md:text-6xl mb-8" style={{ fontFamily: 'Courier New, monospace' }}>
          <Typewriter
            options={{
              strings: [
                'your trusted laptop partner',
                'quality repairs and services',
                'get new or refurbrished laptops'
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 60,
            }}
          />
        </div>

        <Link
          to="/services"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          view our services
        </Link>
      </div>
    </div>
  );
}

export default Hero;