import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItemSliding, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './SwipePage.css';
import { share, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import UserCard from '../components/UserCard';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';

import { User, Gender } from "../interfaces/User";

import FindService from '../services/FindService';
import { Subscription } from 'rxjs';
import { filter } from '../../public/phonescheme';
import { updateUserService } from '../services/UpdateUserService';

const config = {
  onSwipedLeft: () => console.log("Swiped Left"),
  onSwipedRight: () => console.log("Swiped Right"),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true
};

class SwipePage extends React.Component {

  state = {
    users: [],
    swipedUsers: [],
  };

  usersSub$: Subscription = new Subscription();

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const fs: FindService = new FindService();
    await fs.init();
    this.usersSub$ = fs.Users$
      .subscribe(data => {
        this.setState({
          users: data,
        })
      })

    console.log(this.state.users);
  }

  async like(id: string) {
    // let users = this.state.users;
    // users.splice(users.indexOf(id), 1);
    // await updateUserService.updateById(i, {
    //   likedUsers: users
    // });
  }

  nope(id: string) {

  }

  render() {
    let users

    if (this.state.users)
      users = this.state.users.map(user => {
        return <UserCard
          key={user._id}
          user={user}
          like={this.like}
          nope={this.nope}
        />
      });

    // remove a user that has been swiped from this array



    return (
      <IonPage>

        <IonContent>

          {/* Code for Share Button */}

          {/* 
          <IonFab vertical="center" horizontal="center" slot="fixed">
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
        </IonFab> */}



          <div className="usercard-container">
            {users}
          </div>
        </IonContent>
      </IonPage>
    )
  }

}
export default SwipePage;