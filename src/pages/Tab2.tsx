import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import UserMessage from '../components/UserMessage';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="fullscreen">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="center" size="large">Chats</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonListHeader>
            Recent Conversations
        </IonListHeader>

          {/* <UserMessage /> */}

        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
