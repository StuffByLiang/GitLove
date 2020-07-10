import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { createAnimation } from '@ionic/core';
import './Aiden.css'



const Aiden: React.FC = () => {

    // const animation = createAnimation()
    //     .addElement(document.querySelectorAll('.square'))
    //     .duration(1500)
    //     .keyframes([
    //         { offset: 0, transform: 'translate(0%, 0%)', opacity: 1 },
    //         { offset: 0.15, transform: 'translate(12%, 120%)' },
    //         { offset: 0.25, transform: 'translate(15%, 200%)' },
    //         { offset: 0.4, transform: 'translate(12%, 320%)' },
    //         { offset: 0.5, transform: 'translate(0%, 400%)' },
    //         { offset: 0.65, transform: 'translate(-12%, 520%)' },
    //         { offset: 0.75, transform: 'translate(-15%, 600%)' },
    //         { offset: 0.9, transform: 'translate(-12%, 720%)' },
    //         { offset: 1, transform: 'translate(0%, 800%)', opacity: 0 }
    //     ]);

    const animation = createAnimation()
        .addElement(document.querySelectorAll('.square'))
        .duration(1500)
        .keyframes([
            { offset: 0, transform: 'translate(0px, 0px)', opacity: 1 },
            { offset: 0.15, transform: 'translate(160px, 80px)' },
            { offset: 0.25, transform: 'translate(200px, 100px)' },
            { offset: 0.4, transform: 'translate(160px, 180px)' },
            { offset: 0.5, transform: 'translate(0px, 200px)' },
            { offset: 0.65, transform: 'translate(-160px, 280px)' },
            { offset: 0.75, transform: 'translate(-200px, 300px)' },
            { offset: 0.9, transform: 'translate(-160px, 380px)' },
            { offset: 1, transform: 'translate(0px, 400px)', opacity: 0 }
        ]);
        

    function play() {
        animation.play();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Animation tests</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Animation Tests</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div className="square">
                    🔥
                </div>
                <div className="square">
                    🔥
                </div>
                <div className="square">
                    🔥
                </div>
                <div className="square">
                    🔥
                </div>
                <div className="square">
                    🔥
                </div>
                <button id="play" onClick={play}>Play</button>
            </IonContent>
        </IonPage>
    );
};

export default Aiden;
