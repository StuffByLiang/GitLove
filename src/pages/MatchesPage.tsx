import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import UserMessage from '../components/UserMessage';
import { MatchService, matchService } from '../services/MatchService';
import { Subscription } from 'rxjs';

class MatchesPage extends React.Component {

  state = {
    matches: []
  };
  matchSub$: Subscription = new Subscription();

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.matchSub$ = matchService
      .Matches$
      .subscribe(data => {
        this.setState({ matches: data });
      });
  }

  componentWillUnmount() {
    this.matchSub$.unsubscribe();
    
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Matches Page</IonTitle>
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
          {this.state.matches.map(match => <UserMessage key={match._id} matchh={match}/>)}
            {/* <UserMessage /> */}

          </IonList>


        </IonContent>
      </IonPage>
    );

  }
}



export default MatchesPage;
