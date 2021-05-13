import { IonLabel, IonButton } from '@ionic/react';
import CleanImage from './CleanImage';
import { ProjectDataEntry } from '../types/Data';
import './ProjectPreview.css';

const ProjectPreview : React.FC<ProjectDataEntry> = (props) => {
    return (
        <div className="project-preview-container">
            <CleanImage source={props.previewAsset} blur={true}/>
            <div className="project-preview-overlay">
                <div style={{ display : "flex", flexDirection : "column" }}>
                    <IonLabel color="primary">{props.title}</IonLabel>
                    <IonButton routerDirection="forward" routerLink={props.infoLink} fill="solid">
                        View Info
                    </IonButton>
                    {(props.projectLink)?
                        <IonButton routerDirection="forward" href={props.projectLink} fill="solid" color="secondary">
                            Visit {props.title}
                        </IonButton>
                    :null}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
