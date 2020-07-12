import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar, IonCol, IonGrid, IonRow, IonBackButton, IonButtons, IonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CodeEditor from '../components/CodeEditor';
import { matchMakerService } from '../services/MatchMakerService';
import { Match } from '../interfaces/Match';
import firebase from 'firebase';

const CodingPage: React.FC<any> = (props) => {

    // const setTestCode = () => {
    //     window['testCode'] = 
    // };

    const [alertShow, alertShowSet] = React.useState(false);
    const [goneToRun, goneToRunSet] = React.useState(false);

    const handleSend = async () => {
        const match: Match = window['match'];
        const code = window["code"];

        console.log(match, code);
        await matchMakerService.sendMessage(match, code);
        alertShowSet(true);
    }

    const alertDismiss = () => {
        console.log(goneToRun);
        if (goneToRun) {
            props.history.go(-2);
        } else {
            props.history.go(-1);
        }
        console.log(props.history);
        alertShowSet(false);
    };

    const handleRun = () => {
        props.history.push('/run');
        goneToRunSet(true);
    };

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

                <IonAlert
                    isOpen={alertShow}
                    onDidDismiss={() => alertDismiss()}
                    header={'Sent!'}
                    message={'Your code has been sent!'}
                    buttons={['OK']}
                />

                <CodeEditor></CodeEditor>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton color="success" expand="block" onClick={() => handleRun()}>Run</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="primary" expand="block" onClick={() => handleSend()} >Send</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default CodingPage;
