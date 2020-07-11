import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { toggle, chatbox, settings } from 'ionicons/icons';

/* All our pages */
import SwipePage from './pages/SwipePage';
import Tab2 from './pages/Tab2';
import SettingsPage from './pages/SettingsPage';
import CodingPage from './pages/CodingPage';
import Aiden from './pages/Aiden';
import RunPage from './pages/RunPage';
import Notifications from './pages/Notifications';
import EditPreferencesPage from './pages/EditPreferencesPage';
import EditProfilePage from './pages/EditProfilePage';
import HomePage from './pages/HomePage';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PrivateRoute from './components/PrivateRoute';
import { userService } from './services/UserService';
import firebase from 'firebase';

const App: React.FC = () => {
  const [state, updateState] = React.useState(0);
  const forceUpdate = React.useCallback(() => updateState(state+1), []);

  const init = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user !== null) {
          console.log(user);
          await userService.init(user.uid);
          console.log("update")
          forceUpdate();
      }
    });
  }
  
  useEffect(() => {
    init();
  }, []);

  return (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        <IonTabs>
          <IonRouterOutlet>
            <PrivateRoute path="/swipe" component={SwipePage} exact={true} />
            <PrivateRoute path="/tab2" component={Tab2} exact={true} />
            <PrivateRoute path="/settings" component={SettingsPage} />
            <PrivateRoute path="/coding" component={CodingPage} />
            <PrivateRoute path="/aiden" component={Aiden} />
            <PrivateRoute path="/run" component={RunPage} />
            <PrivateRoute path="/Notifications" component={Notifications} />
            <PrivateRoute path="/EditPreferences" component={EditPreferencesPage} />
            <PrivateRoute path="/EditProfile" component={EditProfilePage} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="swipe" href="/swipe">
              <IonIcon icon={toggle} />
              <IonLabel>Swipe</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={chatbox} />
              <IonLabel>Chat</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settings} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </Switch>
    </IonReactRouter>
  </IonApp>
)};

export default App;
