import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/swipe" component={SwipePage} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/coding" component={CodingPage} />
          <Route path="/aiden" component={Aiden} />
          <Route path="/run" component={RunPage} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="/EditPreferences" component={EditPreferencesPage} />
          <Route path="/EditProfile" component={EditProfilePage} />
          <Route path="/Home" component={HomePage} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
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
    </IonReactRouter>
  </IonApp>
);

export default App;
