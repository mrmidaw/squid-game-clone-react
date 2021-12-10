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
                    “I Dont Have A Home To Go Back To. In Here, I Stand A Chance At Least. But Out There? I Got Nothing Out There.” – Player 322
                </p>
            </div>
        </div>
    );
};