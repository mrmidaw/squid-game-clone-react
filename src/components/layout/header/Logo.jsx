import React from "react";
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/objects.png';
import { motion } from 'framer-motion';

export const Logo = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
        >
            <Link to='/'>
                <img alt='' src={LogoImg} width='90' draggable={false} />
            </Link>
        </motion.div>

    );
};