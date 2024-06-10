import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import oldPc from "../assets/old_computer.png";

function Ctf() {
  return (
    <Container otherClasses={"bg-slate-950 text-white py-[10rem] px-6"}>
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 lg:gap-9">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl max-w-[400px] text-left mt-6">
            WHAT IS A CAPTURE THE FLAG COMPETITION?
          </h3>
          <p className="my-5 text-md text-left max-w-[400px]">
            Capture-the-Flag events are computer security competitions.
            Participants compete in security-themed challenges for the purpose
            of obtaining the highest score. Competitors are expected to “capture
            flags” to increase their score, hence the name of the event. Flags
            are usually random strings embedded in the challenges.
          </p>
          <Button otherClasses={"bg-white text-black my-8"}>Read More</Button>
        </div>
        <img
          alt="old-computer"
          className="w-[400px] mx-auto my-8 ring-2 rounded-md ring-blue-500"
          src={oldPc}
        />
      </div>
    </Container>
  );
}

export default Ctf;
