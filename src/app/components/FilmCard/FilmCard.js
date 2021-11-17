/** @format */

import PropTypes from 'prop-types';
import React from 'react';
import './FilmCard.css';

import Description from './Description/Description';
import Poster from './Poster/Poster';
import Interaction from './Interaction/Interaction';

export default function FilmCard({ card }) {
    const {
        genre, src, price, title, starsCount,
    } = card;

    return (
        <li className='FilmCard'>
            <Poster genre={genre} img={src} title={title} />

            <Description starsCount={starsCount} title={title} price={price} />

            <Interaction />
        </li>
    );
}

FilmCard.propTypes = {
    card: PropTypes.shape({
        genre: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        starsCount: PropTypes.number,
        src: PropTypes.string,
    }).isRequired,
};
