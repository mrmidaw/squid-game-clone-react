import React from "react";
import { Layout } from '../../layout/Layout';
import { Table } from './Table';
import { Form } from './Form';


export const Admin = () => {
    return (
        <Layout>
            <div className="flex mt-10 mx-10 justify-between" style={{ minHeight: 700 }}>
                <Table />
                <Form />
            </div>
        </Layout>
    );
};