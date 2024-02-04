import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonRouterLink, IonButtons, IonBackButton, IonFooter, isPlatform } from '@ionic/react';
import Brand from '../components/Brand';
import ThemeControl from '../components/ThemeControl';
import PageFooter from '../components/PageFooter';
import './Template.css';

const Template : React.FC<{ title : string, children : React.ReactNode }> = ({ title, children }) => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className="toolbar-inner-container">
                    <IonButtons className={(!["/personal-website",'/personal-website/','/'].includes(window.location.pathname) ? undefined : 'invisible')}>
                        <IonBackButton defaultHref="/personal-website"/>
                    </IonButtons>
                    <div className={"brand-header-container" + (!["/personal-website",'/personal-website/','/'].includes(window.location.pathname) ? ' ios-invisible' : '' )}>
                        <IonRouterLink href="/personal-website" routerLink="/personal-website" routerDirection="back">
                            <Brand visible={true}/>
                        </IonRouterLink>
                    </div>
                    <ThemeControl/>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen forceOverscroll={true} className="ion-margin">
            <IonHeader collapse="condense" translucent={true}>
                <IonToolbar>
                    <IonTitle size="large" color="primary">{ title }</IonTitle>
                    {(() => {document.title = title})()}
                </IonToolbar>
            </IonHeader>
            { children }
            <div className="s-pagefooter">
                <PageFooter/>
            </div>
        </IonContent>
        <div className="l-pagefooter">
            <PageFooter/>
        </div>
    </IonPage>
);

export default Template;
