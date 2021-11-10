import './CardList.css';
import React from 'react';
import cards from './cards';
import FilmCard from '../FilmCard/FilmCard';

export default function CardList() {
    const cardsMapped = cards.map(FilmCard);
    return <ul className='CardList'>{cardsMapped}</ul>;
}
