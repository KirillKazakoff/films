/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { nanoid } from 'nanoid';

const Star = () => {
    return (
        <li
            className='Star'
            key={nanoid()}
        >
            <span className='Star material-icons'>star_purple</span>
        </li>
    );
};

export default Star;
