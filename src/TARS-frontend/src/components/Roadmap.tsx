import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import icpImage from "../../assets/icp.png";
import prelaunch from "../../assets/prelaunch.png";
import launch from "../../assets/launch.jpg";
import postLaunch from "../../assets/postlaunch.jpg";
import finalImage from "../../assets/final.png";

export default function Roadmap() {
  return (
    <TracingBeam className="px-6">
      <h1 className="text-4xl font-bold text-[#dc228f] text-center font-rem my-4">
        $TARS Token Roadmap
      </h1>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2
              className={`rounded-full text-sm w-fit px-4 py-1 mb-4 font-rem ${item.badge === "Done" ? "bg-[#dc228f] text-black" : "bg-gray-700 text-white"}`}
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
  );
}

const dummyContent = [
  {
    title: "Phase 1: Concept and Immediate Development",
    description: (
      <>
        <ul className="font-rem text-gray-300 leading-relaxed">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Idea Finalization
            </span>{" "}
            Finalize the concept of Tarsier Token as a meme and utility Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">Team Assembly</span>{" "}
            Quickly assemble a small, agile team of developers, marketers, and
            community managers.
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
              Community Setup:
            </span>{" "}
            Create social media profiles on Twitter, Discord, and Telegram to
            start building a community and generating buzz.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Technical Setup
            </span>{" "}
            Set up the development environment on the Internet Computer Protocol
            (ICP).
          </li>
        </ul>
      </>
    ),
    badge: "Done",
    image: icpImage,
  },
  {
    title: "Phase 2: Rapid Development & Pre-launch",
    description: (
      <>
        <ul className="font-rem leading-relaxed text-gray-300 ">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Smart Contract Development:
            </span>{" "}
            Develop and test the basic smart contracts for Tarsier Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Security Audit:
            </span>{" "}
            Conduct a basic security audit of the smart contracts.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Website Creation:
            </span>{" "}
            Launch a simple, attractive website with the white paper, roadmap,
            and links to community platforms.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Initial Marketing Push:
            </span>{" "}
            Begin a rapid marketing campaign on social media to attract early
            adopters and generate excitement.
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
              Partnerships Outreach:
            </span>{" "}
            Start reaching out to local restaurants and food outlets to gauge
            interest in accepting Tarsier Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Legal Consultation:
            </span>{" "}
            Consult with legal experts to ensure compliance with relevant
            regulations.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: prelaunch,
  },
  {
    title: "Phase 3: Launch & Immediate Adoption",
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
              Governance Setup:
            </span>{" "}
            Introduce the initial governance framework, allowing token holders
            to propose and vote on the next steps for Tarsier Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Support Channels:
            </span>{" "}
            Set up customer support channels for immediate post-launch user
            assistance.
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
    title: "Phase 4: Post-Launch Activities (Days 4-7)",
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
            <span className="text-[#dc228f] font-semibold">User Feedback:</span>{" "}
            Collect feedback from early users and merchants to identify and
            address any immediate issues.
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
              Future Planning:
            </span>{" "}
            Begin planning the next phases of development, focusing on expanding
            merchant acceptance and additional features.
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
    title: "Immediate Next Steps (Week 2 and Beyond)",
    description: (
      <>
        <ul className="text-gray-300 leading-relaxed font-rem">
          <li>
            <span className="text-[#dc228f] font-semibold">
              Expand Merchant Network:
            </span>{" "}
            Continue onboarding more restaurants and food outlets to accept
            Tarsier Token.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Mobile App Development:
            </span>{" "}
            Start developing a mobile wallet app for easier transactions.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Advanced Governance:
            </span>{" "}
            Develop and implement more sophisticated governance mechanisms based
            on community input.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Global Outreach:
            </span>{" "}
            Extend marketing efforts internationally to attract a global
            audience of Tarsier lovers.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">Partnerships:</span>{" "}
            Secure strategic partnerships with food delivery services and larger
            restaurant chains.
          </li>
          <li>
            <span className="text-[#dc228f] font-semibold">
              Sustainability Initiatives:
            </span>{" "}
            Implement initiatives to ensure long-term sustainability and
            environmental responsibility of the Tarsier Token network.
          </li>
        </ul>
      </>
    ),
    badge: "Upcoming",
    image: finalImage,
  },
];
