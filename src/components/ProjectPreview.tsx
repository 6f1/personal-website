import { IonLabel, IonButton } from '@ionic/react';
import CleanImage from './CleanImage';
import './ProjectPreview.css';

const ProjectPreview : React.FC<{ title : string, source : string, infoLink : string, projectLink : string }> = ({ title, source, infoLink, projectLink }) => {
    return (
        <div className="project-preview-container">
            <CleanImage source={source} blur={true}/>
            <div className="project-preview-overlay">
                <div style={{ display : "flex", flexDirection : "column" }}>
                    <IonLabel color="primary">{title}</IonLabel>
                    <IonButton routerDirection="forward" routerLink={infoLink} fill="solid">
                        View Info
                    </IonButton>
                    <IonButton routerDirection="forward" href={projectLink} fill="solid" color="secondary">
                        Visit {title}
                    </IonButton>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
