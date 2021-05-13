import Template from './Template';
import CleanImage from '../components/CleanImage';
import { IonLabel, IonText } from '@ionic/react';
import { ProjectDataEntry } from '../types/Data';
import './ProjectInfo.css';

const ProjectWorkEntry : React.FC<{ previewAsset : string, description : string }> = ({ previewAsset, description }) => (
    <div className="project-work-entry">
        <CleanImage source={previewAsset}/>
        <IonText>{description}</IonText>
    </div>
);

const ProjectInfo : React.FC<ProjectDataEntry> = (props) => (
    <Template title={props.title}>
        <div className="pi-container">
            <div className="project-banner">
                <CleanImage source={props.bannerAsset}/>
            </div>
            <div className="main-text-container">
                <div>
                    <IonLabel color="primary">Info</IonLabel>
                    <IonText>{props.description}</IonText>
                </div>
                <div>
                    <IonLabel color="primary">My Work</IonLabel>
                    {props.workEntries.map((entry) => (
                        <ProjectWorkEntry key={entry.previewAsset} {...entry}/>
                    ))}
                </div>
            </div>
        </div>
    </Template>
);

export default ProjectInfo;
