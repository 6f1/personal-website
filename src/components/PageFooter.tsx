import { IonRouterLink, IonIcon, IonLabel } from '@ionic/react';
import appData from '../dataConstants';
import './PageFooter.css';

const PageFooter : React.FC = () => (
    <div className="p-footer-outer">
        <div className="page-footer">
            {appData.externalLinks.map((entry) => (
                <div className="e-link-container" key={entry.icon}>
                    <IonRouterLink href={entry.link}>
                        <IonIcon icon={entry.icon}/>
                    </IonRouterLink>
                </div>
            ))}
            <IonLabel>© Samuel Shoemaker</IonLabel>
        </div>
    </div>
);

export default PageFooter;
