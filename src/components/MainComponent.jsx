import React, { useState } from 'react';
import NavigationMobile from './NavigationMobile.jsx';
import RecipeCard from './RecipeCard.jsx';
import RecipePage from './RecipePage.jsx';

const MainComponent = () => {
    const [showRecipePage, setShowRecipePage] = useState(false);

    function handleOpenRecipePage() {
        setShowRecipePage(true)
    }

    function handleCloseRecipePage() {
        setShowRecipePage(false)
    }

    return (
        <div className="bg-yellow-lightest text-gray-darkest box-border p-4 md:bg-purple-100 lg:bg-purple-200">
            <h1 className="text-xl font-semibold pb-4"> Kas pietums</h1>
            {showRecipePage ? <RecipePage onClick={handleCloseRecipePage}/> : <RecipeCard onClick={handleOpenRecipePage} />}
            <NavigationMobile />
        </div>
    );
};

export default MainComponent;
