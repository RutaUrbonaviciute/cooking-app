import React from 'react';
import ArrowLeftIcon from './Icons/ArrowLeftIcon.jsx';
import Icon from './Icons/Icon.jsx'

const RecipePage = ({ onClick }) => {
    return (
        <>
            <h2 className="text-purple-400">Recipe page</h2>
            <button className="p-3 rounded-full hover:bg-yellow-darkest" onClick={onClick}>
                {/* <ArrowLeftIcon /> */}
                <Icon iconStyles="h-4 w-4" iconId="arrow-left"/>
            </button>
        </>
    )
};

export default RecipePage;
