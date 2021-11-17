/** @format */

import './CardList.css';
import React from 'react';
import { nanoid } from 'nanoid';
import cards from './cards';
import FilmCard from '../FilmCard/FilmCard';

export default function CardList() {
    const cardsMapped = cards.map((card) => (
        <FilmCard card={card} key={nanoid()} />
    ));

    return <ul className='CardList'>{cardsMapped}</ul>;
}
