import { Storage } from '@ionic/storage';
import { IonToggle } from '@ionic/react';
import { useEffect, useState } from 'react';

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
        <div>
            <IonToggle checked={(selectedTheme === 'dark') ? true : false} onIonChange={(e) => setSelectedTheme((e.detail.checked) ? 'dark' : 'light')}/>
        </div>
    );
};

export default ThemeControl;
