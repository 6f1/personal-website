import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Projects from './pages/Projects';
import ProjectInfo from './pages/ProjectInfo';

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

const App: React.FC = () => {
    useEffect(() => {
        document.title = "Samuel Shoemaker";
    },[ ]);
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
                <Projects />
            </Route>
            <Route exact path="/projects">
                <Projects/>
            </Route>
            <Route exact path="/projects/protoplay">
                <ProjectInfo project="protoplay"/>
            </Route>
            <Route exact path="/projects/design">
                <ProjectInfo project="design"/>
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
};

export default App;
