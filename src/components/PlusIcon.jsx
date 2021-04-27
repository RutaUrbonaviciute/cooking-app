import React from 'react';

const PlusIcon = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="plus">
            <path id="Path 2" d="M20 12H4" stroke={color} stroke-linecap="round" />
            <path id="Path 2_2" d="M12 4V20" stroke={color} stroke-linecap="round" />
        </g>
    </svg>
);

export default PlusIcon;
