import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';
import TinderCard from './TinderCard'
import PropTypes from "prop-types";

import "./UserCard.css";

import { User, Gender } from "../interfaces/User";

interface UserCardProps {
    user: User,
    like?: (_id: string) => void,
    nope?: (_id: string) => void,
}

const UserCard: React.FC<UserCardProps> = ({ user, like, nope }) => {
    const [screen, setScreen] = useState(0);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        if(direction === 'right') {
            if (like) like(user._id);
        } else {
            if (nope) nope(user._id);
        }
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(user._id + ' left the screen')
    }

    const onLeftSideClick = () => {
        console.log("left clicked")
        setScreen(0);
    }

    const onRightSideClick = () => {
        console.log("right clicked")
        setScreen(1);
    }

    return (
        <div className="user-card">
            <TinderCard
                onSwipe={onSwipe}
                flickOnSwipe={true}
                onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                onLeftSideClick={onLeftSideClick}
                onRightSideClick={onRightSideClick}
            >
                <IonCard>
                    {screen == 0 ?
                        <>
                            <div style={{backgroundImage: `url(${user.profilePicture})`}}
                                className="photo"></div>
                            <IonCardHeader>
                                {/* <IonCardSubtitle>Big Dick Energy</IonCardSubtitle> */}
                                <IonCardTitle className="title">{user.name}</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent className="description">
                                {user.description}
                            </IonCardContent>
                        </>
                    :
                        <>
                            <IonCardContent>
                                <IonCardSubtitle>Programming Skillz</IonCardSubtitle>
                                <div className="languages-container">
                                    {user.languages.map((language, i) => <div className="language" key={i}>{language}</div>)}
                                </div>
                            </IonCardContent>
                            <IonCardContent>
                                <IonCardSubtitle>Other Info</IonCardSubtitle>
                            </IonCardContent>
                        </>
                    }
                </IonCard>
            </TinderCard>
        </div>
        );
};

export default UserCard;