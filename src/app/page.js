"use client"
import { useEffect, useRef } from "react"
import MouseFollower from "mouse-follower";
import gsap from "gsap";


import Showcase from "@/components/home/showcase/showcase";
import Contact from "@/components/home/sections/contact/contact";
import Team from "@/components/home/sections/team/team";
import TechBrand from "@/components/home/sections/techBrand/techBrand";
import Portfolio from "@/components/home/sections/portfolio/portfolio";
import TestimonialsAndBlog from "@/components/home/sections/testimonialsAndBlog/testimonialsAndBlog";
import FooterContact from "@/components/home/sections/footerContact/footerContact";


export default function Home() {
  const isUnmounted = useRef(false);

  useEffect(() => {

    if(isUnmounted.current) return;
      isUnmounted.current = true;

    MouseFollower.registerGSAP(gsap);

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })()


    const cursor = new MouseFollower({
      container: document.body,
      speed: 1
  });

  },[])

  return (
    <main id="home" className="_main">

      <Showcase />

      <Contact />

      <Team />

      <TechBrand />

      <Portfolio />

      <TestimonialsAndBlog />

      <FooterContact />

    </main>
  )
}
