import React from 'react';
import styles from '../../styles/accountProfile.module.scss';

const CommunicationDetail = () => {
    return (
        <div className={styles.communicationDetail}>
            <h3>Communication Details</h3>
            <label htmlFor='phoneNo'>
                Mobile Phone
                <input type='number' id='phoneNo' value='0000000' />
            </label>
            <label htmlFor='language'>
                Language
                <select name='language' id='language'>
                    <option value='sg'>Singapore</option>
                    <option value='vn'>Vietnam</option>
                    <option value='aus'>Australia</option>
                </select>
            </label>
        </div>
    );
};

export default CommunicationDetail;
