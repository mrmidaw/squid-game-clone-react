import React from "react";
import BgImage from '../../assets/images/bg-squid-game.jpeg';
import { Header } from './header/Header';
import { SocialMedia } from "./SocialMedia";
import { Modal } from "../screens/home/Modal";

export const Layout = ({ children }) => {
    return (
        <div className="p-12 relative bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${BgImage})`
            }}
        >
            < div className="gradient" />
            <div className="relative z-1">
                <Header />
                <SocialMedia />
                <Modal />
                {children}
            </div>
        </div >
    );
};