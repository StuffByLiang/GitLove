import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Redirect, Route } from 'react-router-dom';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem button onClick={() => { }}>
            <IonLabel>Edit Profile Information</IonLabel>
          </IonItem >
          <IonItem button onClick={() => { }}>
            <IonLabel>Edit Preferences</IonLabel>
          </IonItem>
          <IonItem button onClick={() => { }}>
            <IonLabel>Privacy Settings</IonLabel>
          </IonItem>
          <IonItem button onClick={() => { }}>
            <IonLabel>Notifications</IonLabel>
          </IonItem>
          <IonItem button onClick={() => { }}>
            <IonLabel>View Privacy Policy</IonLabel>
          </IonItem>
        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
