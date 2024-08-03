import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Main() {
  const inputRef = useRef(null);
  return (
    <>
      <div className="flex justify-center items-center w-3/5 mx-auto h-screen ">
        <div className="quiz-wrapper w-full flex-col">
          <h1 className="quiz-title border-4 border-lime-500 text-4xl font-bold text-center py-4 text-white">
            Quiz Application
          </h1>
          <div className="quiz-main-body black py-6 px-16">
            <ol className="black text-white text-lg">
              <li>You will be asked 10 questions one after another.</li>
              <li>10 points is awarded for the correct answer.</li>
              <li>
                Each question has three options. You can choose only one option.
              </li>
              <li>You can review and change answers before the quiz finish.</li>
              <li>The result will be declared at the end of the quiz.</li>
            </ol>
            <form action="" id="form" className="mt-10 w-full flex">
              <input
                ref={inputRef}
                type="text"
                placeholder="Username*"
                className=" mx-auto py-2 px-3 w-3/5"
              />
            </form>
            <div className="Start black mt-4 py-3 px-4 flex ">
              <Link to={"/quiz"} className="StartBtn py-2 px-8 h-full mx-auto bg-yellow-400 text-lg font-semibold">
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
