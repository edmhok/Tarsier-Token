import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="relative h-80 flex items-center justify-center bg-cover bg-center text-center text-white px-4">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold sm:text-5xl text-gray-300">
          Join Our Socials
        </h2>
        <div className="flex items-center gap-4 w-full justify-center">
          {/* <a
            href="https://oc.app/"
            target="_blank"
          >
            <div className="flex flex-col items-center justify-center p-1">
              <HiChatAlt2 color="#dc228f" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                OpenChat
              </h1>
            </div>
          </a> */}
          <a href="https://x.com/Tarsierian" target="_blank">
            <div className=" flex flex-col items-center justify-center p-1">
              <FaTwitter color="#dc228f" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Twitter(X)
              </h1>
            </div>
          </a>

          <a href="https://t.me/tarsiertoken" target="_blank">
            <div className=" flex flex-col items-center justify-center p-1">
              <FaTelegram color="#dc228f" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Telegram
              </h1>
            </div>
          </a>

          <a
            href="https://discord.gg/WHWVKzvW"
            target="_blank"
          >
            <div className=" flex flex-col items-center justify-center p-1">
              <FaDiscord color="#dc228f" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Discord
              </h1>
            </div>
          </a>

          <a
            href="https://www.instagram.com/tarsierian"
            target="_blank"
          >
            <div className=" flex flex-col items-center justify-center p-1">
              <FaSquareInstagram color="#dc228f" size={44} />
              <h1
                className="md:font-bold text-sm md:text-lg
   text-gray-300"
              >
                Instagram
              </h1>
            </div>
          </a>
        </div>
      </div>

      <p className="mt-2 absolute bottom-0 text-gray-500 text-sm mb-2">
        All rights reserved by{" "}
        <a
          href="https://dashboard.internetcomputer.org/canister/"
          className="text-[#dc228f] font-bold"
        >
          $TARS
        </a>{" "}
        © 2024 TARSIER TOKEN
      </p>
    </footer>
  );
};

export default Footer;
