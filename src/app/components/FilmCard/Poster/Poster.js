/** @format */

import PropTypes from 'prop-types';
import React from 'react';
import './Poster.css';

export default function Poster({ genre, img, title }) {
    return (
        <div className='Poster'>
            <h2 className='poster-genre'>{genre}</h2>
            <img src={img} alt={title} className='poster-img' />
        </div>
    );
}

Poster.propTypes = {
    genre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
