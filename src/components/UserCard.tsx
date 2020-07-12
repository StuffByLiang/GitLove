import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonList, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';
import TinderCard from './TinderCard'
import PropTypes from "prop-types";

import "./UserCard.css";

import { User, Gender } from "../interfaces/User";

interface UserCardProps {
    user: User,
    like?: (user: User) => void,
    nope?: (user: User) => void,
}

const UserCard: React.FC<UserCardProps> = ({ user, like, nope }) => {
    const [screen, setScreen] = useState(0);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        if (direction === 'right') {
            if (like) like(user);
        } else {
            if (nope) nope(user);
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

    const getGender = () => {
        switch(user.gender){
            case 0:
                return "Male";
                break;
            case 1:
                return "Female";
                break;
            case 2:
                return "NonBinary";
                break;
            case 3:
                return "Agender";
                break;
            case 4:
                return "Other";
                break;
            default:
                return "Other";

        }
    }

    const dobstring = () => {

    // get date of birth and format as string
    let dob = user.dateOfBirth.toDate();
    let year = dob.getFullYear().toString();
    let month = (dob.getMonth() + 1).toString();
    let day = dob.getDay().toString();
    return year + "-" + month + "-" + day;
    
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
                            <div style={{ backgroundImage: `url(${user.profilePicture})` }}
                                className="photo"></div>
                            <IonCardHeader>
                                {/* <IonCardSubtitle></IonCardSubtitle> */}
                                <IonCardTitle className="title">{user.name}</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent className="description">
                                {user.description}
                            </IonCardContent>
                        </>
                        :
                        <>

                            <IonCardContent>
                                <IonCardSubtitle>Info</IonCardSubtitle>
                                <IonList>
                                    <IonItem>
                                        <IonLabel slot="start">Gender : </IonLabel>
                                        <IonLabel>{getGender()}</IonLabel>
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel slot="start">Date of Birth : </IonLabel>
                                        <IonLabel>{dobstring()}</IonLabel>
                                    </IonItem>

                                    {/* Features go here */}
                                    {/* <IonItem>
                                        <IonLabel slot="start">Features : </IonLabel>
                                        <IonLabel>{getGender()}</IonLabel>
                                    </IonItem> */}

                                </IonList>
                            </IonCardContent>
                            <IonGrid className="grid-full">
                                <IonCardContent>
                                    <IonCardSubtitle>Programming Languages</IonCardSubtitle>
                                </IonCardContent>
                                <IonRow>
                                    {user.languages.map((language, i) => <IonCol size="4" key={i}>{<IonChip outline color="primary"><IonLabel>{language}</IonLabel></IonChip>}</IonCol>)}
                                </IonRow>
                            </IonGrid>
                        </>
                    }
                </IonCard>
            </TinderCard>
        </div>
    );
};

export default UserCard;