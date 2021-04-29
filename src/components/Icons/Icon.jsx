import React from 'react';
import icons from '../../../public/images/icons.svg'

const Icon = ({ iconId, iconStyles }) => {
    //process.env.PUBLIC_URL
    // const iconPath =  `/images/icons.svg?cache=01#${icon}`

    return (
        <>
        čia svg
        <svg className={`tw-inline-block tw-fill-current tw-flex-shrink-0 ${iconStyles}`}>
            <use href={icons + '#' + iconId} />
        </svg>
        </>
    );
}
export default Icon;