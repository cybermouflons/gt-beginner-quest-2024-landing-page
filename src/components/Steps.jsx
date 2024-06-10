import React from "react";

const steps = [
  {
    number: 1,
    title: "Step 1",
    subtitle: "Account Registration",
    info: "First, you need to set up a new account on our platform for access to the challenges.",
  },
  {
    number: 2,
    title: "Step 2",
    subtitle: "Join Discord Server",
    info: "If you haven't done so already, create a Discord account and join the CCSC server using the provided link. This platform allows direct communication with event organisers and other participants.",
  },
  {
    number: 3,
    title: "Step 3",
    subtitle: "Hacking",
    info: "Begin solving challenges. If you're new to CTFs, it's advisable to start with the beginner level challenges.",
  },
  {
    number: 4,
    title: "Step 4",
    subtitle: "Submit Flags",
    info: "When you discover a flag, submit it via the challenge flag submission field to accumulate points and climb the leaderboard.",
  },
];

function Steps() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-8 w-full text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center my-20">
        How to Play
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="w-full max-w-[250px] md:w-1/2 lg:w-1/4 p-6
              shadow-lg rounded-lg bg-slate-900 ring-1 ring-fuchsia-600
              flex flex-col items-center mx-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-500">
                {step.title}
              </h3>
              <p className="text-xl font-semibold my-5">{step.subtitle}</p>
              <p>{step.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;
