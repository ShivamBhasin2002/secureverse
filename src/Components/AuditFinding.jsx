import { useState } from "react";
import { BsCheckAll } from "react-icons/bs";
import { GoAlert } from "react-icons/go";

const AuditFinding = () => {
  const [high, setHigh] = useState(true);
  const [medium, setMedium] = useState(true);
  const [low, setLow] = useState(true);
  return (
    <main className="flex flex-col gradient-bg-services min-h-screen items-center gap-8 px-4">
      <div className="font-semibold text-5xl text-white">Audit Findings</div>
      <section className="flex flex-row flex-wrap gap-6 w-full lg:w-[80%] flex-grow">
        <aside className="flex flex-col blue-glassmorphism w-[300px] h-min">
          <ul className="p-6 flex flex-col gap-2 border-b-4 border-b-white/10">
            <div className="font-semibold text-3xl text-white ">
              Filter Risks
            </div>
            <li
              className={`flex justify-between items-center p-2 px-4 rounded-xl font-bold ${
                high ? "bg-red-600/100" : "bg-red-600/25"
              } cursor-pointer`}
              onClick={() => setHigh((prevHigh) => !prevHigh)}
            >
              High
              {high && <BsCheckAll size="1.5rem" />}
            </li>
            <li
              className={`flex justify-between items-center p-2 px-4 rounded-xl font-bold ${
                medium ? "bg-yellow-400/100" : "bg-yellow-400/25"
              } cursor-pointer`}
              onClick={() => setMedium((prevMed) => !prevMed)}
            >
              Medium
              {medium && <BsCheckAll size="1.5rem" />}
            </li>
            <li
              className={`flex justify-between items-center p-2 px-4 rounded-xl font-bold ${
                low ? "bg-green-600/100" : "bg-green-600/25"
              } cursor-pointer`}
              onClick={() => setLow((prevLow) => !prevLow)}
            >
              Low
              {low && <BsCheckAll size="1.5rem" />}
            </li>
          </ul>
          <div className="p-6 flex flex-col gap-2 border-b-2 border-b-white/10 text-white">
            Lorem ipsum dolor sit amet
          </div>
          <div className="p-6 flex flex-col gap-2 border-b-2 border-b-white/10 text-white">
            Lorem ipsum dolor sit amet
          </div>
          <div className="p-6 flex flex-col gap-2  text-white">
            Lorem ipsum dolor sit, amet
          </div>
        </aside>
        <article className="flex-grow flex flex-col gap-4">
          <div className="blue-glassmorphism flex-grow flex flex-col gap-4">
            <div className="flex flex-row flex-wrap p-2 px-4 gap-4 font-bold">
              <div className="p-2 rounded-xl bg-white/40">Coin</div>
              <div className="p-2 rounded-xl bg-white/40">Details</div>
            </div>
            <div className="text-3xl text-center text-white font-bold">
              Vulnerabilities
            </div>
            <div className="px-8 flex flex-col gap-2">
              <div className="text-2xl text-white font-semibold">
                Affected Component
              </div>
              <div className="bg-white/20 p-2 rounded-lg max-w-[700px] flex flex-row items-center">
                <GoAlert size="2rem" className="mr-4" /> Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="px-8 flex flex-col gap-2">
              <div className="text-2xl text-white font-semibold">
                How to reproduce
              </div>
              <div className="bg-white/20 p-2 rounded-lg max-w-[700px] flex flex-row items-center">
                <GoAlert size="2rem" className="mr-4" /> Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="px-8 flex flex-col gap-2">
              <div className="text-2xl text-white font-semibold">
                How to fix
              </div>
              <div className="bg-white/20 p-2 rounded-lg max-w-[700px] flex flex-row items-center">
                <GoAlert size="2rem" className="mr-4" /> Lorem ipsum, dolor sit
                amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <table className="blue-glassmorphism flex-grow">
            <thead>
              <tr></tr>
            </thead>
          </table>
        </article>
        <section className="flex flex-row flex-wrap gap-6 w-full lg:w-[80%] flex-grow">
          <aside className="flex flex-col blue-glassmorphism w-[300px] h-min">
            <ul className="p-6 flex flex-col gap-2 border-b-4 border-b-white/10">
              <div className="font-semibold text-3xl text-white ">
                Filter Risks
              </div>
            </ul>
          </aside>
        </section>
      </section>
    </main>
  );
};

export default AuditFinding;
