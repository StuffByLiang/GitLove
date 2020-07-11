import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import React from 'react';
import { DrawingLibrary } from '../classes/lib/Drawing';
import { AnimateLibrary } from '../classes/lib/Animate';
import RuntimeEnvironment from '../services/RuntimeEnvironment';
import './RunPage.css';

class RunPage extends React.Component {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    animateRef: React.RefObject<HTMLDivElement>;

    constructor(props) {
        super(props)
        this.canvasRef = React.createRef();
        this.animateRef = React.createRef();
    }

    componentDidMount() {

        // Import Dependencies!
        RuntimeEnvironment.addLibrary(new DrawingLibrary(this.canvasRef.current.getContext('2d')));
        RuntimeEnvironment.addLibrary(new AnimateLibrary(this.animateRef.current));

        // Run Script!
        RuntimeEnvironment.runScript(window['code-test']);

    }

    render() {
        return <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <canvas
                                    id="canvas"
                                    width={300}
                                    height={300}
                                    ref={this.canvasRef}
                                    style={{
                                        outline: '1px solid rgb(128, 128, 128)'
                                    }}>
                                </canvas>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>;
    }
}

export default RunPage;