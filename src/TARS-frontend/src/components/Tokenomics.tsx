import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import tarsierImage from "../../assets/tartok.svg";

const data = [
  { name: "Community Building and Rewards", value: 495000000000 },
  { name: "Wildlife Conservation Program", value: 198000000000 },
  { name: "OG Roles", value: 148000000000 },
  { name: "Development and Integration", value: 99000000000 },
  { name: "Team Advisors", value: 49000000000 },
];

const COLORS = ["#AF47D2", "#3572EF", "#FC4100", "#9BEC00", "#FFBF00"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={10}
      fontWeight="bold"
      fontFamily="REM"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

const Tokenomics: React.FC = () => {
  return (
    <div className=" py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#dc228f] text-center font-rem">
          Tokenomics
        </h2>
        <div className="mt-10">
          <p className="mt-4 text-2xl text-[#dc228f] font-extrabold text-center font-rem">
            <strong className="text-white">Total Supply:</strong> 990 BILLION
            TARS
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-[#dc228f] font-rem">
            Initial Distribution
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2" >
              <ResponsiveContainer width="100%" height={500}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label={renderCustomizedLabel}
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <h4 className="text-xl font-semibold text-gray-300 font-rem">
                Issuance Schedule:
              </h4>
              <ul className="mt-2 text-lg text-gray-100 py-4 list-none list-inside font-rem">
                <li className="leading-normal">
                  <strong className="text-[#dc228f]">
                    Phase 1: Initial Launch (Q4 2024)
                  </strong>{" "}<br />
                  <b>Community Airdrops/Rewards (10%):</b> <p className="text-xs">Distribute tokens through various community
                    engagement initiatives (e.g., contests, social media engagement) to build initial
                    excitement and a loyal following.</p> <br />
                  <b>Presale/IDO (10%): </b><p className="text-xs"> Conduct a presale or initial DEX offering to raise funds
                    for initial development and marketing efforts. Offer early supporters the opportunity
                    to acquire $TARS at a discounted price. </p>
                </li>
                <li className="leading-normal">
                  <strong className="text-[#dc228f]">
                    Phase 2: Ongoing Distribution (Q1 2025 - Q4 2025)
                  </strong>{" "}<br />
                  <b>Community Staking Rewards (10%): </b><p className="text-xs"> Implement a staking mechanism to incentivize holding $TARS.
                    Reward long-term holders with a portion of the token supply over time.</p> <br />
                  <b>Tarsier Conservation Initiatives (10%): </b> <p className="text-xs">Begin allocating funds from the Tarsier Protection &
                    Preservation Program to support on-the-ground conservation efforts, such as habitat restoration,
                    research, and community education programs. </p><br />
                  <b>Development & Integration Milestones (5%):</b><p className="text-xs">Release tokens as development milestones are achieved,
                    ensuring the project progresses according to the roadmap. </p><br />
                  <b>OG Role Rewards (7.5%): </b><p className="text-xs">Distribute tokens to those with OG roles, incentivizing early community
                    involvement and support.</p><br />
                </li>
                <li className="leading-normal">
                  <strong className="text-[#dc228f]">
                    Phase 3: Sustained Growth (Q1 2026 and beyond)
                  </strong>{" "}<br />
                  <b>Continued Community Rewards (10%):</b><p className="text-xs"> Continue community engagement initiatives to foster growth and
                    reward participation. Explore additional reward mechanisms like NFT airdrops or special access to events.</p><br />
                  <b>Tarsier Conservation Expansion (10%):</b><p className="text-xs">Expand conservation efforts with the remaining allocated funds,
                    potentially partnering with other organizations or launching new initiatives.</p><br />
                  <b>Development & Integration (5%): </b><p className="text-xs">Continue allocating tokens for ongoing development and integration efforts,
                    ensuring the project remains innovative and relevant.</p><br />
                  <b>OG Role Rewards (7.5%): </b><p className="text-xs">Vesting schedule for OG role rewards to incentivize long-term commitment to the project.</p><br />
                  <b>Team Advisors (5%):</b><p className="text-xs">vesting schedule to ensure alignment with project's long-term success</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="position absolute md:top-0 md:left-0 top-5 left-5">
        <img
          src={tarsierImage}
          alt="sauce image"
          className="md:w-[13rem] h-auto w-[6rem]"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
