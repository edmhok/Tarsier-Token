import { useState } from "react";

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const preStyle = {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    padding: "1rem",             // Add some padding (optional)
    fontFamily: "monospace",      // Change the font (optional)
    // ... other styles you want to apply
  };

  const questionsAndAnswers = [
    {
      question: "Why should I buy TARS?",
      answer: (
        <div>
          Tarsier Token $TARS is more than just a meme token. It's a vibrant community-driven
          project on the ICP blockchain with a unique connection to the Philippine
          Tarsier. Here's why you should consider buying $TARS:<br /><br />
          <ul style={{ paddingLeft: '20px' }}>
            <li ><b style={{ color: '#FFDB00' }}>Community:</b> Join a passionate community of crypto enthusiasts and
              Tarsier supporters who share a love for memes and conservation.</li>
            <li ><b style={{ color: '#FFDB00' }}>Potential for Growth:</b> As the $TARS community grows, so does the
              potential value of the token.</li>
            <li ><b style={{ color: '#FFDB00' }}>Exciting Roadmap:</b>We have an exciting roadmap filled with features
              like staking rewards, exclusive NFT drops, and partnerships within
              the ICP ecosystem.</li>
            <li ><b style={{ color: '#FFDB00' }}>Conservation Impact:</b>A portion of proceeds from $TARS is dedicated
              to Philippine wildlife conservation efforts, focusing on protecting
              the adorable Tarsier.</li>
            <li ><b style={{ color: '#FFDB00' }}>Join the Fun:</b>Embrace the meme culture and be part of something
              unique and entertaining.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is a meme Token?",
      answer: (
        <div>
          Meme tokens are cryptocurrencies that are all about fun, community, and internet culture. They're like the inside jokes of the crypto world, often inspired by viral memes, trending topics, or even adorable animals (like our very own $TARS!). 😄<br /><br />

          Unlike traditional cryptocurrencies like Bitcoin or Ethereum, meme tokens might not have a super serious use case. Instead, they thrive on the enthusiasm and creativity of their communities. Their value can skyrocket based on social media buzz, celebrity endorsements, or simply because they're just so darn cute or funny!
          <br /><br />
          While meme tokens can be incredibly fun and exciting, it's important to remember that they're also highly volatile. Their prices can go up and down like a rollercoaster, so it's crucial to invest wisely and never put in more than you can afford to lose. 🎢
        </div>
      ),
    },
    {
      question: "What is the utility of $Tarsier Token?",
      answer: (
        <div>
          $Tarsier is not just a cute face in the meme world; it's also got a ton of utility planned to make it a valuable asset in the ICP ecosystem. Here's a sneak peek at what's in store:
          <br /><br />

          * **Staking Rewards:** Hold on to your $TARS, and you'll be rewarded! We're developing a staking program that will allow you to earn more $TARS simply by holding the token in your wallet.
          <br />
          * **Exclusive NFTs:**  Get ready to collect unique, Tarsier-themed NFTs that could unlock special perks, access to events, or even have value in the NFT marketplace.
          <br />
          * **Partnerships and Integrations:** We're exploring partnerships with other projects in the ICP ecosystem to bring even more value and utility to $TARS holders.
          <br />
          * **Tarsier Conservation:** We're passionate about protecting the adorable Philippine Tarsier. A portion of $TARS proceeds will go towards conservation efforts to help preserve their habitat.
          <br /><br />

          This is just the beginning! As the $TARS community grows, so will the utility and benefits of the token.  Stay tuned for exciting updates and announcements!
        </div>
      ),
    },
    {
      question: "Does $TARS have any airdrops mechanism?",
      answer: (
        <div>
          Yes, absolutely! We love rewarding our amazing $TARS community with airdrops! 🎉 We believe in giving back and showing our appreciation to those who support the project.
          <br /><br />

          Our airdrops are a fun and exciting way for you to earn free $TARS tokens. We typically announce them on our social media channels, so make sure to follow us on [Twitter-X](https://x.com/tarsierian) and join our [Discord](https://discord.gg/WHWVKzvW) to stay updated.
          <br /><br />

          We've done airdrops in the past as a way to say thank you to our early supporters, and we have even more exciting airdrop events planned for the future. Keep an eye out for announcements, as you might just be one of the lucky recipients! 🎁
        </div>
      ),
    },
    {
      question: "Does $TARS have any unique features?",
      answer: (
        <div>
          Absolutely! $TARS is more than just a meme; it's a project with a unique blend of features that make it stand out in the crypto space:

          <ul>
            <li>
              <b style={{ color: "#dc228f" }}>Tarsier Conservation:</b> We're deeply committed to the conservation of the Philippine Tarsier, an endangered primate
              native to the Philippines. A portion of every transaction and proceeds from our NFTs goes directly to organizations working tirelessly to protect these adorable creatures and their habitat.
            </li>
            <li>
              <b style={{ color: "#dc228f" }}>NFT Integration:</b> We're developing a collection of unique, Tarsier-themed NFTs. These NFTs will not only be fun and collectible, but they'll also offer special utility within the $TARS ecosystem, such as exclusive access to events, merchandise, or even potential staking rewards.
            </li>
            <li>
              <b style={{ color: "#dc228f" }}>ICP Ecosystem Integration:</b> $TARS is built on the Internet Computer Protocol (ICP), which offers fast, scalable, and
              eco-friendly transactions. We're actively exploring innovative ways to integrate $TARS with other projects and platforms within the ICP ecosystem.
            </li>
          </ul>
          We're constantly working on new and exciting features to enhance the
          $TARS experience. Stay tuned for updates and announcements as we
          continue to evolve and grow!
        </div>
      ),
    },
  ];

  const handleClick = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-gray-100">
        Ask anything about{" "}
        <span className="text-[#dc228f] font-semibold">$TARS</span>
      </h2>

      <div className="w-full max-w-3xl">
        {questionsAndAnswers.map((item, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-md ${activeQuestion === index
              ? "bg-[#dc228f] text-white" // Active background
              : "bg-[#43399f] text-gray-400" // Inactive background
              }`}
          >
            <button
              className={`w-full text-left ${activeQuestion === index ? "text-white" : "" // Active text color
                }`}
              onClick={() => handleClick(index)}
            >
              {item.question}
            </button>
            {activeQuestion === index && (
              <p className="mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
