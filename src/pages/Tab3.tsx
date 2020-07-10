import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Redirect, Route, Link } from 'react-router-dom';


const Tab3: React.FC = () => {
  return (
    <IonPage>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>    
      </IonHeader></div>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

            <h3>Manage </h3> </div>

          <IonItem button onClick={() => { }}>
            <IonLabel>Edit Profile Information</IonLabel>
          </IonItem >
          <IonItem button onClick={() => { }}>
            <IonLabel>Edit Preferences</IonLabel>
          </IonItem>
          <IonItem button href="/Notifications">
            <IonLabel>Notifications</IonLabel>
          </IonItem>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <h3>Contact Us</h3> </div>

          <IonItem button onClick={() => { }}>
            <IonLabel>Help & Support</IonLabel>
          </IonItem >

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <h3>Community </h3> </div>

          <IonItem button onClick={() => { }}>
            <IonLabel>View Community Guidelines</IonLabel>
          </IonItem>
          <IonItem button onClick={() => { }}>
            <IonLabel>Safety Tips</IonLabel>
          </IonItem>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <h3>Documentation For User </h3> </div>
            <IonItem button onClick={() => { }}>
            <IonLabel>Our Application guide</IonLabel>
          </IonItem>
          <IonItem button href="https://docs.racket-lang.org/">
            <IonLabel>View Scheme Documentation</IonLabel>
          </IonItem>


          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <h3>Legal </h3> </div>

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
        <IonButton expand="block">Log out</IonButton>
        <IonButton color="danger" expand="block">Delete Account</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
