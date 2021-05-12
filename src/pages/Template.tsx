import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonRouterLink } from '@ionic/react';
import Brand from '../components/Brand';
import ThemeControl from '../components/ThemeControl';
import PageFooter from '../components/PageFooter';

const Template : React.FC<{ title : string }> = ({ title, children }) => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className="toolbar-inner-container">
                    <div>
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
                    {(() => document.title = title)()}
                </IonToolbar>
            </IonHeader>
            { children }
        </IonContent>
        <PageFooter />
    </IonPage>
);

export default Template;
