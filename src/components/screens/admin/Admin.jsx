import React from "react";
import { Layout } from '../../layout/Layout';
import { Table } from './Table';
import { Form } from './Form';
import { motion } from 'framer-motion';


export const Admin = () => {
    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                animate={{ opacity: 1 }}
                className="flex mt-10 mx-10 justify-between"
                style={{ minHeight: 700 }}
            >
                <Table />
                <Form />
            </motion.div>
        </Layout>
    );
};