import React from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import useMedia from "../hooks/useMedia";

const Features: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="py-2 px-4 sm:px-3 lg:px-2 max-w-6xl mx-auto text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-[#dc228f] mb-8 font-rem"
        >
          Unique Features of Tarsier Token
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-300 font-rem"
        >
          Discover the unique features that make Tarsier Token stand out in the
          cryptocurrency space.
        </motion.p>
      </motion.div>

      <div className="space-y-20">
        {/* Core Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#dc228f] mb-2"
          >
            Core Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem]"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Community-Driven
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    <span className="text-[#dc228f] font-bold font-rem">
                      Tarsier Token $TARS
                    </span>{" "}
                    thrives on the passion and creativity of its community. We believe in the power
                    of collective decision-making and will empower $TARS holders to shape the project's
                    future through decentralized governance.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Conservation-Focused:
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    <span className="text-[#dc228f] font-bold font-rem">
                      Tarsier Token $TARS
                    </span>{" "}
                    is more than just a meme; it's a force for good. A portion of every transaction and proceeds from our NFT
                    sales will be dedicated to protecting the Philippine Tarsier and its habitat.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    ICP Ecosystem Integration:
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    {" "}
                    <span className="text-[#dc228f] font-bold">
                      $TARS
                    </span>{" "}
                    is built on the Internet Computer Protocol (ICP), taking advantage of its speed, scalability, and eco-friendliness. We're committed to exploring
                    innovative ways to integrate $TARS with other projects and platforms within the ICP ecosystem.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    NFT Integration:
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    We're developing a collection of unique, Tarsier-themed NFTs that will not only be fun
                    and collectible but also offer special utility within the {" "}
                    <span className="text-[#dc228f] font-bold">$TARS</span>ecosystem.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Transparency and Security:
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    We prioritize transparency and security in all our operations. Our smart contracts will be audited by reputable firms to ensure the safety of your investments.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Fun and Engaging:
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    <span className="text-[#dc228f] font-bold">$TARS</span>
                    is all about fun! We believe in the power of memes to bring people together and create a vibrant, engaging community. Expect regular contests, giveaways, and other exciting events to keep the $TARS community buzzing.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Growth Potential:
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    As the <span className="text-[#dc228f] font-bold">$TARS</span> community grows, so does the potential value of the token. With a strong
                    foundation, exciting roadmap, and a dedicated community, <span className="text-[#dc228f] font-bold">$TARS</span> is poised for a bright future.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Development Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#dc228f] mb-8 font-rem"
          >
            Development Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Developer Integrations
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Integrate Tarsier Token with{" "}
                    <span className="text-[#dc228f] font-bold">DFINITY's</span>{" "}
                    Internet Computer Protocol for seamless development and
                    deployment of decentralized applications.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Future Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#dc228f] mb-8 font-rem"
          >
            Future Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-[9rem]"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    NFT Marketplace
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Launch an NFT marketplace where users can buy, sell, and
                    trade{" "}
                    <span className="text-[#dc228f] font-bold">TARSIER</span>
                    -themed NFTs, promoting community engagement and creativity.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    DeFi Integrations
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Integrate with decentralized finance (DeFi) platforms to
                    offer staking, lending, and borrowing of{" "}
                    <span className="text-[#dc228f] font-bold">Tarsier</span>{" "}
                    tokens.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Cross-Chain Compatibility
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Ensure cross-chain compatibility with other blockchains like
                    Ethereum and Binance Smart Chain, enabling{" "}
                    <span className="text-[#dc228f] font-bold">Tarsier</span> to
                    be used across multiple platforms.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Advanced Analytics
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Provide advanced analytics and insights for users and
                    developers to track the performance and usage of{" "}
                    <span className="text-[#dc228f] font-bold">TARSIER</span>{" "}
                    tokens.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
