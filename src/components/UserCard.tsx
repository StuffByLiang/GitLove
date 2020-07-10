import React from 'react';
import { IonContent, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';

const UserCard: React.FC = () => {


    return <>

        <IonCard>
            <img src="/assets/images/vishal.jpg" className="photo" />
            <IonCardHeader>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <IonCardTitle>Vishal Desh</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>



            <IonGrid className="grid-full">
                <IonRow>
                    <IonCol size="4"><IonChip><IonLabel>Python</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Java</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>C++</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>React</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Racket</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Angular</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Firebase</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>CSS</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>HTML</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>JavaScript</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Android Studio</IonLabel></IonChip></IonCol>
                </IonRow>
            </IonGrid>

        </IonCard>
    </>;
};

export default UserCard;