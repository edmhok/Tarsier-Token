import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import icpImage from "../../assets/phase1.png";
import prelaunch from "../../assets/phase2.png";
import launch from "../../assets/phase3.png";
import postLaunch from "../../assets/phase4.png";
import finalImage from "../../assets/phase5.png";

export default function Roadmap() {
  return (
    <div className="pt-[90px]">
      <TracingBeam className="px-3">
        <h1 className="text-4xl font-bold text-[#dc228f] text-center font-rem my-4">
          $TARS Token Roadmap
        </h1>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2
                className={`rounded-full text-sm w-fit px-4 py-1 mb-4 font-rem ${item.badge === "Done" ? "bg-[#dcc322] text-black" : "bg-gray-700 text-white"}`}
              >
                {item.badge}
              </h2>

              <p className={twMerge("font-rem text-xl mb-4 text-gray-300")}>
                {item.title}
              </p>

              <div className="text-sm text-gray-100 prose prose-sm dark:prose-invert ">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="roadmap thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Phase 1: Concept and Immediate Development (Q3 2024)",
    description: (
      <>
        <ul className="font-rem text-gray-300 leading-relaxed">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Tarsier Token Creation:
            </span>{" "}
            Develop the Tarsier Token smart contract on the ICP blockchain, adhering to ICP's ICRC-2 token standards
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">Branding and Identity:</span>{" "}
            Design a captivating Tarsier-themed logo, website, and social media presence.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              White Paper Draft:
            </span>{" "}
            Write a concise, 1-2 page white paper detailing the vision, mission,
            and basic technical aspects of Tarsier Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Smart Contract Development:
            </span>{" "}
            Develop and test the basic smart contracts for Tarsier Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Community Setup:
            </span>{" "}
            Create social media profiles on Twitter, Discord, and Telegram to
            start building a community and generating buzz.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Token Allocation Plan:
            </span>{" "}
            Outline and finalize the tokenomics, including total supply,
            distribution, and initial allocation.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Initial Token Distribution Setup:
            </span>{" "}
            Airdrop a portion of tokens to early supporters.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Website Creation:
            </span>{" "}
            Launch a simple, attractive website with the white paper, roadmap,
            and links to community platforms.
          </li>
        </ul>
      </>
    ),
    badge: "Done",
    image: icpImage,
  },
  {
    title: "Phase 2: Launch and Awareness (Q4 2024)",
    description: (
      <>
        <ul className="font-rem leading-relaxed text-gray-300 ">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Review Smart Contract Development:
            </span>{" "}
            Upgrade and test the smart contracts for Tarsier Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Security Audit:
            </span>{" "}
            Conduct a basic security audit of the smart contracts.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Initial Marketing Push:
            </span>{" "}
            Begin a rapid marketing campaign on social media to attract early
            adopters and generate excitement.
            Create engaging content (memes, videos, contests) around the Tarsier theme.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Partnerships Outreach:
            </span>{" "}
            Partner with influencers and crypto communities to spread the word.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: prelaunch,
  },
  {
    title: "Phase 3: Launch & Immediate Adoption (Q1 2025)",
    description: (
      <>
        <ul className="font-rem leading-relaxed text-gray-300 ">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Public Token Sale:
            </span>{" "}
            Launch the public sale of Tarsier Token to the community.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Exchange Listing:
            </span>{" "}
            List Tarsier Token on at least one major cryptocurrency exchange or a
            decentralized exchange (DEX) for immediate trading.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Merchant Integration:
            </span>{" "}
            Announce initial partnerships with a few local protection and evironment initiatives
            organization that will accept $TARS (Tarsier Token).
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Community Engagement:
            </span>{" "}
            Host a live AMA (Ask Me Anything) session to engage with the
            community, answer questions, and build trust.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              NFT Integration:
            </span>{" "}
            Explore launching Tarsier-themed NFTs (non-fungible tokens) that provide
            holders with unique benefits or access to exclusive events.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Staking and Rewards:
            </span>{" "}
            Implement a staking mechanism to incentivize holding Tarsier tokens
            and reward long-term supporters.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Documentation and FAQs:
            </span>{" "}
            Prepare thorough documentation and FAQs for users and merchants.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Initial Airdrop/Incentive Program:
            </span>{" "}
            Launch an airdrop or other incentive program to encourage adoption
            and distribution.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: launch,
  },
  {
    title: "Phase 4: Post-Launch Activities (Q2 2025)",
    description: (
      <>
        <ul className="text-gray-300 leading-relaxed font-rem">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Continued Marketing:
            </span>{" "}
            Intensify marketing efforts to maintain momentum and attract more
            users.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Technology Refinement:
            </span>{" "}
            Make any necessary adjustments to smart contracts and platform
            features based on user feedback.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Community Building:
            </span>{" "}
            Organize online events and contests to foster community spirit and
            increase engagement.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Charitable Initiatives:
            </span>{" "}
            Dedicate a portion of Tarsier Token proceeds to Philippine wildlife conservation efforts,
            focusing on tarsier protection.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Analytics and Tracking:
            </span>{" "}
            Implement basic analytics to monitor adoption rates and transaction
            volumes.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: postLaunch,
  },

  {
    title: "Mainstream Recognition (Q3-Q4 2025 and Beyond)",
    description: (
      <>
        <ul className="text-gray-300 leading-relaxed font-rem">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Exchange Listings:
            </span>{" "}
            Pursue listings on major centralized exchanges (CEXs) that support ICP to
            increase liquidity and accessibility.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Global Community:
            </span>{" "}
            Expand the Tarsier Token community globally, reaching crypto enthusiasts
            beyond the ICP ecosystem.
          </li>

          <li>
            <span className="text-[#dc228f] font-semibold">
              Sustainability Initiatives:
            </span>{" "}
            Implement initiatives to ensure long-term sustainability and
            environmental responsibility of the Tarsier Token network.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Continued Innovation:
            </span>{" "}
            Explore innovative features such as decentralized governance, community-driven proposals,
            and additional utility for Tarsier Token.
          </li>
        </ul>
      </>
    ),
    badge: "Upcoming",
    image: finalImage,
  },
];
