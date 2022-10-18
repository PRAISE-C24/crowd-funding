import { useEffect } from "react";
import { useState } from "react";
import ListItem from "./ListItems";

function Stat({ currentFund, currentBackers }) {
  const [fundPercent, setFundPercent] = useState(0);

  useEffect(() => {
    function CalcPercent() {
      let percent = (currentFund * 100) / 100000;
      setFundPercent(percent);
    }
    CalcPercent();
  }, [currentFund]);
  return (
    <article
      id="stat-section"
      className="bg-white text-center w-[85%] m-auto py-12 rounded-md shadow-lg md:w-3/4 lg:w-3/5  xl:w-1/2"
    >
      {/* statistic list items  */}
      <ul className="flex flex-col justify-start items-center gap-6 md:gap-10 lg:flex-row lg:gap-14 lg:ml-12 mb-8">
        <ListItem figure={`$${currentFund}`} value="of $100,000 backed" />

        <hr className="border-[1px] w-24 lg:h-16 lg:w-0" />

        <ListItem figure={currentBackers} value="total backers" />

        <hr className="border-[1px] w-24 lg:h-16 lg:w-0" />

        <ListItem figure="56" value="days left" />
      </ul>

      {/* progressive bar in the statistic section */}
      <section className="w-[85%] m-auto lg:w-[90%]">
        <div
          style={{
            background: `linear-gradient(90deg, hsl(176, 50%, 47%) ${fundPercent}%, hsl(224, 65%, 95%)  ${fundPercent}%)`,
          }}
          id="progress-bar"
          className="w-full h-4 rounded-full lg:h-3"
        ></div>
      </section>
    </article>
  );
}

export default Stat;
