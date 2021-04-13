import React from 'react';
import AccountAvatar from './accountAvatar';
import CommunicationDetail from './communicationDetail';
import AccountDetail from './accountDetail';
import HomeAddress from './homeAddress';
import styles from '../../styles/accountProfile.module.scss';

const AccountProfile = () => {
    return (
        <form className={styles.accountProfileContainer}>
            <AccountAvatar />
            <CommunicationDetail />
            <AccountDetail />
            <HomeAddress />
            <div className={styles.confirmBox}>
                <h4>
                    Would you like to get the latest promos, updates, and
                    offers?
                </h4>
                <label htmlFor='offer'>
                    <input type='checkbox' id='offer' />
                    Yes. Send me the latest promotions, updates and offers.
                </label>

                <div className={styles.btnGroup}>
                    <button className={styles.save}>Saves Change</button>
                    <button className={styles.cancel}>Cancel</button>
                </div>
            </div>
        </form>
    );
};

export default AccountProfile;
