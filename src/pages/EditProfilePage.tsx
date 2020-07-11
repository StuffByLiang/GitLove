import React from 'react';
import { IonContent, IonHeader, IonToggle, IonList, IonListHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserCard from '../components/UserCard';


const EditProfilePage: React.FC = () => {
    return (
        <>

            <IonPage>
                <IonHeader>

                    <IonItem button onClick={() => { }}>
                        <IonLabel >Edit Profile Information</IonLabel>
                    </IonItem >
                    <IonItem button onClick={() => { }}>
                        <IonLabel>Edit Preferences</IonLabel>
                    </IonItem>
                    <IonItem button routerLink="/Notifications" routerDirection="forward">
                        <IonLabel>Notifications</IonLabel>
                    </IonItem>


                </IonHeader>
            </IonPage>
        </>
    );
};

export default EditProfilePage;