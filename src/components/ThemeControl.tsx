import { Storage } from '@ionic/storage';
import { IonToggle, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import './ThemeControl.css';

const ThemeControl : React.FC = () => {
    const [ selectedTheme, setSelectedTheme ] = useState('');

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => setSelectedTheme((e.matches) ? 'dark' : 'light'));

        const initStore = async () => {
            const store = new Storage();
            await store.create();
            const data = await store.get('irtcSelectedTheme');
            ( data ) ? setSelectedTheme(data) : await store.set('irtcSelectedTheme', selectedTheme);
        };
        initStore();
    },[ ]);

    useEffect(() => {
        document.body.classList.toggle('dark', (selectedTheme === 'dark'));

        const storeThemeData = async () => {
            const store = new Storage();
            await store.create();
            await store.set('irtcSelectedTheme', selectedTheme);
        };

        storeThemeData();
    },[ selectedTheme ]);

    return(
        <div className="irtc-container">
            <IonLabel>{ selectedTheme }</IonLabel>
            <IonToggle color="dark" checked={(selectedTheme === 'dark') ? true : false} onIonChange={(e) => setSelectedTheme((e.detail.checked) ? 'dark' : 'light')}/>
        </div>
    );
};

export default ThemeControl;
