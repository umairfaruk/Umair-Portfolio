"use client"
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import {motion} from "framer-motion"
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png";
import SmileImoji from "@/assets/images/memoji-smile.png";
import { title } from "process";
import CardHeader from "@/components/CardHeader";
import ToolboxItem from "@/components/ToolboxItem";
import { useRef } from "react";

const toolsboxItems = [
  {
    title: "JavaScript",
    IconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    IconType: HTMLIcon,
  },
  {
    title: "CSS3",
    IconType: CSSIcon,
  },
  {
    title: "React",
    IconType: ReactIcon,
  },
  {
    title: "Chrome",
    IconType: ChromeIcon,
  },
  {
    title: "Github",
    IconType: GithubIcon,
  },
];

const hobbiesItems = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "40%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "10%",
    top: "45%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "55%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "70%",
    top: "70%",
  },

];

export const AboutSection = () => {

  const constrainRef = useRef()

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World "
          description="My journey in web development has been driven by a love for design and a commitment to delivering exceptional user experiences."
        />
        <div className=" mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the technologies and tools that I use to craft Digital
              Experience"
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3  lg:col-span-2">
              <CardHeader
                title="My Toobox"
                description="Explore the technologies and tools that I use to craft Digital
              Experience"
                className="px-6 pt-6"
              />
              <ToolboxItem
                toolsboxItems={toolsboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItem
                toolsboxItems={toolsboxItems}
                className="mt-6"
                itemsWrapperClassName=" -translate-x-1/2 animate-move-right [animation-duration:10s]"
              />
            </Card>
          </div>
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px]  flex flex-col  md:col-span-3  lg:col-span-2">
              <CardHeader
                title="Beyond the Code "
                description="Explore my interests and hobbies that fuel my creativity and
              passion."
                className="px-6 py-6"
              />

              <div className="relative flex-1"
              ref={constrainRef}>
                {hobbiesItems.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950 ">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] relative md:col-span-2  lg:col-span-1">
              <Image
                src={MapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s] -z-20"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={SmileImoji}
                  alt="smile memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
