import React from 'react';
import Star from './Star';

export default function Stars({ count }) {
    if (!count || count <= 0 || count > 5) return null;

    const starsMapped = Array(count).fill(null).map(Star);
    return <ul className='Stars'>{starsMapped}</ul>;
}
