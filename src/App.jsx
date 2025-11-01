import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    gsap.fromTo('.balloon', { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: '#page2',
          scroller: 'body',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    gsap.fromTo('.flower', { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: '.flower',
          start: 'top 100%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    gsap.fromTo('.mafia',
      { y: 200, opacity: 0 },
      {
        y: 10,
        opacity: 1,
        duration: 1.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.mafia',
          scroller: 'body',
          start: 'top 60%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        }
      });

    gsap.fromTo('.txt',
      { y: 200, opacity: 0 },
      {
        y: 10,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.txt',
          scroller: 'body',
          start: 'top 60%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        }
      });


  }, []);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <div className="bg-pink-500 w-full min-h-screen bg-[url(https://i.pinimg.com/1200x/35/24/a4/3524a4dd3ec24e76321342f2ed06be8e.jpg)] bg-cover ">


        <div className="flex justify-center">
          <h1 className="text-pink-600 text-8xl font-[tiny5] text-center drop-shadow-[2px_2px_6px_#db2777]">
            Happy <br />
            Birthday
          </h1>
        </div>

        <div className="flex justify-center">
          <h1 className="text-5xl text-pink-600">⋆⭒˚ʚ🍰ɞ｡⋆‧</h1>
        </div>

        <div className="mt-30 flex justify-center">
          <img
            onClick={() => {
              setShow(!show);
              setTimeout(() => setShow(false), 8000);
            }}
            className="active:scale-95 h-max w-max animate-float drop-shadow-[6px_5px_6px_#db2777]"
            src="public/cake.webp"
          />
          {show ? <Fireworks autorun={{ speed: 2 }} /> : ''}
        </div>
      </div>

      <div id="page2" className="bg-[url(https://i.pinimg.com/736x/db/f7/bc/dbf7bc7d3deba7f55c6dff39d146d185.jpg)] w-screen min-h-screen bg-cover">

        <div className="relative h-screen">
          <img className="balloon absolute bottom-15 left-20 w-30 mt-10" src="public/balloon.gif" />
          <img className="balloon absolute bottom-25 w-30 mt-10" src="public/balloon.gif" />
          <img className="balloon absolute bottom-45 right-19 w-30 mt-10" src="public/balloon.gif" />
          <img className="balloon absolute bottom-30 right-2 w-30 mt-10" src="public/balloon.gif" />
          <img className="balloon absolute bottom-60 left-20 w-30 mt-10" src="public/balloon.gif" />
          <div className="flex justify-center items-center">
            <img className="flower w-80 absolute bottom-0" src="public/flower.jpg" />
          </div>
        </div>

      </div>

      <div className="bg-pink-100 w-screen min-h-160 relative border border-transparent">
        <div className="mafia bg-white w-35 overflow-hidden h-35 rounded-[50%] my-10 mx-5 drop-shadow-[2px_2px_6px_#db2777]">
          <img className="object-cover bg-cover h-full w-full" src="public/mafia.png" />
        </div>

        <div className="mafia bg-white overflow-hidden w-35 h-35 rounded-[50%] absolute right-5 top-42 drop-shadow-[2px_2px_6px_#db2777]">
          <img className="object-cover bg-cover h-full w-full" src="public/mafia2.png" />
        </div>

        <div className="mafia bg-white drop-shadow-[2px_2px_6px_#db2777] overflow-hidden w-35 h-35 rounded-[50%] absolute left-5 top-90">
          <img className="object-cover bg-cover h-full w-full" src="public/mafia3.png" />
        </div>

        <h1 className="txt font-[tiny5] drop-shadow-[2px_2px_2px_#db2777] absolute top-15 right-6 text-5xl text-pink-600 rotate-[-25deg]">MAFIA</h1>

        <h1 className="txt font-[tiny5] drop-shadow-[2px_2px_2px_#db2777] absolute top-60 left-10 text-4xl text-pink-600 rotate-25">PITHU <br />BADMOSH</h1>

        <h1 className="txt font-[tiny5] drop-shadow-[2px_2px_2px_#db2777] absolute bottom-35 right-10 text-4xl text-pink-600 rotate-[-24deg]">FOREST <br />HEALER</h1>
      </div>

      <div id="letter" className="bg-linear-to-b from-pink-200 to-white min-h-screen flex justify-center items-center p-6">
        <div className="relative bg-white rounded-2xl shadow-lg max-w-2xl p-10 border-2 border-pink-300 animate-glow">
          <h2 className="text-4xl font-[tiny5] text-pink-600 text-center mb-4">💌 A Letter For You 💌</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-[cursive]">
            Hey Pithu,<br /><br />
            I know this day is special, and I just wanted to remind you that you're even more special.
            From all your chaos to your calm, you light up the world in your own strange, funny, and warm way.
            You’ve got this magic that even glitter can’t compete with — and today, that magic deserves the loudest cheers! 🩷<br /><br />
            So here’s to your laughter, your little weird moments, and your dreams that you never stop chasing.
            <br /><br />— Sanket 😁
          </p>
          <img className="w-30 absolute right-2 -bottom-3 -rotate-3" src="public/letter.png" />
        </div>
      </div>


      <div className='relative flex justify-center items-center bg-pink-100 w-full min-h-screen'>
        <div className="w-70">
          <img
            onClick={() => {
              if (!show2) {
                setShow2(true);

                const song = new Audio('public/song2.mp3');
                song.play();

                song.addEventListener('ended', () => {
                  setShow2(false);
                  setShowImages(false);
                  const cakeImg = document.getElementById('cake');
                  if (cakeImg) cakeImg.src = 'public/bcake.png';
                });

                gsap.to('#cake', { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 });

                setTimeout(() => {
                  const cakeImg = document.getElementById('cake');
                  if (cakeImg) cakeImg.src = 'public/cakecut.png';
                }, 100);

                setTimeout(() => {
                  setShowImages(true);
                }, 1000);
              }
            }}
            id="cake" className="w-full active:scale-95" src="public/bcake.png" />
          {show2 && <Fireworks autorun={{ speed: 2 }} />}
        </div>

        {showImages && (
          <>
          <div className="absolute flex flex-wrap justify-center gap-4 bottom-0 w-full p-4 animate-fadeIn">
            <img
              src="public/dances.gif"
              alt="balloon"
              className="w-45 drop-shadow-xl transition-transform hover:scale-110"
            />
          </div>

          <div className="absolute flex flex-wrap justify-center gap-4 top-0 w-full p-4 animate-fadeIn">
            <img
              src="public/cat.gif"
              alt="balloon"
              className="w-35 drop-shadow-xl transition-transform hover:scale-110"
            />
          </div>
          </>
        )}
      </div>

    </>
  );
};

export default App;
