import NotFound from '../Pages/NotFound/NotFound';
import Home from '../Pages/Home/Home';
import Nouns from '../Pages/Nouns/Nouns';
import LearnNouns from "../Pages/Nouns/LearnNouns/LearnNouns";
import RepeatNouns from "../Pages/Nouns/RepeatNouns/RepeatNouns";
import AllNouns from "../Pages/Nouns/AllNouns/AllNouns";
import Verbs from "../Pages/Verbs/Verbs";
import LearnVerbs from "../Pages/Verbs/LearnVerbs/LearnVerbs";
import RepeatVerbs from "../Pages/Verbs/RepeatVerbs/RepeatVerbs";
import AllVerbs from "../Pages/Verbs/AllVerbs/AllVerbs";
import Adjectives from "../Pages/Adjectives/Adjectives";
import LearnAdjectives from "../Pages/Adjectives/LearnAdjectives/LearnAdjectives";
import RepeatAdjectives from "../Pages/Adjectives/RepeatAdjectives/RepeatAdjectives";
import AllAdjectives from "../Pages/Adjectives/AllAdjectives/AllAdjectives";

const notFoundPath = '*';
const homePath = '/';
const nounsPath = '/nouns';
const learnNounsPath = `${nounsPath}/learn`;
const repeatNounsPath = `${nounsPath}/repeat`;
const allNounsPath = `${nounsPath}/all`;
const verbsPath = '/verbs';
const learnVerbsPath = `${verbsPath}/learn`;
const repeatVerbsPath = `${verbsPath}/repeat`;
const allVerbsPath = `${verbsPath}/all`;
const adjectivesPath = '/adjectives';
const learnAdjectivesPath = `${adjectivesPath}/learn`;
const repeatAdjectivesPath = `${adjectivesPath}/repeat`;
const allAdjectivesPath = `${adjectivesPath}/all`;

export const routes = {
    noteFound: {
        path: notFoundPath,
        component: NotFound
    },
    home: {
        path: homePath,
        component: Home
    },
    nouns: {
        path: nounsPath,
        component: Nouns,
        routes: {
            learn: {
                path: learnNounsPath,
                component: LearnNouns
            },
            repeat: {
                path: repeatNounsPath,
                component: RepeatNouns
            },
            all: {
                path: allNounsPath,
                component: AllNouns
            }
        }
    },
    verbs: {
        path: verbsPath,
        component: Verbs,
        routes: {
            learn: {
                path: learnVerbsPath,
                component: LearnVerbs
            },
            repeat: {
                path: repeatVerbsPath,
                component: RepeatVerbs
            },
            all: {
                path: allVerbsPath,
                component: AllVerbs
            },
        }
    },
    adjectives: {
        path: adjectivesPath,
        component: Adjectives,
        routes: {
            learn: {
                path: learnAdjectivesPath,
                component: LearnAdjectives
            },
            repeat: {
                path: repeatAdjectivesPath,
                component: RepeatAdjectives
            },
            all: {
                path: allAdjectivesPath,
                component: AllAdjectives
            },
        }
    }
};