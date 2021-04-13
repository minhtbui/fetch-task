import React, { useState } from 'react';
import styles from '../../styles/accountProfile.module.scss';
import AccountInput from './accountInput';

const AccountDetail = () => {
    const [accountData, setAccountData] = useState({
        username: 'howdycandidate',
        firstname: 'howdycandidate',
        dob: '12/10/1999',
        country: 'Chile',
        currency: 'THB',
        lastname: 'pewpew',
        email: 'email@example.com',
    });
    return (
        <div className={styles.accountDetail}>
            <h3>Account Details</h3>
            <AccountInput
                title='Username'
                name='username'
                type='text'
                value={accountData.username}
                isLock
            />
            <AccountInput
                title='First Name'
                name='firstname'
                type='text'
                value={accountData.firstname}
                isLock
            />
            <AccountInput
                title='Date of Birth'
                name='dob'
                type='date'
                value={accountData.dob}
                isLock
            />
            <AccountInput title='Password' name='password' type='password' />
            <AccountInput
                title='Country'
                name='country'
                type='text'
                value={accountData.country}
                isLock
            />
            <AccountInput
                title='Currency'
                name='currency'
                type='text'
                value={accountData.currency}
                isLock
            />
            <AccountInput
                title='Last Name'
                name='lastname'
                type='text'
                value={accountData.lastname}
                isLock
            />
            <AccountInput
                title='E-Mail'
                name='email'
                type='email'
                value={accountData.email}
                isLock
            />
            <AccountInput title='Gender' name='gender' type='select' />
        </div>
    );
};

export default AccountDetail;
