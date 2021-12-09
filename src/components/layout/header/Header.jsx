import React from "react";
import { Logo } from './Logo';
import { Navigation } from "./navigation/Navigation";
import { Hamburger } from './Hamburger';

export const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <Logo />
            <Navigation />
            <Hamburger />
        </div>
    );
};