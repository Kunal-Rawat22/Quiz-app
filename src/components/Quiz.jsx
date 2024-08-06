import { Link } from "react-router-dom";
import Question from "./Quiz Components/Questions";
export default function Quiz() {

  // Prev button event handler
  function onPrev()
  {
    console.log("Clicked on Prev")
  }
  // Prev button event handler
  function onNext()
  {
    console.log("Clicked on Next");
  }
  return (
    <>
      <div className="flex justify-center items-center w-3/5 mx-auto h-screen ">
        <div className="quiz-wrapper w-full flex-col">
          <h1 className="quiz-title border-4 border-lime-500 font-bold text-4xl text-center py-4 text-white">
            Quiz Application
          </h1>
          <Question/>
          <div className="Nav-btn flex justify-between mt-10">
            <button className="bg-white py-2 px-6 font-semibold text-lg" onClick={onPrev}>Prev</button>
            <button className="bg-white py-2 px-6 font-semibold text-lg" onClick={onNext}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
