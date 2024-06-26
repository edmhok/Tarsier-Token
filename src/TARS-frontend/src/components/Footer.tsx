import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
  const zealyCommunityLink = "https://zealy.io/cw/tarstarsieriancommunity/questboard?invitationId=nmGKCJg_AtjxNQHYKbUQ_";

  return (
    <footer className="flex-col items-center justify-center bg-cover bg-center text-center text-white px-4 py-5">
      <div className=" py-[2rem]">
        <h2 className="text-xl font-bold sm:text-5xl text-gray-300">
          Our Community
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
          <a href="https://x.com/tarsians" target="_blank">
            <div className=" flex flex-col items-center justify-center p-1">
              <FaXTwitter color="#dc228f" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Twitter(X)
              </h1>
            </div>
          </a>

          <a href="https://t.me/+8mbNu3iI7-diMmU9" target="_blank">
            <div className=" flex flex-col items-center justify-center p-1">
              <FaTelegram color="#dc228f" size={44} />
              <h1 className="md:font-bold text-sm md:text-lg text-gray-300">
                Telegram
              </h1>
            </div>
          </a>

          <a
            href="https://discord.com/invite/V3cJtysw"
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
            href="https://www.facebook.com/people/Tarsian-MEME-Community/61561461512943/"
            target="_blank"
          >
            <div className=" flex flex-col items-center justify-center p-1">
              <FaFacebook color="#dc228f" size={44} />
              <h1
                className="md:font-bold text-sm md:text-lg text-gray-300"
              >
                Facebook
              </h1>
            </div>
          </a>
        </div>
      </div>
      {/* Zealy Link - Style as needed */}
      <div className="text-center p-2">
        <a href={zealyCommunityLink} className="bg-[#dc228f] text-[#041c32] font-semibold text-md font-rem md:text-sm hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#dc228f] transition duration-300">
          Join Our Zealy Community!
        </a>
      </div>
      <p className="my-4 text-gray-500 text-sm">
        Email Us: tarsierian@gmail.com
      </p>
      <p className="my-4 text-gray-500 text-sm">
        All rights reserved by{" "}
        <a
          href="https://dashboard.internetcomputer.org/canister/i5xtb-aaaaa-aaaam-acrja-cai "
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
