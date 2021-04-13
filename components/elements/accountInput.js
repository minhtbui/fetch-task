import React from 'react';
import styles from '../../styles/accountProfile.module.scss';

const accountInput = ({ title, name, type, isLock, value }) => {
    return type === 'select' ? (
        <div className={styles.inputGroup}>
            <label htmlFor={name}>{title}</label>
            <select name={name} id={name}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
        </div>
    ) : type === 'password' ? (
        <div className={styles.inputGroup}>
            <label htmlFor={name}>{title}</label>
            <span>Change Password</span>
            {isLock && <img src='/ico-lock.svg' />}
        </div>
    ) : (
        <div className={styles.inputGroup}>
            <label htmlFor={name}>{title}</label>
            <input type={type} name={name} defaultValue={value} />
            {isLock && <img src='/ico-lock.svg' />}
        </div>
    );
};

export default accountInput;
