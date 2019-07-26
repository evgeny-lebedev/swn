import React, {useState} from 'react';
import styles from './TestSettings.module.css'
import {words} from "../../Words/Words";
import {useOnClickOutside} from "../../Hooks/UseOnClickOutside";

function TestSettings({from, setFrom, to, setTo}) {

    const [toExpanded, toggleTo] = useState(false);
    const [ref] = useOnClickOutside(()=>toggleTo(false));
    const handleFromIcelandicClick = () => {
        to === 1 && setTo(2);
        toggleTo(!toExpanded);
        setFrom(1);
    };
    const handleFromEnglishClick = () => {
        toggleTo(false);
        setFrom(2);
        setTo(1);
    };
    const handleFromRussianClick = () => {
        toggleTo(false);
        setFrom(3);
        setTo(1);
    };
    const handleToEnglishClick = () => {
        setTo(2);
        toggleTo(false);
    };
    const handleToRussianClick = () => {
        setTo(3);
        toggleTo(false);
    };

    return (
        <div className={styles.testSettings}>
            <div className={styles.container}>
                <div className={styles.from}>
                    <label ref={ref}>
                        <input type={'checkbox'} checked={from === 1} onChange={handleFromIcelandicClick}/>
                        <div className={styles.checkbox}>{words.icelandic}</div>

                        {
                            toExpanded && from === 1 && (
                                <div className={styles.to}>
                                    <label>
                                        <input type={'checkbox'} checked={to === 2} onChange={handleToEnglishClick}/>
                                        <div className={styles.checkbox}>{words.english}</div>
                                    </label>
                                    <label>
                                        <input type={'checkbox'} checked={to === 3} onChange={handleToRussianClick}/>
                                        <div className={styles.checkbox}>{words.russian}</div>
                                    </label>
                                </div>
                            )
                        }

                    </label>
                    <label>
                        <input type={'checkbox'} checked={from === 2} onChange={handleFromEnglishClick}/>
                        <div className={styles.checkbox}>{words.english}</div>
                    </label>
                    <label>
                        <input type={'checkbox'} checked={from === 3} onChange={handleFromRussianClick}/>
                        <div className={styles.checkbox}>{words.russian}</div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TestSettings;