function ControlButtons({ moveSlide, currentStep, totalSteps }) {
    return (
        <div className="text-center mt-4">
            {currentStep > 0 && <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700" onClick={() => moveSlide(-1)}>Prev</button>}
            {currentStep < totalSteps - 1 && <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 ml-2" onClick={() => moveSlide(1)}>Next</button>}
        </div>
    );
}

export default ControlButtons;
