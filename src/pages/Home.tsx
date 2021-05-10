import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Brand from '../components/Brand';
import ThemeControl from '../components/ThemeControl';
import './Home.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className="toolbar-inner-container">
                        <Brand/>
                        <ThemeControl/>
                    </div>
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
