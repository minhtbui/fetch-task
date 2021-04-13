import React from 'react';
import Link from 'next/link';
import styles from '../../styles/dashBoard.module.scss';
import AccountProfile from '../elements/AccountProfile';

const Dashboard = ({ children }) => {
    return (
        <div class={styles.tabContainer}>
            <div className={styles.tabHead}>
                <Link href='/'>
                    <a className={styles.active}>
                        <img src='/ico-user.svg' alt='' />
                        <p>Account Profile</p>
                    </a>
                </Link>
                <Link href='/bank'>
                    <a>
                        <img src='/ico-museum.svg' alt='' />
                        <p>Update Bank Detail</p>
                    </a>
                </Link>
                <Link href='/inbox'>
                    <a>
                        <img src='/ico-mail.svg' alt='' />
                        <p>Inbox</p>
                    </a>
                </Link>
            </div>
            <div className={styles.tabBody}>
                <AccountProfile />
            </div>
        </div>
    );
};

export default Dashboard;
