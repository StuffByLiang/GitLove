import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItemSliding, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './SwipePage.css';
import { share, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import UserCard from '../components/UserCard';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';

import { User, Gender } from "../interfaces/User";

import { getUserService } from '../services/GetUserService';
import { Subscription } from 'rxjs';
import { updateUserService } from '../services/UpdateUserService';
import { userService } from '../services/UserService';
import { filter } from 'rxjs/operators';
import { matchMakerService } from '../services/MatchMakerService';

import MatchAnimation from '../components/MatchAnimation';

class PreviewPage extends React.Component {
  render() {
    return (
      <IonPage>
        <IonContent>
        <UserCard
          user={userService.userDoc}
        />
        </IonContent>
      </IonPage>
    )
  }

}
export default PreviewPage;