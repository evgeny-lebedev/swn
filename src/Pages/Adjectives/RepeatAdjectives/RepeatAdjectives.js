import React, {useState} from "react";
import styles from './RepeatAdjectives.module.css'
import data from '../../../Data/Nouns';
import ListOfWords from "../../../Components/ListOfWords/ListOfWords";
import {words} from "../../../Words/Words";
import Headline from "../../../Components/Headline/Headline";
import ContentType from "../../../Components/ContentType/ContentType";
import Test from "../../../Components/Test/Test";

function RepeatAdjectives() {
    const nouns = data.filter((noun) => noun.learned);
    const maleNouns = nouns.filter(noun => noun.gender === 1);
    const femaleNouns = nouns.filter(noun => noun.gender === 2);
    const neuterNouns = nouns.filter(noun => noun.gender === 3);
    const [type, setType] = useState(1);

    return (
        <div className={styles.repeatAdjectives}>
            <Headline headline={`${words.repeat} ${words.adjectives}`}/>
            <ContentType type={type} setType={setType}/>

            {
                type === 1 ? (
                        <div className={styles.listsContainer}>
                            <ListOfWords headline={words.male} words={maleNouns}/>
                            <ListOfWords headline={words.female} words={femaleNouns}/>
                            <ListOfWords headline={words.neuter} words={neuterNouns}/>
                        </div>
                    )
                    : type === 2 && (
                    <Test words={nouns}/>
                )

            }

        </div>
    )
}

export default RepeatAdjectives;