import React, {useState} from 'react';
import styles from './ListOfWords.module.css'

function ListOfWords({headline, words}) {

    // function shuffle(a) {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }
    //
    // console.log(JSON.stringify(shuffle(verbs)));

    return (
        <div className={styles.listOfWords}>

            {
                headline && <div className={styles.headline}>{headline}</div>
            }

            <ul>

                {
                    words.map(element => <Words {...element} key={element.icelandic}/>)
                }

            </ul>
        </div>
    );
}


function Words(props) {

    const [language, setLanguage] = useState(1);
    const handleClick = () => {
        setLanguage(language === 1 ? 2 : language === 2 ? 3 : 1);
        setTimeout(() => setLanguage(1), 2000);
    };

    return (
        <li onClick={handleClick}>
            <span>

                {
                    language === 1 ? props.icelandic
                        : language === 2 ? props.english[0]
                        : language === 3 && props.russian[0]
                }

            </span>
        </li>
    )
}

export default ListOfWords;