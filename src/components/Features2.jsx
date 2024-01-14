import React from "react";

export default function Features2() {
  return (
    <div className="h-[95vh] md:h-auto bg-[#121E2C] font-[Poppins] text-white ">
      <h1 className="text-center text-3xl font-bold pt-14 w-[80vw] m-auto ">
        Why work in your Teens?
      </h1>
      <p className="p-8 text-[15px] md:text-center md:text-[18px] ">
        Warren Buffet, Bill Gates, Steve Jobs, all started working in their
        Teens, do you need a better reason ?
      </p>

      <section className="md:flex">
        <div className="border-2 border-[#DEBEBB] rounded-[20px] mx-8 my-3 md:mx-5 md:w-[30vw] p-8 cursor-pointer hover:bg-[#47C480]">
          <h1 className="text-2xl font-bold">First income</h1>
          <p>Work with real companies and Earn money</p>
        </div>

        <div className="border-2 border-[#F4E4B9] rounded-[20px] mx-8 my-3 md:mx-5 md:w-[30vw] p-8 cursor-pointer hover:bg-[#47C480]">
          <h1 className="text-2xl font-bold">Passion</h1>
          <p>Make your passion as your profession</p>
        </div>

        <div className="border-2 border-[#B8EDFC] rounded-[20px] mx-8 my-3 md:mx-5 md:w-[30vw] p-8 cursor-pointer hover:bg-[#47C480]">
          <h1 className="text-2xl font-bold">Learning</h1>
          <p>Experiential Learning by working on real projects</p>
        </div>
      </section>
    </div>
  );
}
