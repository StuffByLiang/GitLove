import { IonButton, IonContent, IonFooter, IonPage } from '@ionic/react';
import React from 'react';

class RunPage extends React.Component {

    componentDidMount() {
        window['runtimeEnvironment'].runScript(window['code-test']);
    }

    render() {
        return <>
            <IonPage>
                <IonContent>

                </IonContent>
            </IonPage>
        </>;
    }
}

export default RunPage;