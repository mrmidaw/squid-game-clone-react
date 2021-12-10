import React from "react";
import { Link } from 'react-router-dom';
import { list } from './list';
import netflixLogo from '../../../../assets/images/netflix-logo.png';

export const Navigation = () => {
    return (
        <ul className="list-none flex items-center">
            {list.map((title, i) => (
                <li key={title} className="inline-block px-4">
                    {i !== 2 ?
                        <Link
                            to={`/${title.toLowerCase()}`}
                            className="block text-white opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                        >
                            {title}
                        </Link>
                        : (<img alt='' src={netflixLogo} width={35} draggable={false} className="block mx-5" />)}
                </li>
            ))}

        </ul>
    );
};