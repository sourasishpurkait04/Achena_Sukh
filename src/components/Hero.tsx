import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2026-03-26T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218291/Home_page_vdni4x.jpg")',
        }}
        aria-hidden="true"
      />
      {/* Layered overlays for contrast */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl px-4 py-[clamp(4rem,8vh,6rem)] text-center">
          <h1 className="text-[clamp(1.35rem,7vw,2.25rem)] leading-tight sm:text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
            <span className="block sm:inline">Empowering Sundarban,</span>{' '}<span className="block sm:inline">Inspiring Change</span>

          </h1>

          {/* Estd line */}
          <div className="mb-6 text-sm md:text-base font-semibold tracking-widest uppercase text-gray-200/90">
            Achena Sukh | Estd: 22/03/2020
          </div>

          <p className="text-lg md:text-2xl mb-10 text-gray-100/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            A registered nonprofit charitable trust serving Sundarban and West Bengal communities through education, health, relief, dignity, and community development.
            <br />
            Reg no. - IV-190400062/2021
          </p>

          <div className="flex flex-row gap-2 justify-center sm:gap-4">
            <Link
              to="/donation"
              className="inline-flex flex-[0.9] min-w-0 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#b0db9c] px-2 py-3 text-xs text-black sm:flex-none sm:gap-2 sm:px-8 sm:py-4 sm:text-base font-semibold shadow-lg transition
                         hover:bg-white hover:shadow-[0_0_30px_rgba(176,219,156,0.6)]
                         active:scale-[0.99]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Donate Now"
            >
              <span>Donate Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#project-progress-heading"


              className="inline-flex flex-[1.3] min-w-0 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#FFEFD2] px-2 py-3 text-xs text-black sm:flex-none sm:gap-2 sm:px-8 sm:py-4 sm:text-base font-semibold shadow-lg transition
                         hover:bg-[#f5dfb7] active:scale-[0.99]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFEFD2] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Donate for Sundarban"
            >
              <span>Donate for Sundarban</span>
            </a>
          </div>          
        </div>
      </div>

      {/* Subtle vignette corners for readability on wide screens */}
      <div className="pointer-events-none absolute inset-0 ring-0 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" aria-hidden="true" />
    </section>
  );
};

export default Hero;


//updated
