import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React, { useState } from "react";

function StepCard({ step, index, prevStep, nextStep, totalSteps }) {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <div
      className="bg-gray-200 p-5 rounded-lg shadow my-2 relative flex items-center"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      {index > 0 && (
        <button
          onClick={prevStep}
          className={`absolute left-0 ml-2 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-700 transition duration-150 ease-in-out ${showButtons ? 'opacity-100' : 'opacity-0'}`}
        >
          <MdArrowBackIos size={15} />
        </button>
      )}
      <div className="flex-grow text-center ml-6 mr-6">
        <h3 className="text-lg font-semibold">Step {index + 1}</h3>
        <p>{step}</p>
      </div>
      {index < totalSteps - 1 && (
        <button
          onClick={nextStep}
          className={`absolute right-0 mr-2 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-700 transition duration-150 ease-in-out ${showButtons ? 'opacity-100' : 'opacity-0'}`}
          
        >
          <MdArrowForwardIos size={15} />
        </button>
      )}
    </div>
  );
}

export default StepCard;
