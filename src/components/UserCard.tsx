import React from 'react';
import { IonContent, IonHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { useSwipeable, Swipeable } from 'react-swipeable'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';
import TinderCard from 'react-tinder-card'
import PropTypes from "prop-types";

import { User, Gender, Preference } from "../interfaces/User";

interface Props {
    user: User
}

const UserCard: React.FC = (props) => {
    // const {user: User} = props;
    
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    
    return <TinderCard
                onSwipe={onSwipe}
                flickOnSwipe={true}
                onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            >
        <IonCard>
            <img src="/assets/images/vishal.jpg" className="photo" />
            <IonCardHeader>
                <IonCardSubtitle>Big Dick Energy</IonCardSubtitle>
                <IonCardTitle>Vishal Desh</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                Big boi with Big PP
            </IonCardContent>



            <IonGrid className="grid-full">
                <IonRow>
                    <IonCol size="4"><IonChip><IonLabel>Python</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Java</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>C++</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>React</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Racket</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Angular</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Firebase</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>CSS</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>HTML</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>JavaScript</IonLabel></IonChip></IonCol>
                    <IonCol size="4"><IonChip><IonLabel>Android Studio</IonLabel></IonChip></IonCol>
                </IonRow>
            </IonGrid>

        </IonCard>
    </TinderCard>;
};

UserCard.propTypes = {
    user: PropTypes.object
}
                    <IonCol size="4"><IonChip><IonLabel>Android Studio</IonLabel></IonChip></IonCol>
                </IonRow>
            </IonGrid>

        </IonCard>
    </TinderCard>;
};

export default UserCard;