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
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-8 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              $TARS: The Meme Token with a Heart of Gold (and a Love for Tarsiers!)
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              $TARS isn't just another meme token riding the crypto wave; it's a community-driven movement
              with a passion for fun, conservation, and the incredible potential of the Internet Computer (ICP) blockchain.
              Born from the vibrant meme culture of the internet and inspired by the adorable Philippine Tarsier, $TARS aims
              to bring together crypto enthusiasts, animal lovers, and meme aficionados from around the world. <br />
              {" "}
              <span className="text-[#dc228f] font-bold">What Makes $TARS Unique?</span><br />
              <b style={{ color: '#FFDB00' }}>Tarsier Conservation:</b> We believe in using the power of crypto for good. A portion of every $TARS transaction
              and NFT sale directly supports the conservation of the Philippine Tarsier, a critically endangered primate found
              only in the Philippines. By holding $TARS, you're not just investing in a token; you're investing in the future of
              this amazing creature.<br />
              <b style={{ color: '#FFDB00' }}>Community Governance:</b> The $TARS community is at the heart of everything we do. We believe in decentralized
              decision-making and will empower $TARS holders to shape the project's future through community-driven governance mechanisms.<br />
              <b style={{ color: '#FFDB00' }}>Innovative NFT Ecosystem: </b> Get ready to collect unique, Tarsier-themed NFTs that aren't just digital art.
              These NFTs will unlock special perks, access to exclusive events, and even contribute to Tarsier conservation efforts.<br />
              <b style={{ color: '#FFDB00' }}>Staking Rewards for HODLers:</b> We love our Tarsier HODLers! By staking your $TARS tokens, you'll earn rewards
              and passively grow your holdings while supporting the project's long-term sustainability.<br />
              <b style={{ color: '#FFDB00' }}>Built on ICP: </b>$TARS leverages the cutting-edge technology of the Internet Computer Protocol, enjoying its
              fast, secure, and eco-friendly transactions. We're excited to explore innovative integrations within the ICP ecosystem to bring even more value
              to $TARS holders.<br />
              <b style={{ color: '#FFDB00' }}>Fun and Engaging Community:</b> The $TARS community is a vibrant space where memes, creativity, and conservation
              collide. Expect exciting contests, giveaways, AMAs, and other events that bring us all together.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Story Behind Tarsier Token
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Tarsier Token was conceived by a group of friends who share an
              unwavering support of community events who mandates environment-friendly
              concern activities such as waste management from Waste2Earn
              Community, NFTDavao Community and to RERDao Community.<br />
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
                  Month 4: Organize online events and contests to foster community spirit and increase engagement.
                </li>
              </ul>
              <strong className="text-[#dc228f]">
                Phase 3: NFT Integration and Development (Months 4-6)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Month 4: Explore launching Tarsier-themed NFTs (non-fungible tokens) that
                  provide holders with unique benefits or access to exclusive events.</li>
                <li>
                  Month 5: Implement a staking mechanism to incentivize holding Tarsier
                  tokens and reward long-term supporters.
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
              990 Billion $TARS
              <br />
              <br />
              <strong className="text-[#dc228f] font-rem">
                Distribution and Issuance Schedule
              </strong>
              <br />
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  <strong className="text-[#dc228f]">
                    Community Token Circulation (50%): 495 Billion $TARS
                  </strong>{" "}
                  The majority of $TARS tokens will be distributed to the community through
                  airdrops, staking rewards, and other engagement initiatives. This ensures
                  the community is at the heart of the project.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    Tarsier Protection & Preservation Program (20%): 198 Billion $TARS
                  </strong>{" "}
                  A significant portion of tokens is dedicated to funding initiatives
                  that directly protect and preserve the Philippine Tarsier and its habitat.
                  This demonstrates $TARS' commitment to conservation.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    OG Roles (15%): 148 Billion $TARS
                  </strong>{" "}
                  Early supporters and active community members will be rewarded with OG role tokens,
                  incentivizing long-term participation and growth.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    Development & Integration (10%): 99 Billion $TARS
                  </strong>{" "}
                  These tokens will be used to fund ongoing development, marketing, and partnerships to
                  ensure the project's continued growth and success.
                </li>
                <li>
                  <strong className="text-[#dc228f]">
                    Team Advisors (5%): 49 Billion $TARS
                  </strong>{" "}
                  A small allocation is reserved for advisors who provide valuable guidance and expertise
                  to the $TARS team, ensuring the project's sustainable development.
                </li>

              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-[50px] border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
               Features
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
        </CardContainer> */}
      </TracingBeam>
    </div>
  );
};

export default Whitepaper;
