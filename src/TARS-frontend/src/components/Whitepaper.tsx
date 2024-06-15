import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { TracingBeam } from "./ui/tracing-beam";
import useMedia from "../hooks/useMedia";

const Whitepaper: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const whitepaperAnimation = useSpring({
    from: { transform: "translateY(-300%)" },
    to: { transform: `translateY(${translateYValue})` },
    config: { duration: 1000, delay: 500 },
    reset: true,
  });

  return (
    <div className="bg-[#041c32] py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center text-[#dc228f] mb-8">
        Tarsier Token White Paper
      </h1>
      <TracingBeam>
        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              1. Detailed Description
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Tarsier Token (TARS) is a revolutionary meme Token with a utility
              twist, designed for wildlife lovers around the world. Built on
              the{" "}
              <span className="text-[#dc228f] font-bold">
                Internet Computer (ICP) blockchain
              </span>
              , Tarsier Token aims to become the go-to currency for community activities
              for any environmental protection and wildlife conservation events tickets, appreciation
              or award token, donation token, NFT and Arts. Additionally, TARS serves as a{" "}
              <span className="text-[#dc228f] font-bold">governance token</span>
              , allowing its holders to vote on proposals and changes, ensuring
              the community has a say in its future development.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              2. Story Behind Tarsier Token
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Tarsier Token was conceived by a group of friends who share an
              unwavering support of community events who mandates environment-friendly
              concern activities such as waste management from Waste2Earn.xyz{'https://waste2earn.xyz'}
              Community, NFTDavao.xyz{'https://ntfdavao.xyz'} Community Marketplace of NFT Local Artist. And also to RerDao{'https://rerdao.xyz'}
              Community who initiates Voting and Proposal.&nbsp;
              Their vision is to create a fun, engaging, and valuable token that unites Tarsier enthusiasts
              worldwide. Tarsier Token is not just about cute tarsier Meme token;
              it's about building a global community where every wildlife conservation lover can
              contribute to and benefit from the ecosystem. By purchasing $TARS under Internet Computer
              blockchain, you can help save our smallest monkey in the world, participate in exclusive rewards
              programs, and have a say in the project's direction.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-[50px] border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              3. Roadmap
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#dc228f] font-rem">
                Phase 1: Launch (Days 1-7)
              </strong>
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Day 1: Launch Tarsier Token on the Internet Computer blockchain.
                </li>
                <li>
                  Day 2: Distribute initial tokens to the team, early
                  contributors, and community rewards.
                </li>
                <li>
                  Day 3: List Tarsier Token on major cryptocurrency exchanges.
                </li>
              </ul>
              <strong className="text-[#dc228f]">
                Phase 2: Community Building (Months 1-4)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Month 1: Launch marketing campaigns and social media presence.
                </li>
                <li>
                  Month 2: Partner with local and international wildlife conservation organization
                  to accept Tarsier Token.
                </li>
                <li>
                  Month 3: Implement loyalty programs and rewards for users and
                  businesses.
                </li>
                <li>
                  Month 4: Implement community events tickets as admission token
                </li>
              </ul>
              <strong className="text-[#dc228f]">
                Phase 3: Governance and Development (Months 4-6)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Month 4: Establish decentralized governance structure.</li>
                <li>
                  Month 5: Introduce voting mechanisms for proposals and
                  upgrades.
                </li>
                <li>
                  Month 6: Develop and release additional features based on
                  community feedback.
                </li>
              </ul>
              <strong className="text-[#dc228f]">
                Phase 4: Expansion and Sustainability (Months 7-12)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Month 7: Expand partnerships to more restaurants and food
                  chains globally.
                </li>
                <li>
                  Month 8: Launch eco-friendly initiatives funded by transaction
                  fees.
                </li>
                <li>
                  Month 9-12: Continuously improve the platform, focusing on
                  scalability and user experience.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              4. Tokenomics
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#dc228f] font-rem">Total Supply:</strong>{" "}
              990,990,990,990 $TARS
              <br />
              <br />
              <strong className="text-[#dc228f] font-rem">
                Distribution and Issuance Schedule
              </strong>
              <br />
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  <strong className="text-[#dc228f]">
                    Proof-of-Work PoW Consensus Mechanism:
                  </strong>{" "}
                  Tarsier Token operates on the Internet Computer blockchain,
                  utilizing the PoW consensus mechanism. PoW rewards
                  participants for providing computational resources to the
                  network, contributing to its security and functionality.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    Initial Distribution:
                  </strong>{" "}
                  Genesis Block: Initial distribution of $TARS Tarsier Token:
                  <ul className="list-disc list-inside mt-4 ml-8">
                    <li>
                      Early Contributors and Team: 30% (445,945,945,945.5 $TARS) - Each
                      team member receives: 859,090.91 Tarsier (22,297,297,297.27 $TARS /
                      20)
                    </li>
                    <li>
                      ICP Hubs: 20% (198,198,198,198 $TARS) - Each ICP Hub receives:
                      198,198,198,198 (1,198,198 $TARS / 100000)
                    </li>
                    <li>
                      Community Building and Rewards: 15% (148,648,648,648.50 $TARS)
                    </li>
                    <li>Development Fund: 5% (49,549,549,549.50 $TARS)</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-[#dc228f]">Mining Rewards:</strong>{" "}
                  Participants contribute computational resources to the network
                  and are rewarded with TARS tokens. Mining rewards are
                  distributed to validators based on their contribution to the
                  network's computational work.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-[50px] border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Unique Features
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  <strong className="text-[#dc228f]">
                    Decentralized Governance:
                  </strong>{" "}
                  TARS holders participate in decentralized governance through
                  proposals and voting mechanisms on the Internet Computer.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    Scalability and Security:
                  </strong>{" "}
                  Leveraging the Internet Computer's scalability and security
                  features ensures efficient and secure token operations.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    Community Building and Adoption:
                  </strong>{" "}
                  Develop partnerships with WildLife Conservation and Natural Resources Program to
                  accept TARS as payment for any events and donation. Implement loyalty programs and
                  incentives to encourage adoption and usage of TARS (Tarsier Token) in
                  the community.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    Environmental Sustainability:
                  </strong>{" "}
                  Explore eco-friendly practices for token operations on the
                  Internet Computer, aligning with sustainability initiatives.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              5. Governance and Implementation
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#dc228f]">
                Decentralized Governance:
              </strong>{" "}
              Proposals are submitted and voted on by TARS holders using the
              Internet Computer's governance mechanism.
              <br />
              <br />
              <strong className="text-[#dc228f]">Implementation:</strong>{" "}
              Approved proposals are implemented through smart contracts on the
              Internet Computer, ensuring transparency and efficiency.
            </CardItem>
          </CardBody>
        </CardContainer>
      </TracingBeam>
    </div>
  );
};

export default Whitepaper;
