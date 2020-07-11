import React from 'react';
import { IonContent, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';
import TinderCard from 'react-tinder-card'
import PropTypes from "prop-types";

import "./UserCard.css";

import { User, Gender, Preference } from "../interfaces/User";

interface UserCardProps {
    user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <TinderCard
            onSwipe={onSwipe}
            flickOnSwipe={true}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
        >
            <IonCard>
                <img src={user.profilePicture} className="photo" />
                <IonCardHeader>
                    {/* <IonCardSubtitle>Big Dick Energy</IonCardSubtitle> */}
                    <IonCardTitle>{user.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    {user.description}
                </IonCardContent>



                <IonGrid className="grid-full">
                    <IonRow>
                        {user.languages.map((language, i) => <IonCol key={i} size="4"><IonChip><IonLabel>{language}</IonLabel></IonChip></IonCol>)}
                    </IonRow>
                </IonGrid>

            </IonCard>
        </TinderCard>);
};

export default UserCard;