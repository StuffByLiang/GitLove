import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CodeEditor from '../components/CodeEditor';

const CodingPage: React.FC = () => {

    const setTestCode = () => {
        window['testCode'] = 
    };

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

                <IonButton color="success" expand="block" onClick={() => }>Run</IonButton>
                <IonButton color="primary" expand="block">Send</IonButton>



            </IonContent>
        </IonPage>
    );
};

export default CodingPage;
