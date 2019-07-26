import React, {useState} from "react";
import styles from './LearnVerbs.module.css'
import ListOfWords from "../../../Components/ListOfWords/ListOfWords";
import data from '../../../Data/Verbs';
import {words} from "../../../Words/Words";
import Headline from "../../../Components/Headline/Headline";
import ContentType from "../../../Components/ContentType/ContentType";
import Test from "../../../Components/Test/Test";

function LearnVerbs() {

    const [type, setType] = useState(1);
    const verbs = data.filter((verb) => !verb.learned).slice(0,10);

    return (
        <div className={styles.learnVerbs}>
            <Headline headline={`${words.learn} ${words.verbs}`}/>
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

export default LearnVerbs;