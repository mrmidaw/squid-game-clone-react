import React from "react";
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/objects.png';

export const Logo = () => {
    return (
        <Link to='/'>
            <img alt='' src={LogoImg} width='90' draggable={false} />
        </Link>
    );
};