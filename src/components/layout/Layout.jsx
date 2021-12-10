import React from "react";
import BgImage from '../../assets/images/bg-squid-game.jpeg';
import { Header } from './header/Header';
import { SocialMedia } from "./SocialMedia";

export const Layout = ({ children }) => {
    return (
        <div className="p-12 relative bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${BgImage})`,
                // backgroundPositionX: -30,
            }}
        >
            < div className="gradient" />
            <div className="relative z-1">
                <Header />
                <SocialMedia />
                {children}
            </div>
        </div >
    );
};