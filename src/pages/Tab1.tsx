import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItemSliding, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { share, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import UserCard from '../components/UserCard';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';

const config = {
  onSwipedLeft: () => console.log("Swiped Left"),
  onSwipedRight: () => console.log("Swiped Right"),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>

        {/* Code for Share Button */}

        {/* <IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton color="primary">
              <IonIcon icon={logoVimeo}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton color="dark">
              <IonIcon icon={logoFacebook}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton color="secondary">
              <IonIcon icon={logoInstagram}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>*/}

        <UserCard />
