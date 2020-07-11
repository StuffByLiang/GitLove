import React from 'react';
import { IonList, IonItem, IonListHeader, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Redirect, Route, Link } from 'react-router-dom';


const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          <IonListHeader>
            <IonLabel>Manage</IonLabel>
          </IonListHeader>

          <IonItem button onClick={() => { }}>
            <IonLabel >Edit Profile Information</IonLabel>
          </IonItem >
          <IonItem button onClick={() => { }}>
            <IonLabel>Edit Preferences</IonLabel>
          </IonItem>
          <IonItem button routerLink="/Notifications" routerDirection="forward">
            <IonLabel>Notifications</IonLabel>
          </IonItem>

          <IonListHeader>
            <IonLabel>Contact Us</IonLabel>
          </IonListHeader>


          <IonItem button onClick={() => { }}>
            <IonLabel>Help & Support</IonLabel>
          </IonItem >

          <IonListHeader>
            <IonLabel>Community</IonLabel>
          </IonListHeader>


          <IonItem button onClick={() => { }}>
            <IonLabel>View Community Guidelines</IonLabel>
          </IonItem>
          <IonItem button onClick={() => { }}>
            <IonLabel>Safety Tips</IonLabel>
          </IonItem>

          <IonListHeader>
            <IonLabel>Documentation for User</IonLabel>
          </IonListHeader>

          <IonItem button onClick={() => { }}>
            <IonLabel>Our Application guide</IonLabel>
          </IonItem>
          <IonItem button href="https://docs.racket-lang.org/">
            <IonLabel>View Scheme Documentation</IonLabel>
          </IonItem>


          <IonListHeader>
            <IonLabel>Legal</IonLabel>
          </IonListHeader>


          <IonItem button onClick={() => { }}>
            <IonLabel>View Privacy Policy</IonLabel>
          </IonItem>
          <IonItem button onClick={() => { }}>
            <IonLabel>View Terms of Service</IonLabel>
          </IonItem>
          <IonItem button onClick={() => { }}>
            <IonLabel>Licenses</IonLabel>
          </IonItem>


        </IonList>
        <IonButton color="primary" expand="block">Log out</IonButton>
        <IonButton color="danger" expand="block">Delete Account</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
