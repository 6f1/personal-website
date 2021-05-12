import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonRouterLink, IonButtons, IonBackButton } from '@ionic/react';
import Brand from '../components/Brand';
import ThemeControl from '../components/ThemeControl';
import PageFooter from '../components/PageFooter';
import './Template.css';

const Template : React.FC<{ title : string }> = ({ title, children }) => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className="toolbar-inner-container">
                    <IonButtons className={(window.location.pathname !== "/" ? undefined : 'invisible')}>
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <div className={"brand-header-container" + ( window.location.pathname !== "/" ? ' ios-invisible' : '' )}>
                        <IonRouterLink href="/" routerLink="/" routerDirection="back">
                            <Brand visible={true}/>
                        </IonRouterLink>
                    </div>
                    <ThemeControl/>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen forceOverscroll={true}>
            <IonHeader collapse="condense" translucent={true}>
                <IonToolbar>
                    <IonTitle size="large" color="primary">{ title }</IonTitle>
                    {(() => {document.title = title})()}
                </IonToolbar>
            </IonHeader>
            { children }
        </IonContent>
        <PageFooter />
    </IonPage>
);

export default Template;
