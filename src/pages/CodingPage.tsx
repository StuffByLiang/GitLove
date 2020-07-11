import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CodeEditor from '../components/CodeEditor';

const CodingPage: React.FC = () => {

    // const setTestCode = () => {
    //     window['testCode'] = 
    // };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Code Editor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Code Editor</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CodeEditor codeScope="test"></CodeEditor>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton color="success" expand="block" routerLink="/run">Run</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="primary" expand="block">Send</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default CodingPage;
