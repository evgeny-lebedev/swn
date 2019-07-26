import React, {useState} from "react";
import styles from './RepeatVerbs.module.css'
import Headline from "../../../Components/Headline/Headline";
import {words} from "../../../Words/Words";
import ContentType from "../../../Components/ContentType/ContentType";
import ListOfWords from "../../../Components/ListOfWords/ListOfWords";
import Test from "../../../Components/Test/Test";
import data from '../../../Data/Verbs'

function RepeatVerbs() {

    const [type, setType] = useState(1);
    const verbs = data.filter((verb) => verb.learned);

    return (
        <div className={styles.repeatVerbs}>
            <Headline headline={`${words.repeat} ${words.verbs}`}/>

            <ContentType type={type} setType={setType}/>

            {
                type === 1 ? (
                        <ListOfWords words={verbs}/>
                    )
                    : type === 2 && (
                    <Test words={verbs}/>
                )

            }

        </div>
    )
}

export default RepeatVerbs;