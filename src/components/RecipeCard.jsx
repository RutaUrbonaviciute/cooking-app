import React from 'react';
import ClockIcon from './Icons/ClockIcon.jsx';
import NavigationMobile from './NavigationMobile.jsx';
import PeopleIcon from './Icons/PeopleIcon.jsx';
import Icon from './Icons/Icon.jsx'

const RecipeCard = ({onClick}) => {
    return (
        <>
            {/* Kortele */}
            <button onClick={onClick}>
                <div className="bg-white p-4 mb-4 flex flex-col justify-center items-center rounded-lg shadow-xl">
                    <div className="w-full text-left"><h2 className="text-2xl">Svogūnai su česnakais</h2></div>
                    <div className="flex w-full justify-start mt-4">
                        <div className="flex justify-between items-center"><ClockIcon /><div className="ml-2 mr-4">50 min</div></div>
                        <div className="flex justify-between items-center"><PeopleIcon /><div className="ml-2">4</div></div>

                    </div>
                    <div className="w-full h-60 mt-2 mb-2">
                        <img
                            src="https://images.pexels.com/photos/4197439/pexels-photo-4197439.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4197439.jpg&fm=jpg"
                            alt="food"
                            style={{ height: '100%', width: '100%', objectFit: "cover" }}
                            className="rounded-lg"

                        />
                    </div>
                </div>
            </button>
            {/* Kortele */}
            <div className="bg-white p-4 mb-4 flex flex-col justify-center items-center rounded-lg shadow-xl">
                <div className="w-full text-left"><h2 className="text-2xl">Dešrelės ir mėsa</h2></div>
                <div className="flex w-full justify-start mt-4">
                    <div className="flex justify-between items-center">
                        <ClockIcon />
                        <Icon iconId="clock" iconStyles="h-10 w-10"/>
                        <div className="ml-2 mr-4">10 min</div></div>
                    <div className="flex justify-between items-center"><PeopleIcon /><div className="ml-2">15</div></div>

                </div>
                <div className="w-full h-60 mt-2 mb-2">
                    <img
                        src="https://images.pexels.com/photos/4294500/pexels-photo-4294500.jpeg?cs=srgb&dl=pexels-dids-4294500.jpg&fm=jpg"
                        alt="food"
                        style={{ height: '100%', width: '100%', objectFit: "cover" }}
                        className="rounded-lg"

                    />
                </div>
            </div>

            {/* Kortele */}
            <div className="bg-white p-4 mb-4 flex flex-col justify-center items-center rounded-lg shadow-xl">
                <div className="w-full text-left"><h2 className="text-2xl">Šokoladinis tortas</h2></div>
                <div className="flex w-full justify-start mt-4">
                    <div className="flex justify-between items-center"><ClockIcon /><div className="ml-2 mr-4">240 min</div></div>
                    <div className="flex justify-between items-center"><PeopleIcon /><div className="ml-2">1</div></div>

                </div>
                <div className="w-full h-60 mt-2 mb-2">
                    <img
                        src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?cs=srgb&dl=pexels-elli-1854652.jpg&fm=jpg"
                        alt="food"
                        style={{ height: '100%', width: '100%', objectFit: "cover" }}
                        className="rounded-lg"

                    />
                </div>
            </div>
        </>
    );
};

export default RecipeCard;
