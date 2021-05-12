import { IonRouterLink, IonIcon, IonLabel } from '@ionic/react';
import { mail, logoGithub, logoLinkedin } from 'ionicons/icons';
import './PageFooter.css';

const externalLinks = [
    {
        link : "mailto:samshoemaker@protonmail.com",
        icon : mail
    },
    {
        link : "https://github.com/6f1",
        icon : logoGithub
    },
    {
        link : "https://www.linkedin.com/in/samuel-s-507b831b5/",
        icon : logoLinkedin
    }
];

const PageFooter : React.FC = () => (
    <div className="p-footer-outer">
        <div className="page-footer">
            {externalLinks.map((entry) => (
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
