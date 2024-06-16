// ./src/components/Hero.jsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaArrowDown } from "react-icons/fa";
import tars from "../../assets/images/hero.png";
import useMedia from "../hooks/useMedia";
import { motion } from "framer-motion";
import tarBack from "../../assets/tars-bckgnd.png";

type HeroProps = {
  handleConnectWallet: () => void;
};

const Hero = ({ handleConnectWallet }: HeroProps) => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const tarsAnimation = useSpring({
    from: { transform: "translateY(-300%)" },
    to: { transform: `translateY(${translateYValue})` },
    config: { duration: 1000, delay: 500 },
    reset: true,
  });

  const textVariants = {
    initial: {
      x: -100,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },

  };
  const sliderVariants = {
    initial: {
      x: 500,
    },
    animate: {
      x: "-500%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="h-screen flex items-center justify-center mb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl font-semibold mb-4 text-white font-rem">
              <span className="text-[#dc228f] text5xl font-bold">$TARS: </span>
              Join the Wildlife Conservation with Tarsier Token
            </h1>
            <p className="text-xl mb-6 text-white leading-relaxed font-rem">
              The world's first meme token dedicated to tarsier protection
              as smallest monkey in the world
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <button
                className="bg-[#dc228f] text-[#041c32] font-semibold text-lg font-rem md:text-xl hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#dc228f] transition duration-300"
                onClick={handleConnectWallet}
              >
                Buy $TARS
              </button>
              <a
                href="https://icpex.org/wallet"
                target="_blank"
                className="bg-[#041c32] text-[#dc228f] text-center font-semibold text-lg font-rem md:text-xl hover:text-black py-2 px-4 rounded-lg hover:bg-[#dc228f] border-2 border-[#dc228f] transition duration-300"
              >
                Swap on ICPex
              </a>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <animated.div style={tarsAnimation} className="absolute top-0 z-10">
            <img
              src={tars}
              alt="Tarsier"
              className="w-64 h-64 md:w-80 md:h-80 md:z-10"
            />
          </animated.div>
        </div>
      </div>
      <div className="absolute bottom-[-120px] opacity-[0.5] w-full -z-4 mt-5">
        <motion.div
          className="slidingContainer"
          initial="active"
          animate="animate"
        >
          <img src={tarBack} alt="backgrnd" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
