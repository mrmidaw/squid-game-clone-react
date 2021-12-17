import React from "react";
import MasterImg from '../../../assets/images/master.jpg';
import { Layout } from "../../layout/Layout";

export const ComingSoon = () => {
    return (
        <Layout>
            <div className="w-1/2 h-1/2 flex mt-10 ml-96 ">
                <img alt="" src={MasterImg} />
            </div>
        </Layout>
    );
};