import Template from './Template';
import CleanImage from '../components/CleanImage';
import { IonLabel, IonText } from '@ionic/react';
import { ProjectDataEntry } from '../types/Data';
import './ProjectInfo.css';

const ProjectWorkEntry : React.FC<{ previewAsset : string, title : string, description : string }> = ({ previewAsset, title, description }) => (
    <div className="project-work-entry">
        <CleanImage source={previewAsset} size={{ x : 64, y : 64 }}/>
        <IonText className="pwe-title">{title}</IonText>
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
                <div className="intro-text-container">
                    <IonLabel color="primary">Project Info</IonLabel>
                    <IonText>{props.description}</IonText>
                </div>
                <div className="body-text-container">
                    <IonLabel color="primary">My Work</IonLabel>
                    {props.workEntries.map(entry =>
                        <ProjectWorkEntry key={entry.previewAsset} {...entry}/>
                    )}
                </div>
            </div>
        </div>
    </Template>
);

export default ProjectInfo;
