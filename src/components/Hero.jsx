import React from "react";
import Button from "./Button";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="text-white hero-div" id="home">
      <div className="overlay">
        <div className="max-w-[800px] mx-auto w-full h-screen text-center flex flex-col justify-center">
          <h1 className="md:text-7xl text-4xl my-4">
            Grant Thornton <br /> Beginner Quest 2024
          </h1>
          <p className="text-xl text-white-500 my-4 neon-text-pink">
            CAPTURE THE FLAG COMPETITION
          </p>
          <ReactTyped
            startDelay={400}
            className="md:text-3xl text-xl my-4 font-semibold"
            strings={["Play\t\tHack\t\tLearn.\t\tRepeat"]}
            typeSpeed={70}
            backSpeed={10}
            loop
          />
          <p className="text-xl text-gray-500 my-10">
            July 5th - July 14th 2024
          </p>
          <div className="flex mx-auto w-full justify-center items-center">

            <Button otherClasses={"bg-white text-black mx-2"}>Register</Button>
            <Button otherClasses={"bg-fuchsia-500 text-white mx-2"}>
          <a href="https://discord.gg/AZKTqTBDmJ">
              Join Discord
          </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
