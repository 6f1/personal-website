import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonLabel, IonRouterLink, IonIcon } from '@ionic/react';
import Brand from '../components/Brand';
import ThemeControl from '../components/ThemeControl';
import ProjectPreview from '../components/ProjectPreview';
import { logoGithub, logoLinkedin } from 'ionicons/icons';
import './Home.css';

const projects = [
    {
        title : "ProtoPlay",
        source : "/projects/protoplay-preview.png",
        projectLink : "https://protoplay.tv",
        infoLink : "/protoplay"
    },
    {
        title : "Graphic Design",
        source : "/projects/design-preview.png",
        projectLink : "",
        infoLink : "/design"
    },
    {
        title : "",
        source : "",
        projectLink : "",
        infoLink : ""
    }
];

const Home: React.FC = () => {
    useEffect(() => {
        document.title = "Samuel Shoemaker";
    },[ ]);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className="toolbar-inner-container">
                        <div>
                            <Brand visible={true}/>
                        </div>
                        <ThemeControl/>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen forceOverscroll={true}>
                <IonHeader collapse="condense" translucent={true}>
                    <IonToolbar>
                        <IonTitle size="large" color="primary">Samuel Shoemaker</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {projects.map((project, index) => {
                    return (
                        <ProjectPreview {...project}/>
                    );
                })}
                <div className="page-footer">
                    <div className="e-link-container">
                        <IonRouterLink href="https://github.com">
                            <IonIcon icon={logoGithub}/>
                        </IonRouterLink>
                    </div>
                    <div className="e-link-container">
                        <IonRouterLink href="https://linkedin.com">
                            <IonIcon icon={logoLinkedin}/>
                        </IonRouterLink>
                    </div>
                    <IonLabel>© Samuel Shoemaker</IonLabel>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
