import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonItemSliding, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './SwipePage.css';
import { share, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import UserCard from '../components/UserCard';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';

import { User, Gender } from "../interfaces/User";

import {getUserService} from '../services/GetUserService';
import { Subscription } from 'rxjs';
import { updateUserService } from '../services/UpdateUserService';
import { userService } from '../services/UserService';
import { filter } from 'rxjs/operators';

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
    this.like = this.like.bind(this)
    this.nope = this.nope.bind(this)
  }

  async componentDidMount() {

    this.usersSub$ = getUserService.Users$
      .subscribe(data => {
        data = data.filter((user: User) => {
          console.log(data, user)
          let currentUserId = userService.userDoc._id;
          let blockedUsers = userService.userDoc.blockedUsers;
          let likedUsers = userService.userDoc.likedUsers;

          return !likedUsers.includes(user._id) && !blockedUsers.includes(user._id) && user._id != currentUserId;
        })

        this.setState({
          users: data,
        })
      })

    console.log(this.state.users);
  }

  async like(id: string) {
    let users = this.state.users;
    // console.log(userService.id)
    let likedUsers = userService.userDoc.likedUsers;
    likedUsers.push(id);
    await updateUserService.updateById(userService.id, {
      likedUsers
    });
  }

  async nope(id: string) {

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