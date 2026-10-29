import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import cake from "/cake.webp";

const publicAsset = (filename) => `${import.meta.env.BASE_URL}${filename}`;
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showImages, setShowImages] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".balloon",
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#page2",
          scroller: "body",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".flower",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".flower",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".mafia",
      { y: 200, opacity: 0 },
      {
        y: 10,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".mafia",
          scroller: "body",
          start: "top 60%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".txt",
      { y: 200, opacity: 0 },
      {
        y: 10,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".txt",
          scroller: "body",
          start: "top 60%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    );
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
            src={cake}
          />
          {show ? <Fireworks autorun={{ speed: 2 }} /> : ""}
        </div>
      </div>

      <div
        id="page2"
        className="bg-[url(https://i.pinimg.com/736x/db/f7/bc/dbf7bc7d3deba7f55c6dff39d146d185.jpg)] w-screen min-h-screen bg-cover"
      >
        <div className="relative h-screen">
          <img
            className="balloon absolute bottom-15 left-20 w-30 mt-10"
            src={publicAsset("balloon.gif")}
          />
          <img
            className="balloon absolute bottom-25 w-30 mt-10"
            src={publicAsset("balloon.gif")}
          />
          <img
            className="balloon absolute bottom-45 right-19 w-30 mt-10"
            src={publicAsset("balloon.gif")}
          />
          <img
            className="balloon absolute bottom-30 right-2 w-30 mt-10"
            src={publicAsset("balloon.gif")}
          />
          <img
            className="balloon absolute bottom-60 left-20 w-30 mt-10"
            src={publicAsset("balloon.gif")}
          />
          <div className="flex justify-center items-center">
            <img
              className="flower w-80 absolute bottom-0"
              src={publicAsset("flower.jpg")}
            />
          </div>
        </div>
      </div>

      <div className="bg-pink-100 w-screen min-h-160 relative border border-transparent">
        <div className="mafia bg-white w-35 overflow-hidden h-35 rounded-[50%] my-10 mx-5 drop-shadow-[2px_2px_6px_#db2777]">
          <img
            className="object-cover bg-cover h-full w-full"
            src={publicAsset("mafia.png")}
          />
        </div>

        <div className="mafia bg-white overflow-hidden w-35 h-35 rounded-[50%] absolute right-5 top-42 drop-shadow-[2px_2px_6px_#db2777]">
          <img
            className="object-cover bg-cover h-full w-full"
            src={publicAsset("mafia2.png")}
          />
        </div>

        <div className="mafia bg-white drop-shadow-[2px_2px_6px_#db2777] overflow-hidden w-35 h-35 rounded-[50%] absolute left-5 top-90">
          <img
            className="object-cover bg-cover h-full w-full"
            src={publicAsset("mafia3.png")}
          />
        </div>

        <h1 className="txt font-[tiny5] drop-shadow-[2px_2px_2px_#db2777] absolute top-15 right-6 text-5xl text-pink-600 rotate-[-25deg]">
          MAFIA
        </h1>

        <h1 className="txt font-[tiny5] drop-shadow-[2px_2px_2px_#db2777] absolute top-60 left-10 text-4xl text-pink-600 rotate-25">
          PITHU <br />
          BADMOSH
        </h1>

        <h1 className="txt font-[tiny5] drop-shadow-[2px_2px_2px_#db2777] absolute bottom-35 right-10 text-4xl text-pink-600 rotate-[-24deg]">
          FOREST <br />
          HEALER
        </h1>
      </div>

      <div
        id="letter"
        className="bg-linear-to-b from-pink-200 to-white min-h-screen flex justify-center items-center p-6"
      >
        <div className="relative bg-white rounded-2xl shadow-lg max-w-2xl p-10 border-2 border-pink-300 animate-glow">
          <h2 className="text-4xl font-[tiny5] text-pink-600 text-center mb-4">
            💌 A Letter For You 💌
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-[cursive]">
            Hey Pithu,
            <br />
            <br />
            I know this day is special, and I just wanted to remind you that
            you're even more special. From all your chaos to your calm, you
            light up the world in your own strange, funny, and warm way. You’ve
            got this magic that even glitter can’t compete with — and today,
            that magic deserves the loudest cheers! 🩷
            <br />
            <br />
            So here’s to your laughter, your little weird moments, and your
            dreams that you never stop chasing.
            <br />
            <br />— Sanket 😁
          </p>
          <img
            className="w-30 absolute right-2 -bottom-3 -rotate-3"
            src={publicAsset("letter.png")}
          />
        </div>
      </div>

      <div className="relative flex justify-center items-center bg-pink-100 w-full min-h-screen">
        <div className="w-70">
          <img
            onClick={() => {
              if (!show2) {
                setShow2(true);

                const song = new Audio(publicAsset("song2.mp3"));
                song.play();

                song.addEventListener("ended", () => {
                  setShow2(false);
                  setShowImages(false);
                  const cakeImg = document.getElementById("cake");
                  if (cakeImg) cakeImg.src = publicAsset("bcake.png");
                });

                gsap.to("#cake", {
                  scale: 1.1,
                  duration: 0.2,
                  yoyo: true,
                  repeat: 1,
                });

                setTimeout(() => {
                  const cakeImg = document.getElementById("cake");
                  if (cakeImg) cakeImg.src = publicAsset("cakecut.png");
                }, 100);

                setTimeout(() => {
                  setShowImages(true);
                }, 1000);
              }
            }}
            id="cake"
            className="w-full active:scale-95"
            src={publicAsset("bcake.png")}
          />
          {show2 && <Fireworks autorun={{ speed: 2 }} />}
        </div>

        {showImages && (
          <>
            <div className="absolute bottom-0 flex w-full flex-wrap justify-center gap-4 p-4 animate-fadeIn">
              <img
                src={publicAsset("dances.gif")}
                alt="Celebration dance"
                className="w-45 drop-shadow-xl transition-transform hover:scale-110"
              />
            </div>

            <div className="absolute top-0 flex w-full flex-wrap justify-center gap-4 p-4 animate-fadeIn">
              <img
                src={publicAsset("cat.gif")}
                alt="Dancing cat"
                className="w-35 drop-shadow-xl transition-transform hover:scale-110"
              />
            </div>
          </>
        )}
      </div>

      {/* NEW PAGE: One more little surprise */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b from-pink-100 via-rose-100 to-purple-200 px-6 py-20 text-center">
        {/* Background decorations */}
        <div className="pointer-events-none absolute left-[12%] top-[18%] text-4xl text-rose-300">
          ✧
        </div>
        <div className="pointer-events-none absolute right-[14%] top-[25%] text-3xl text-pink-400">
          ♡
        </div>
        <div className="pointer-events-none absolute bottom-[18%] left-[20%] text-3xl text-purple-300">
          ✿
        </div>
        <div className="pointer-events-none absolute bottom-[15%] right-[18%] text-4xl text-rose-300">
          ✨
        </div>

        <div className="relative z-10 mx-auto max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500">
            Before you go...
          </p>

          <h2 className="mt-5 font-[tiny5] text-4xl leading-tight text-rose-800 sm:text-6xl">
            One more little surprise ♡
          </h2>

          <p className="mt-5 leading-7 text-rose-800/80">
            You thought this was the end, didn't you? Hehe. I might have one
            more little thing waiting for you. 🎀
          </p>

          {/* Mystery gift */}
          <button
            type="button"
            onClick={() => setShowNext(true)}
            className="group mx-auto mt-10 flex h-36 w-36 items-center justify-center rounded-3xl border-2 border-white bg-white/60 text-7xl shadow-xl shadow-rose-300/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:rotate-3 hover:scale-105"
            aria-label="Open your mystery gift"
          >
            <span className="transition-transform group-hover:scale-110">
              {showNext ? "💌" : "🎁"}
            </span>
          </button>

          <p className="mt-4 text-sm italic text-rose-600">
            {showNext
              ? "Hehe, I knew you'd open it. 🥹"
              : "There's something inside... tap to open ♡"}
          </p>

          {showNext && (
            <div className="mt-8 animate-fadeIn rounded-3xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur-md">
              <h3 className="font-serif text-2xl text-rose-900">
                A whole new world awaits! 💗
              </h3>

              <p className="mt-3 text-sm leading-6 text-rose-800/80">
                Remember this little place? I made you something new this year.
                More surprises, more memories, and a little more magic.
              </p>

              <a
                href=" http://localhost:5174/"
                target="_blank"
                className="mt-6 inline-block rounded-full bg-rose-500 px-7 py-3 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-rose-600"
              >
                Discover your new surprise ♡ →
              </a>
            </div>
          )}
        </div>

        <p className="absolute bottom-5 text-xs text-rose-400">
          Made with love, again. ♡
        </p>
      </section>
    </>
  );
};

export default App;
