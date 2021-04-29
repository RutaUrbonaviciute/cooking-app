import React from 'react';

const RestaurantIcon = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="restaurant">
            <path id="Path 25" d="M8 4V20" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
            <path id="Path 25_2" d="M18 12C18 12 15 11 15 8C15 5 18 4 18 4V20" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
            <path id="Path 26" d="M5 4V7C5 8.65685 6.34315 10 8 10V10C9.65685 10 11 8.65685 11 7V4" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
);

export default RestaurantIcon;
