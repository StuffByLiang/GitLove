import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CodeEditor from '../components/CodeEditor';

const CodingPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Editor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CodeEditor></CodeEditor>

            </IonContent>
        </IonPage>
    );
};

export default CodingPage;
