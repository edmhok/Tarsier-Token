import React from "react";
import aboutImage from "../../assets/about.svg";

interface BuyProps {
  handleConnectWallet: () => void;
}

const About: React.FC<BuyProps> = ({ handleConnectWallet }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#fff] text-center font-rem">
        About{" "}
        <span className="text-[#dc228f] font-rem font-extrabold">$TARS </span>
        Tarsier Token
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-8">
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#FFDB00] font-rem">
              Our Story
            </h3>
            <p className="mt-4 text-lg text-gray-300 font-rem">
              The Tarsier Token was born from a passion for the world's smallest primate
              and a desire to connect fellow enthusiasts. As dedicated tarsier lovers and
              advocates for wildlife conservation, we envisioned a global community where
              individuals could unite to celebrate, protect, and learn about endangered
              species like tarsiers which is native in the Philippines. This shared passion
              inspired the creation of a unique cryptocurrency that empowers the community to
              make a real difference in wildlife protection and conservation.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-[#FFDB00] font-rem">
              Development
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              Our team is a blend of experienced developers, blockchain specialists, and
              passionate Tarsier advocates. We harnessed the power of the Internet Computer
              (ICP) to construct a secure, scalable, and decentralized foundation
              for the Tarsier Token. By utilizing ICP's cutting-edge technology, we guarantee
              that our transactions are swift, reliable, and have an environmental
              impact.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-[#FFDB00] font-rem">
              Vision
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              Our vision is for the Tarsier Token to become the leading digital currency
              for anyone passionate about tarsiers. Whether you're sharing adorable tarsier
              memes to support wildlife conservation efforts or engaging with local and
              international communities dedicated to protecting these incredible creatures,
              the Tarsier Token is your currency of choice. Together, we can celebrate and
              safeguard these captivating primates in the cutest way possible. Every meme,
              every trade, and every tarsier saved brings us closer to our goal. Share the
              love for tarsiers, share the Tarsier Token, and let's make a meaningful impact!
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={aboutImage} alt="Tarsier" className="w-80 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
