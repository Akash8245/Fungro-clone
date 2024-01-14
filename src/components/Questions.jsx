import React, { useState } from "react";

export default function Questions() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  function toggleView(index) {
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const questionsData = [
    {
      question: "How can I start earning money?",
      answer:
        "Simple 5 step process – (1) download funngro and register for earning, (2) complete your evaluation project, (3) apply to projects of your interest, (4) submit completed projects, (5) Get paid!",
    },
    {
      question: "Why should Teens work?",
      answer:
        "Start early, get independence, learn while you earn but most importantly get real-world experience. Work on projects of your interest and find your real passion before making the final career decision.",
    },
    {
      question: "What kind of work can I do??",
      answer:
        "At this time we have 12 categories in which Teens can work as listed on our home page. Do let us know if those do not cover your needs.",
    },
  ];

  return (
    <div className="min-h-[70vh] md:min-h-[100vh] bg-[#1f2e40] text-white font-[Poppins] ">
      <h1 className="text-3xl font-bold text-center p-5">
        Frequently Asked Questions
      </h1>
      <p className="md:text-center px-6">
        Part of being successful is asking the right questions and listening to
        the answers
      </p>

      <section>
        {questionsData.map((data, index) => (
          <div className="m-5" key={index}>
            <div
              className="flex h-[100px] w-[80vw] md:w-[60vw] m-auto p-5 bg-[#575E75] border-2 border-[#B3ABCD] rounded items-center justify-between cursor-pointer  "
              onClick={() => toggleView(index)}
            >
              <h1 className="text-[13px] md:text-[18px] ">{data.question}</h1>
              <p className="text-2xl">{openQuestionIndex === index ? "-" : "+"}</p>
            </div>
            <p
              className={`p-8 w-[80vw] md:w-[60vw] m-auto text-[13px] md:text-[18px] bg-[#364354] rounded   ${
                openQuestionIndex === index ? "" : "hidden"
              } `}
            >
              {data.answer}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
