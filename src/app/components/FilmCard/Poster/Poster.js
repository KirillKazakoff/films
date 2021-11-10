import React from 'react';
import './Poster.css';

export default function Poster({ genre, img, title }) {
    // const subtitleCls = 'card-subtitle;

    return (
        <div className='Poster'>
            <h2 className='poster-genre'>{genre}</h2>
            <img src={img} alt={title} className='poster-img' />
        </div>
    );
}
