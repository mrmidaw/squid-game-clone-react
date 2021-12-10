import React from "react";
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si';


const styleIcon = 'text-white hover:opacity-100 opacity-80 duration-300 ease-in-out transition-opacity';

const socialMedias = [
    {
        icon: <SiInstagram size='17' className={styleIcon} />,
        link: '/inst',
    },
    {
        icon: <SiFacebook size='17' className={styleIcon} />,
        link: '/fb',
    },
    {
        icon: <SiTwitter size='17' className={styleIcon} />,
        link: '/tw',
    }
]

export const SocialMedia = () => {
    return (
        <div className="absolute right-1 z-10" style={{ top: '40%' }}>
            {socialMedias.map(({ icon, link }) => (
                <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="my-10 block"
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};