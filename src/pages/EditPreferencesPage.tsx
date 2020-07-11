import React from 'react';
import { IonContent, IonHeader, IonToggle, IonList, IonListHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonBackButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserCard from '../components/UserCard';


const EditPreferencesPage: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonListHeader>
                            Preferences
                          </IonListHeader>

                        <IonItem>
                            <IonToggle slot="end" color="success" />
                            <IonLabel>
                                Maximum Distance
                            </IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonToggle slot="end" color="success" />
                            <IonLabel>
                                Show Me
                            </IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonToggle slot="end" color="success" />
                            <IonLabel>
                                Age Range
                            </IonLabel>
                        </IonItem>


                    </IonList>
                </IonContent>
            </IonPage>
        </>
    );
};

export default EditPreferencesPage;