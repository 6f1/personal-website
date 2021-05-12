import { IonToggle, IonLabel } from '@ionic/react';
import './ThemeControl.css';

const ThemeControl : React.FC = () => (
    <div className="irtc-container">
        <IonLabel>{ (window as any).getCurrentTheme() }</IonLabel>
        <IonToggle color="dark" checked={((window as any).getCurrentTheme() === 'dark') ? true : false} onIonChange={(e) => (window as any).triggerThemeChange((e.detail.checked) ? 'dark' : 'light')}/>
    </div>
);

export default ThemeControl;
