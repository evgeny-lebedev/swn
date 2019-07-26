import React from "react";
import styles from './Headline.module.css'

function Headline({headline}) {

    return (
        <div className={styles.container}>
            <div className={styles.headline}>{headline}</div>
        </div>
    )
}

export default Headline;