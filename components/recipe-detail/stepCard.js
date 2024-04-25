import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React, { useState } from "react";
import { BsLightning } from "react-icons/bs";
import { BsMagic } from "react-icons/bs";


function StepCard({ step, index, prevStep, nextStep, totalSteps }) {
  const [showButtons, setShowButtons] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };
  const closeExpand = () => {
    setIsExpanded(false);
  };

  //   const handlePageTurn = (event) => {
  //     if (isExpanded){
  //     const rect = event.currentTarget.getBoundingClientRect();
  //     const x = event.clientX - rect.left; // 获取点击位置相对于卡片左侧的位置

  //     if (x < rect.width / 2 && index > 0) {
  //         prevStep(); // 点击左半部分，且不是第一步
  //     } else if (x >= rect.width / 2 && index < totalSteps - 1) {
  //         nextStep(); // 点击右半部分，且不是最后一步
  //     }
  //     event.stopPropagation();
  //   }
  // };
  const cardClick = () => {
    handleExpand();
    // handlePageTurn();
  };

  const sentences = step.split(/(?<=[.!?])\s+/);

  return (
    <div>      <div
        className={`fixed inset-0 bg-black transition-opacity ${
          isExpanded ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-10`}
        onClick={closeExpand}
      ></div>
    <div className={`${isExpanded ? `fixed bottom-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-75 h-50   z-30 w-full  p-10 border-transparent` : ""} `}>

      <div
        className=" p-5 rounded-lg shadow my-2 flex items-center cursor-pointer transition-all duration-300 ${isExpanded ? 'fixed z-50 bg-amber-100 m-0 max-h-full w-full text-xl' : 'bg-grey-200 z-50 relative text-base'}"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
        onClick={cardClick}
      >
        {/* <div className="relative left-0 w-1/2" onClick={(e) => { e.stopPropagation(); prevStep();}}></div>
      <div  className="relative right-0 w-1/2" onClick={(e) => { e.stopPropagation();nextStep()}}></div> */}
        <div
          className={`${
            isExpanded ? `absolute left-0` : "absolute left-0"
          } `}
        >
          {index > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevStep();
              }}
              className={` ml-2 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-700 transition duration-150 ease-in-out ${
                showButtons ? "opacity-100" : "opacity-0"
              }`}
            >
              <MdArrowBackIos size={15} />
            </button>
          )}
        </div>
        {isExpanded && (
          <button
            onClick={prevStep}
            disabled={index <= 0}
            className="absolute left-0 top-0 bottom-0 w-1/2 cursor-pointer opacity-0 hover:opacity-100 focus:opacity-100"
            style={{ backgroundColor: "transparent" }}
          >
            {/* 左侧按钮区域 */}
          </button>
        )}

        <div
          className={`${
            isExpanded ? "text-2xl" : "text-base"
          } flex-grow text-left ml-10 mr-10`}
        >
          <div className="flex items-center gap-2">
          <BsMagic /><h5 className="font-bold">Step {index + 1}</h5></div>
          {sentences.map((sentence, index) => (
                                <div className="w-full flex  items-start" >
                                  
                                <li key={index}>{sentence}</li> 
                                </div>
                            ))}
        </div>
        <div
          className={`${
            isExpanded ? `absolute right-0` : "absolute right-0"
          } `}
        >
          {index < totalSteps - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStep();
              }}
              className={` mr-2 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-700 transition duration-150 ease-in-out ${
                showButtons ? "opacity-100" : "opacity-0"
              }`}
            >
              <MdArrowForwardIos size={15} />
            </button>
          )}
        </div>
        {isExpanded && (
          <button
            onClick={nextStep}
            disabled={index >= totalSteps - 1}
            className="absolute right-0 top-0 bottom-0 w-1/2 cursor-pointer opacity-0 hover:opacity-100 focus:opacity-100"
            style={{ backgroundColor: "transparent" }}
          >
            {/* 右侧按钮区域 */}
          </button>
        )}
      </div>
    </div>
    </div>
  );
}

export default StepCard;
