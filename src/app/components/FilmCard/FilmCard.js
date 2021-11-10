/* eslint-disable object-curly-newline */

import { nanoid } from 'nanoid';
import React from 'react';
import './FilmCard.css';

import Description from './Description/Description';
import Poster from './Poster/Poster';
import Interaction from './Interaction/Interaction';

const FilmCard = (card) => {
    const { genre, src, price, title, starsCount } = card;

    return (
        <li
            className='FilmCard'
            key={nanoid()}
        >
            <Poster
                genre={genre}
                img={src}
                title={title}
            />

            <Description
                starsCount={starsCount}
                title={title}
                price={price}
            />

            <Interaction />
        </li>
    );
};

export default FilmCard;
