// ./src/components/Hero.jsx
import { useSpring, animated } from "@react-spring/web";
import ReactPlayer from 'react-player/youtube'
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
            <h1 className="mt-[7rem] text-3xl md:text-5xl font-semibold mb-4 text-white font-rem">
              <span className="text-[#dc228f] text5xl font-bold">$TARS: </span>
              Join the Wildlife Conservation with Tarsier Token
            </h1>
            <p className="text-xl mb-6 text-white leading-relaxed font-rem">
              The world's first meme token dedicated to tarsier protection
              as smallest monkey in the world
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-[2rem]">
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
                Send $TARS
              </a>
            </div>
          </motion.div>
        </div>

        {/* YouTube Player */}
        <div className="md:absolute md:top-1/2 md:right-[10%] md:transform md:-translate-y-1/2">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ZVGeJfPOWC4"
            width={isMobile ? "300px" : "450px"}
            height={isMobile ? "200px" : "300px"}
            controls={true}
            light={true}
            className="z-0"
          />
        </div>



      </div>
      <div className="absolute bottom-[-130px] opacity-[0.5] w-full -z-5 mt-6">
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
