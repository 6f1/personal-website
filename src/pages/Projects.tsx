import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonRouterLink, IonIcon } from '@ionic/react';
import Brand from '../components/Brand';
import ThemeControl from '../components/ThemeControl';
import ProjectPreview from '../components/ProjectPreview';
import PageFooter from '../components/PageFooter';
import './Projects.css';

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
];

const Projects: React.FC = () => {
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
                {projects.map((project) => (
                    <ProjectPreview {...project}/>
                ))}
                <PageFooter />
            </IonContent>
        </IonPage>
    );
};

export default Projects;
