import React from "react";
import logoImg from '../../../assets/images/squid-game-logo.png';
import objectsLogog from '../../../assets/images/objects-near-content.png';

export const Content = () => {
    return (
        <div className="mt-20 w-1/2">
            <img draggable={false} alt="" src={logoImg} className="mb-10 -ml-12" />
            <div className="flex ml-5">
                <img draggable={false} alt="" src={objectsLogog} className="mr-8 h-auto block" style={{ maxWidth: 50 }} />
                <p className="text-white opacity-70 leading-8 text-lg" style={{ maxWidth: '60%' }}>
                    “I dont have a home to go back to. In here, i stand a chance at least. But out there? I got nothing out there.” – Player 322
                </p>
            </div>
        </div>
    );
};