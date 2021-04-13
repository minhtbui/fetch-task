import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <title>Account Profile</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />

            {children}
        </div>
    );
};

export default Layout;
