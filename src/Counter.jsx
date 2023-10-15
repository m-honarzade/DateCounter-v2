import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currDate = new Date();
  const calcDate = currDate.setDate(currDate.getDate() + count);

  const clickHandler = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="container flex flex-col mx-auto max-w-2xl text-center mt-16 justify-center items-center ">
      <div className="flex items-center justify-center mmx-auto mb-1 border-violet-400   text-violet-900  w-[50%]">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
          className="bg-violet-900"
        />
        <span className="text-violet-700 text-sm ml-2 font-semibold">
          {step}
        </span>
      </div>
      <div className=" mx-auto  border-violet-400 rounded-md border bg-violet-900 text-white py-4 w-[50%]">
        <button
          onClick={() => setCount((curr) => curr - step)}
          className="mr-1 border rounded-md px-2 py-[0.5] bg-white font-bold text-violet-800"
        >
          -
        </button>
        <input
          value={count}
          type="text"
          className="rounded-sm text-violet-900 px-2"
          onChange={(e) => setCount(+e.target.value)}
        />
        <button
          onClick={() => setCount((curr) => curr + step)}
          className="ml-1 border rounded-md px-2 py-[0.5] bg-white font-bold text-violet-800"
        >
          +
        </button>
      </div>
      <div className=" mx-auto text-sm md:text-base font-bold    text-violet-900 py-4 w-[50%]">
        <p>
          {count === 0
            ? `Today is : ${currDate.toDateString()} `
            : count > 0
            ? `${count} from today is : ${currDate.toDateString()}`
            : `${Math.abs(count)} ago was : ${currDate.toDateString()}`}
        </p>
        {step !== 1 || count !== 0 ? (
          <button
            onClick={clickHandler}
            className="bg-violet-900 rounded-md text-white px-3 py-1 mt-2"
          >
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Counter;
