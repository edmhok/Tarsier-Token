import React from "react";
import logo from "../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [menu, setMenu] = React.useState(false);
  const navigation = useNavigate();

  const nav = (path: string) => {
    setMenu(false);
    navigation(path);
  };

  const handleToggle = () => {
    setMenu(!menu);
  };

  return (
    <nav className="nav-background text-white fixed w-full z-50">
      {/* mobile menu */}
      <div
        className={`flex-col ${menu ? "flex" : "hidden"
          } flex items-center justify-center md:hidden h-screen relative`}
      >
        <div className="absolute top-5 left-10">
          <IoMdClose color="#dc228f" size={44} onClick={() => setMenu(!menu)} />
        </div>
        <div className="flex-col items-center justify-between">
          <div className=" w-full text-gray-600 flex flex-col items-center justify-center gap-12 ">
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/airdrops"
              onClick={() => nav("/airdrops")}
            >
              AIRDROPS
            </Link>

            <div className="bg-gray-300 h-[1px] w-full"></div>
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#f782c6] ease-in duration-150 cursor-pointer"
              to="/features"
              onClick={() => nav("/features")}
            >
              FEATURES
            </Link>

            <div className="bg-gray-300 h-[1px] w-full"></div>
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/whitepaper"
              onClick={() => nav("/whitepaper")}
            >
              WHITEPAPER
            </Link>

            <div className="bg-gray-300 h-[1px] w-full"></div>
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/developer-docs"
              onClick={() => nav("/developer-docs")}
            >
              DOCS
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="w-full text-gray-700 md:text-center text-2xl font-semibold flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10"
            onClick={() => nav("/")}
          />
          <Link to="/" className="font-rem text-[#dc228f]">
            Tarsier Token
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/about"
            >
              About
            </Link>
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/features"
            >
              Features
            </Link>
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/whitepaper"
            >
              Whitepaper
            </Link>
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/airdrops"
            >
              Airdrop
            </Link>
            <Link
              className="mx-4 text-gray-300 font-rem font-semibold hover:text-[#dc228f] ease-in duration-150 cursor-pointer"
              to="/developer-docs"
            >
              Docs
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-end">
          <a
            href="https://discord.com/invite/V3cJtysw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-[1px] border-[#dc228f] rounded-full w-[30px] h-[30px] flex items-center justify-center p-1">
              <FaDiscord color="#dc228f" size={24} />
            </div>
          </a>
          <a href="https://x.com/tarsians" target="_blank" rel="noopener noreferrer">
            <div className="border-[1px] border-[#dc228f] rounded-full w-[30px] h-[30px] flex items-center justify-center p-1">
              <FaXTwitter color="#dc228f" size={24} />
            </div>
          </a>
          <a href="https://t.me/+8mbNu3iI7-diMmU9" target="_blank" rel="noopener noreferrer">
            <div className="border-[1px] cursor-pointer border-[#dc228f] rounded-full w-[30px] h-[30px] flex items-center justify-center p-1">
              <FaTelegram color="#dc228f" size={24} />
            </div>
          </a>
          <a href="https://www.facebook.com/people/Tarsian-MEME-Community/61561461512943/" target="_blank" rel="noopener noreferrer">
            <div className="border-[1px] cursor-pointer border-[#dc228f] rounded-full w-[30px] h-[30px] flex items-center justify-center p-1">
              <FaFacebook color="#dc228f" size={24} />
            </div>
          </a>
        </div>

        <div className="md:hidden flex items-center z-50">
          <motion.button
            onClick={handleToggle}
            className="focus:outline-none flex flex-col items-center justify-center w-10 h-10 relative"
          >
            <motion.div
              initial={{ rotate: 0, y: 0 }}
              animate={{ rotate: menu ? 45 : 0, y: menu ? 8 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-[#dc228f] mb-1"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: menu ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-[#dc228f] mb-1"
            />
            <motion.div
              initial={{ rotate: 0, y: 0 }}
              animate={{ rotate: menu ? -45 : 0, y: menu ? -8 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-[#dc228f]"
            />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;