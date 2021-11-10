import React from 'react';
import Stars from './Stars/Stars';
import './Description.css';

export default function Description(props) {
    const { starsCount, title, price } = props;

    return (
        <div
            className='Description'
        >
            <h2 className='film-card-title'>{title}</h2>
            <Stars count={starsCount} />

            <div className='controls'>
                <button
                    className='btn btn-primary buy-btn'
                    type='button'
                >
                    {`Купить ${price} Р`}
                </button>

                <button
                    className='btn btn-secondary btn-more'
                    type='button'
                >
                    {'Подробнее ->'}
                </button>
            </div>
        </div>
    );
}
