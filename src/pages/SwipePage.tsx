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

const config = {
  onSwipedLeft: () => console.log("Swiped Left"),
  onSwipedRight: () => console.log("Swiped Right"),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true
};

class SwipePage extends React.Component {

  state = {
    swipedUsers: [],
    allUsers: [],
  };

  usersSub$: Subscription = new Subscription();
  userSub$: Subscription = new Subscription()

  constructor(props) {
    super(props);
    this.like = this.like.bind(this)
    this.nope = this.nope.bind(this)
  }

  filterUsers(users: Array<User>) {
    console.log(this.state)
    let currentUserId = userService.id;

    return users.filter((user: User) => {
      return !this.state.swipedUsers.includes(user._id) && user._id != currentUserId;
    }).slice(0, 3)
  }

  async componentDidMount() {

    this.usersSub$ = getUserService.Users$
      .subscribe(data => {
        if (data !== null) {
          this.setState({
            allUsers: data,
          })
        }
        console.log(data)
      })

    this.userSub$ = userService.userDoc$
      .subscribe(user => {
        if (user !== null) {
          this.setState({
            swipedUsers: user.likedUsers.concat(user.nopedUsers)
          })
        }
        console.log(user)
      })

  }

  like(user: User) {
    let likedUsers = userService.userDoc.likedUsers;
    likedUsers.push(user._id);
    updateUserService.updateById(userService.id, {
      likedUsers
    });
    if (user.likedUsers.indexOf(userService.userDoc._id) !== -1){
      matchMakerService.createNewMatch([userService.userDoc._id, user._id]);
    }
  }

  nope(user: User) {
    let nopedUsers = userService.userDoc.nopedUsers;
    nopedUsers.push(user._id);
    updateUserService.updateById(userService.id, {
      nopedUsers
    });
  }

  render() {
    let users;

    if (this.state.allUsers)
      users = this.filterUsers(this.state.allUsers).map(user => {
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