import Template from './Template';
import CleanImage from '../components/CleanImage';
import Brand from '../components/Brand';
import { IonLabel, IonText, IonButton, IonIcon } from '@ionic/react';
import { download, briefcase } from 'ionicons/icons';
import appData from '../dataConstants';
import './Landing.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Landing : React.FC = () => {
    const theme = useContext(ThemeContext);
    
    return (
        <Template title="Samuel Shoemaker">
            <div className="landing-top">
                <CleanImage 
                    source={theme === 'dark' ? "/personal-website/assets/backgrounds/pexels-irina-iriser-1366957.jpg" : "/personal-website/assets/backgrounds/pexels-aleksandar-pasaric-325185.jpg"}
                />
            </div>
            <div className="landing-page-splitter">
                <Brand visible={true} size={78}/>
            </div>
            <div className="landing-bottom">
                <div className="about-container">
                    <IonLabel color="primary">About</IonLabel>
                    <div className="a-inner-two">
                        <IonText style={{ whiteSpace: 'pre-line' }}>{ appData.landingText }</IonText>
                        <div className="button-container">
                            <IonButton fill="outline" href={appData.resumeLink} download="SamuelShoemaker.docx">
                                {"Résumé"}
                                <IonIcon icon={download}/>
                            </IonButton>
                            <IonButton fill="outline" color="tertiary" routerLink="/personal-website/projects" href="/personal-website/projects">
                                {"Projects"}
                                <IonIcon icon={briefcase}/>
                            </IonButton>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default Landing;
