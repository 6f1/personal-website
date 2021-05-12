import Template from './Template';
import CleanImage from '../components/CleanImage';
import Brand from '../components/Brand';
import { IonLabel, IonText, IonButton, IonIcon } from '@ionic/react';
import { download, briefcase } from 'ionicons/icons';
import './Landing.css';

const landingText = "Relative diplomat disaster compete aluminium cunning. Pier reach whip presentation rich loss prey. Skilled quote overeat carry grudge able. Presidency residence ambiguity zero helicopter. Kill bald sweep assault bat maze. Sleep as battlefield team housing. Entry reluctance penalty specimen clear tidy coincide. Instrument accent medicine minority exclude swipe lonely premium.";

const Landing : React.FC = () => (
    <Template title="Samuel Shoemaker">
        <div className="landing-top">
            <CleanImage source={"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}/>
        </div>
        <div className="landing-page-splitter">
            <Brand visible={true} size={78}/>
        </div>
        <div className="landing-bottom">
            <div className="about-container">
                <IonLabel color="primary">About</IonLabel>
                <div className="a-inner-two">
                    <IonText>{ landingText }</IonText>
                    <div className="button-container">
                        <IonButton fill="outline" href="/resume.txt" download="resume.txt">
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
