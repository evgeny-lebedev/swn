import React, {useState} from "react";
import styles from './Test.module.css'
import TestSettings from "../TestSettings/TestSettings";
import {words} from "../../Words/Words";

function Test({words}) {

    const [testWords, setTestWords] = useState(getWords(words));
    const [test, setTest] = useState(true);
    const [errors, setErrors] = useState(0);
    const testFinished = (errors) => {
        setErrors(errors);
        setTest(false);
    };
    const handleAgainClick = () => {
        setTest(true);
        setTestWords(getWords(words));
    };
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(2);

    return (
        <div className={styles.test}>
            <TestSettings from={from} setFrom={setFrom} to={to} setTo={setTo}/>

            {
                test ? <Variants key={from} words={testWords} from={from} to={to} testFinished={testFinished}/>
                    : <Result errors={errors} again={handleAgainClick}/>
            }

        </div>
    )
}


function Variants({words, from, to, testFinished}) {

    const [errors, setErrors] = useState(0);
    const [currentId, setCurrentId] = useState(0);
    const [progress, setProgress] = useState(0);
    const handleVariantClick = (id) => () => {
        if (id === currentId) {
            if (currentId === words.length - 1) {
                testFinished(errors);
            } else if (currentId < words.length - 1) {
                setCurrentId(currentId + 1);
                setProgress((currentId + 1) * 100 / words.length);
            }
        } else {
            setErrors(errors + 1);
        }
    };


    return (
        <div className={styles.variants} key={from}>
            <Progress progress={progress}/>
            <div className={styles.wrapper}>
                <div className={styles.headline}>

                    {
                        from === 1 ? words[currentId].icelandic
                            : from === 2 ? words[currentId].english[0]
                            : from === 3 && words[currentId].russian[0]

                    }

                </div>
                <ul>

                    {
                        words[currentId].variants.map(variant => {
                            return (
                                <li key={variant.icelandic} onClick={handleVariantClick(variant.id)}>

                                    {
                                        to === 1 ? variant.icelandic
                                            : to === 2 ? variant.english[0]
                                            : to === 3 && variant.russian[0]
                                    }

                                </li>
                            )
                        })
                    }

                </ul>

            </div>
        </div>
    )
}

function Progress({progress}) {

    return (
        <div className={styles.progressBar} style={{width: `${progress}%`}}/>
    )
}

function Result({errors, again}) {

    return (
        <div className={styles.result}>
            <div>{`${words.mistake}: ${errors}`}</div>
            <button onClick={again}>{words.again}</button>
        </div>
    )
}


function getWords(words) {
    const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());
    const shuffledWords = shuffleArray(words);
    const normalizedWords = shuffledWords.map((word, index) => {
        const normalizedWord = {...word};
        normalizedWord.id = index;
        return normalizedWord;
    });
    const calculateVariants = (words, index) => {
        const arr = [...words];
        arr.splice(index, 1);
        return shuffleArray([...shuffleArray(arr).slice(0, 4), words[index]]);
    };

    return normalizedWords.map((word, index) => {
        const variants = shuffleArray(calculateVariants(normalizedWords, index));
        const result = {...word};
        result.variants = variants;
        return result;
    });
}


export default Test;