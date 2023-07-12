import React, { useState } from 'react';

const Number3 = () => {
    // const [a, setA] = useState(1);
    // const [b, setB] = useState(1);
    // const [c, setC] = useState(1);

    const[map, setMap] = useState({a:1,b:2,c:3});
    return (
        <div>
            <h1>{map.a}</h1>
            <h1>{map.b}</h1>
            <h1>{map.c}</h1>
            <button onClick={()=>{                             
                setMap({...map, a:map.a+1});
            }}>증가1</button>
            <button onClick={()=>{                
                setMap({...map, b:map.b+2});
            }}>증가1</button>
            <button onClick={()=>{                
                setMap({...map, c:map.c+3});
            }}>증가1</button>
        </div>
    );
};

export default Number3;
