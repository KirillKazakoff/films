import React, { useState } from 'react';
import './Interaction.css';

export default function Interaction() {
    const [heartCls, setHeartCls] = useState('material-icons-two-tone');

    const onHeartClick = () => {
        const newHeartCls = heartCls === 'material-icons-two-tone'
            ? 'material-icons'
            : 'material-icons-two-tone';

        setHeartCls(newHeartCls);
    };

    return (
        <div className='Interaction'>
            <button
                className={`${heartCls} icon`}
                type='button'
                onClick={onHeartClick}
            >
                favorite
            </button>

            <button
                className='material-icons-two-tone icon'
                type='button'
            >
                share
            </button>
        </div>
    );
}
