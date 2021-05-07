import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
    // true if dark theme, false if light theme
    const [ selectedTheme, setSelectedTheme ] = useState(false);

    // handle theme changes from outside of app
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => setSelectedTheme(e.matches) );
    },[]);

    // handle theme changes from inside of app
    useEffect(() => {
        document.body.classList.toggle('dark', selectedTheme);
    },[ selectedTheme ]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SS</IonTitle>
          <IonToggle checked={selectedTheme} onIonChange={(e) => setSelectedTheme(e.detail.checked)}/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
