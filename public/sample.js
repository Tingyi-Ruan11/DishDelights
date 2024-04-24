import React, { useState } from 'react';
import StepCard from './StepCard';
import ControlButtons from './ControlButtons';

const stepsData = [
    "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
    "In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.",
    "Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes.",
    "Remove from the heat and add the chopped basil.",
    "Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm."
];

function Recipe() {
    const [currentStep, setCurrentStep] = useState(0);

    const moveSlide = (direction) => {
        const newStep = (currentStep + direction + stepsData.length) % stepsData.length;
        setCurrentStep(newStep);
    };

    const ingredients = [
        "1 pound penne rigate", "1/4 cup olive oil", "3 cloves garlic",
        "1 tin chopped tomatoes", "1/2 teaspoon red chile flakes",
        "1/2 teaspoon Italian seasoning", "6 leaves basil", "Sprinkling of Parmigiano-Reggiano"
    ];

    return (
        <div className="max-w-4xl mx-auto bg-white p-5 rounded-lg shadow my-5">
            <h1 className="text-2xl text-gray-800">Spicy Arrabiata Penne</h1>
            <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="Spicy Arrabiata Penne" className="w-full rounded-lg my-4" />
            <p><strong>Category:</strong> Vegetarian</p>
            <p><strong>Cuisine:</strong> Italian</p>
            <p><strong>Tags:</strong> Pasta, Curry</p>
            <h2 className="text-xl text-gray-800 mt-4 mb-2">Ingredients:</h2>
            <ul className="list-none p-0">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-2">{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-xl text-gray-800 mt-4 mb-2">Instructions:</h2>
            <StepCard step={stepsData[currentStep]} />
            <ControlButtons moveSlide={moveSlide} currentStep={currentStep} totalSteps={stepsData.length} />
        </div>
    );
}

export default Recipe;
