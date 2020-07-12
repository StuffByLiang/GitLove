import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar, IonCol, IonGrid, IonRow, IonBackButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CodeEditor from '../components/CodeEditor';
import { matchMakerService } from '../services/MatchMakerService';
import { Match } from '../interfaces/Match';
import firebase from 'firebase';

const CodingPage: React.FC = () => {

    // const setTestCode = () => {
    //     window['testCode'] = 
    // };
    const handleSend = () => {
        const match: Match = window['match'];
        const code = window["code"];
        
        matchMakerService.sendMessage(match, code);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Code Editor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Code Editor</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CodeEditor></CodeEditor>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton color="success" expand="block" routerLink="/run">Run</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="primary" expand="block" onClick={handleSend} >Send</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default CodingPage;
