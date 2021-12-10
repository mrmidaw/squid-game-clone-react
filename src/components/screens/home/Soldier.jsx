import React from "react";
import solderImg from '../../../assets/images/soldier.png';

export const Soldier = () => {
    return (
        <div className="absolute  -bottom-12 -right-12">
            <img draggable={false} alt='' src={solderImg} width={360} />
        </div>
    );
};