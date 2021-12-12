import React from "react";
import { Layout } from '../../layout/Layout';
import { Content } from "./Content";
import { Details } from "./Details";
import { Soldier } from "./Soldier";
import { Carousel } from '../home/carousel/Carousel';

export const Home = () => {
    return (
        <Layout>
            <Content />
            <Carousel />
            <Soldier />
            <Details />
        </Layout>
    );
};