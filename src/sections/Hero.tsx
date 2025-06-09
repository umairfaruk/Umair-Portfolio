"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { handleClick } from "./Header";

export const HeroSection = () => {

  const handleResumeClick = () => {
    const resumeUrl = "https://drive.google.com/file/d/1i9fC6DNFsuS8ByBYaWSaLi2WRDMkmIM6/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  }



  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]  -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[629px] hero-ring"></div>
        <div className="size-[829px] hero-ring"></div>
        <div className="size-[1029px] hero-ring"></div>
        <div className="size-[1229px] hero-ring"></div>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit={true}
          OrbitDuration="48s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit={true}
          OrbitDuration="46s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={85}
          shouldOrbit={true}
          OrbitDuration="44s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit={true}
          OrbitDuration="42s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit={true}
          OrbitDuration="40s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <StarIcon className="size-9 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit={true}
          OrbitDuration="38s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit={true}
          OrbitDuration="36s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={510}
          rotation={-41}
          shouldOrbit={true}
          OrbitDuration="34s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20 animate-ping" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit={true}
          OrbitDuration="32s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit={true}
          OrbitDuration="30s"
          shouldSpin={true}
          spinDuration="15s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 relative size-2.5 rounded-full">
              <div className="bg-green-500 absolute animate-ping-large inset-0 rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Available for New Role</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Expitional User Experience
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming ideas into user-friendly digital
            experiences. My focus is on creating intuitive interfaces that
            enhance user satisfaction and drive engagement. Let{"'"}s discuss
            your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={() => handleClick({ value: "project" })}
            className="inline-flex items-center gap-2  border border-white/15 px-6 h-12 rounded-lg"
          >
            <span className="font-semibold">Explore My Work</span>
            <span>👋</span>
          </button>
          <button
            onClick={() => handleResumeClick()}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-lg"
          >
            <span className="font-semibold ">Resume</span>
            <div className="bg-slate-700 rounded-md p-1">
              <ArrowDown className="size-4 text-white " />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
