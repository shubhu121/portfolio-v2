"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import indigoOpenBracket from '@/public/brackets/pink-opening.svg'
import indigoCloseBracket from '@/public/brackets/pink-closing.svg'
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About", 0.75)
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>
        <Image
          src={indigoOpenBracket}
          alt="Project I worked on"
          quality={95}
          className='w-10 h-10'
        />
        <p className="title">About Me</p>
        <Image
          className='w-10 h-10'
          src={indigoCloseBracket}
          alt="Project I worked on"
          quality={95}
        />
      </SectionHeading>

      <p className="mb-3">
      Every soul has its unique superpower, 
      For some, it's the rhythm of Music; 
      For others, it's the thrill of Sports; 
      For me? It's the magic of Computers, weaving code into reality.


        I love building stuff, learning new things, meeting new people. I just love tech in general. So, if you have something cool to build feel free to reach out!!
      </p>

       <p>
        <span className="italic">When I'm not coding</span>, you'll find me immersed in anime, badminton matches, and Free Fire conquests. <span className="font-medium">Learning is my ongoing pleasure</span>, currently focused on delving into the intricate world of backend architecture and the patterns that guide system design. And would you believe it, I'm getting fascinated by product design.
      </p>
    </motion.section >
  );
}