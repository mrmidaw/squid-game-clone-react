import React from "react";
import { Layout } from '../../layout/Layout';
import { Content } from "./Content";
import { Details } from "./Details";
import { Soldier } from "./Soldier";

export const Home = () => {
    return (
        <Layout>
            <div style={{ height: '67vh' }}>
                <Content />
                {/* <Carousel/> */}
                <Soldier />
                <Details />
            </div>
        </Layout>
    );
};