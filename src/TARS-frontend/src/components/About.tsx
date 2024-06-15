import React from "react";
import aboutImage from "../../public/about.png";

interface BuyProps {
  handleConnectWallet: () => void;
}

const About: React.FC<BuyProps> = ({ handleConnectWallet }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#fff] text-center font-rem">
        About{" "}
        <span className="text-[#c90076] font-rem font-extrabold">$TARS </span>
        Tarsier Token
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-8">
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-500 font-rem">
              Our Story
            </h3>
            <p className="mt-4 text-lg text-gray-300 font-rem">
              Tarsier Token began with a simple yet compelling idea: to unite Tarsier
              enthusiasts worldwide through a unique cryptocurrency. As Tarsier
              lovers for wildife, we recognized the need for a community where
              people could share their love and concern for tiniest monkey known in the world,
              that is one of the endangered species and can be found in the province of Bohol,
              Philippines.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-gray-500 font-rem">
              Development
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              Our team comprises seasoned developers, blockchain experts, and
              Tarsier aficionados. We leveraged the Internet Computer Protocol
              (ICP) to build a secure, scalable, and decentralized platform that
              would serve as the backbone of Tarsier Token. ICP's innovative
              technology ensures that our transactions are fast, reliable, and
              environmentally friendly.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-gray-500 font-rem">
              Vision
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              We aim to become the go-to digital currency for all things Tarsier.
              Whether you're wanna share Tarsier to represent the mandates of WildLife
              Protection Program both local and international community.&nbsp;
              Tarsier Token will be your currency of choice. Join us in celebrating the
              cutiest way to save the species. Every meme, every trade, evert tarsier saved.
              Share Tarsier Meme with Tarsier Token.
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
