import React from 'react';
import styles from '../../styles/accountProfile.module.scss';

const HomeAddress = () => {
    return (
        <div className={styles.homeAddress}>
            <div className={styles.wrapLeft}>
                <h3>Home Address</h3>
                <label htmlFor='address'>
                    Address
                    <textarea type='text' id='address' value='Address' />
                </label>
            </div>
            <div className={styles.wrapRight}>
                <label htmlFor='city'>
                    Town/City
                    <input type='text' id='city' value='Town/City' />
                </label>
                <label htmlFor='postcode'>
                    Postal Code
                    <input type='nunmber' id='postcode' value='00000' />
                </label>
            </div>
        </div>
    );
};

export default HomeAddress;
