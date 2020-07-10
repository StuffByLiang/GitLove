import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonListHeader, IonList, IonItem, IonLabel,IonAvatar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "fullscreen">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="center" size="large">Chats</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
        <IonListHeader>
          Recent Conversations
        </IonListHeader>
      
      <IonItem button onClick={() => { }}>
      <IonAvatar slot="start">
        <img src="/assets/images/vishal.jpg" />
      </IonAvatar>
      <IonLabel>
            <h2>Vishal Desh</h2>
            <h3>I'm a big boi</h3>
            <p>I have a big Penis</p>
          </IonLabel>
      </IonItem>

      <IonItem button onClick={() => { }}>
      <IonAvatar slot="start"> 
        <img src="/assets/images/vishal.jpg" />
      </IonAvatar>
      <IonLabel>
            <h2>Vishal Desh</h2>
            <h3>I'm a big boi</h3>
            <p>I have a big Penis</p>
          </IonLabel>
      </IonItem>

      <IonItem button onClick={() => { }}>
      <IonAvatar slot="start">
        <img src="/assets/images/vishal.jpg" />
      </IonAvatar>
      <IonLabel>
            <h2>Vishal Desh</h2>
            <h3>I'm a big boi</h3>
            <p>I have a big Penis</p>
          </IonLabel>
      </IonItem>
      
      </IonList>

        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
