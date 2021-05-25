import Template from './Template';
import CleanImage from '../components/CleanImage';
import Brand from '../components/Brand';
import { IonLabel, IonText, IonButton, IonIcon } from '@ionic/react';
import { download, briefcase } from 'ionicons/icons';
import appData from '../dataConstants';
import './Landing.css';

const Landing : React.FC = () => (
    <Template title="Samuel Shoemaker">
        <div className="landing-top">
            <CleanImage source={"/assets/landing-image.jpg"}/>
        </div>
        <div className="landing-page-splitter">
            <Brand visible={true} size={78}/>
        </div>
        <div className="landing-bottom">
            <div className="about-container">
                <IonLabel color="primary">About</IonLabel>
                <div className="a-inner-two">
                    <IonText>{ appData.landingText }</IonText>
                    <div className="button-container">
                        <IonButton fill="outline" href={appData.resumeLink} download="resume.txt">
                            {"Résumé"}
                            <IonIcon icon={download}/>
                        </IonButton>
                        <IonButton fill="outline" color="tertiary" routerLink="/projects" href="/projects">
                            {"Projects"}
                            <IonIcon icon={briefcase}/>
                        </IonButton>
                    </div>
                </div>
            </div>
        </div>
    </Template>
);

export default Landing;
