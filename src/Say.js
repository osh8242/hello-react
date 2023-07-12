import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState("처음화면");
    const onClickEnter = () => {setMessage("어서오세요")};
    const onClickOut = () => {setMessage("조심히 가세요")};

    const [color, setColor] = useState('black');
    const onClickColorRed = () => {setColor('red')};
    const onClickColorGreen = () => {setColor('green')};
    const onClickColorBlue = () => {setColor('blue')};

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>   
            <button onClick={onClickOut}>퇴장</button>   
            <h1 style={{color}}>{message}</h1>

            <button style={{color : 'red'}} onClick={onClickColorRed}>빨간색</button>
            <button style={{color : 'green'}} onClick={onClickColorGreen}>초록색</button>
            <button style={{color : 'blue'}} onClick={onClickColorBlue}>파란색</button>
        </div>
    );
};

export default Say;
