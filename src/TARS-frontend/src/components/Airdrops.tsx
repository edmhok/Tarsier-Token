// ./src/components/Airdrops.tsx

import React, { useState, useEffect } from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { TracingBeam } from "./ui/tracing-beam";
import useMedia from "../hooks/useMedia";

const Airdrops: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";
  const [airdropUsers, setAirdropUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const zealyCommunityLink = "https://zealy.io/cw/tarstarsieriancommunity/questboard?invitationId=nmGKCJg_AtjxNQHYKbUQ_";

  // useEffect(() => {
  //   // Fetch airdrop users data from the backend
  //   const fetchAirdropUsers = async () => {
  //     try {
  //       const response = await fetch("/api/airdrop-users");
  //       const data = await response.json();
  //       setAirdropUsers(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching airdrop users:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchAirdropUsers();
  // }, []);

  return (
    <div className="px-4 py-7 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center text-[#dc228f] mb-8 font-rem pt-[6rem]">
        Airdrop Mechanism
      </h1>
      <TracingBeam>
        <CardContainer >
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 font-rem text-white"
            >
              Objective
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              The Air Drop mechanism aims to distribute Tarsier Token (Tarsier)
              tokens to a wide audience, encouraging initial adoption, community
              building, and engagement. Total Tokens for Air Drop: 9,900,000,000
              Tarsier (10% of the total supply).
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Phase 1: Pre-Launch Registration (Days 1-3)
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Create a dedicated registration portal on the Tarsier Token
                  website.
                </li>
                <li>
                  Participants need to engage join discord, twitterX
                  and Telegram using links and Zealy
                </li>
                <li>
                  Provide a short questionnaire to ensure genuine interest
                  (e.g., "Why do you love Tarsier?").
                </li>
                <li>
                  Implement a "Tarsier Quiz" where participants answer fun trivia
                  questions about Tarsier. Higher scores earn additional Tarsier
                  tokens.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white  font-rem"
            >
              Phase 2: Initial Air Drop (Day 4)
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Distribute 1000 Tarsier to each of the 10,000 whitelisted wallet
                  addresses.
                </li>
                <li>
                  Conduct the distribution via smart contracts to ensure
                  transparency and security.
                </li>
                <li>
                  Encourage recipients to share their Air Drop on social media
                  with hashtags like #TarsierToken and #TarsierLovers. Reward
                  participants with an additional 100 Tarsier for each verified
                  social media post.
                </li>
                <li>
                  Introduce a "Most Creative Post" contest, awarding the top 10
                  posts with 1000 Tarsier each.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Phase 3: Community Engagement (Weeks 2-4)
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Launch a referral program where existing Tarsier holders can
                  refer friends to sign up for the Air Drop. Both the referrer
                  and the referee receive 20 Tarsier each upon successful
                  registration and verification.
                </li>
                <li>
                  Organize community events such as online quizzes, meme
                  contests, and Tarsier-themed photo competitions. Reward winners
                  with varying amounts of Tarsier (e.g., 1000, 2000, and 3000 Tarsier
                  for top three winners).
                </li>
                <li>
                  Introduce a "Tarsier Token Ambassador" program, where active
                  community members can earn monthly rewards for promoting Tarsier
                  Token.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Phase 4: Strategic Partnerships (Months 2-3)
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Partner with wildlife conservation program to distribute Tarsier
                  to their active member. Offer a bonus Air Drop of 100 Tarsier to
                  member who make using Tarsier.
                </li>
                <li>
                  Collaborate with influencers and content creators in the crypto space.
                  Conduct joint giveaways and Air Drops through their platforms to reach a broader audience.
                </li>
                <li>
                  Organize live events and AMA (Ask Me Anything) sessions with
                  influencers to engage their followers.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#dc228f] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Phase 5: Continuous Engagement (Months 4-6)
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4">
                <li>
                  Introduce a staking mechanism where users can stake their
                  Tarsier tokens and earn rewards. Allocate a portion of the Air
                  Drop pool (500,000 Tarsier) for staking rewards over six months.
                </li>
                <li>
                  Collect feedback from the community on the Air Drop process.
                  Make iterative improvements to the Air Drop mechanism based on
                  community suggestions and engagement levels.
                </li>
                <li>
                  Introduce quarterly community feedback sessions with rewards
                  for participants who provide valuable insights.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>



        {/* Zealy Link - Style as needed */}
        <div className="text-center mt-8 p-2">
          <h2 className="pb-4">What are you waiting for?</h2>
          <a href={zealyCommunityLink} className="bg-[#dc228f] text-[#041c32] font-semibold text-xl font-rem md:text-xl hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#dc228f] transition duration-300">
            Join Our Zealy Community!
          </a>
        </div>
      </TracingBeam>


    </div>
  );
};

export default Airdrops;
