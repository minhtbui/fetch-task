import React from 'react';
import styles from '../../styles/accountProfile.module.scss';

const AccountAvatar = () => {
    return (
        <div className={styles.accountAvatar}>
            <img src='/profile-avatar.png' alt='' />
            <h2>Howdycandidate</h2>
            <h6>THB 565.000</h6>
        </div>
    );
};

export default AccountAvatar;
