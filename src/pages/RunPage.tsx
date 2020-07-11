import { IonButton, IonContent, IonFooter, IonPage } from '@ionic/react';
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
                <IonContent>
                    <canvas
                        id="canvas"
                        width="100%"
                        height="100%"
                        ref={this.canvasRef}>
                    </canvas>
                </IonContent>
            </IonPage>
        </>;
    }
}

export default RunPage;