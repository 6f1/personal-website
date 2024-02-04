import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState, useEffect, createContext } from 'react';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import ProjectInfo from './pages/ProjectInfo';
import { Storage } from '@ionic/storage';
import appData from './dataConstants';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Additional fonts */
import './fonts/lexend-peta/lexend-peta.css';

export const ThemeContext = createContext('dark');

const App: React.FC = () => {
    /* Themeing system logic */
    const [ selectedTheme, setSelectedTheme ] = useState('dark');
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => setSelectedTheme((e.matches) ? 'dark' : 'light'));
        (async () => {
            const store = new Storage();
            await store.create();
            const data = await store.get('irtcSelectedTheme');
            ( data ) ? setSelectedTheme(data) : await store.set('irtcSelectedTheme', selectedTheme);
        })();
    },[ ]);

    // make changes to theme visible/active
    useEffect(() => {
        document.body.classList.toggle('dark', (selectedTheme === 'dark'));
    },[ selectedTheme ]);

    // allow theme changes from anywhere
    (window as any).triggerThemeChange = async (theme : 'light' | 'dark') => {
        const store = new Storage();
        await store.create();
        await store.set('irtcSelectedTheme', theme);
        setSelectedTheme(theme);
    };
    (window as any).getCurrentTheme = () => selectedTheme;
    console.log(selectedTheme);
    return (
        <ThemeContext.Provider value={selectedTheme}>
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route exact path="/personal-website/">
                            <Landing />
                        </Route>
                        <Route exact path="/projects">
                            <Projects/>
                        </Route>
                        {appData.projectData.map((project) => (
                            <Route exact path={project.infoLink} key={project.infoLink}>
                                <ProjectInfo {...project}/>
                            </Route>
                        ))}
                        <Route>
                            <Redirect to="/personal-website/" />
                        </Route>
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        </ThemeContext.Provider>
    );
};

export default App;
