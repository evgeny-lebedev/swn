import React from 'react';
import styles from './ContentType.module.css'
import {words} from "../../Words/Words";

function ContentType({type, setType}) {

    const handleChange = () => {
        type === 1 && setType(2);
        type === 2 && setType(1);
    };

    return (
        <div className={styles.contentType}>
            <div className={styles.container}>
                <label>
                    <input type={'checkbox'} checked={type === 1} onChange={handleChange}/>
                    <div className={styles.checkbox}>{words.all}</div>
                </label>
                <label>
                    <input type={'checkbox'} checked={type === 2} onChange={handleChange}/>
                    <div className={styles.checkbox}>{words.test}</div>
                </label>
            </div>

        </div>
    )
}

export default ContentType;