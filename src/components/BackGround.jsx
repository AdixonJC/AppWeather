import React, { useEffect, useState } from 'react';
import handleBackgroundChange from '../helpersJs/handleBackgroundChange';

const BackGround = ({icon}) => {
    const [backgroundChange, setBackgroundChange] = useState("")
    
    useEffect(()=> {
        handleBackgroundChange(icon,setBackgroundChange)
    },[icon])
    
    return (
        <div>
            { icon ?
                <video autoPlay={true} muted loop className="videos">
                    <source src={backgroundChange} type="video/mp4"/>
                </video> : null
            }
        </div>
    );
};

export default BackGround;