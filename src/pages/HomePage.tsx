import React from 'react';
import { IonContent, IonHeader, IonToggle, IonList, IonListHeader, IonPage, IonChip, IonTitle, IonToolbar,
     IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserCard from '../components/UserCard';
import { logoGithub } from 'ionicons/icons';
import './HomePage.css';
import { loginService, LoginService } from '../services/LoginService';
import { Redirect, Route, Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from 'firebase';
import { userService } from '../services/UserService';
import { take } from 'rxjs/operators';

const ls: LoginService = loginService;

const HomePage: React.FC = () => {
    const history = useHistory();
    const location = useLocation<any>();

    let redirectTo = location.state === undefined ? '/swipe' : location.state.from;

    if(userService.isLoggedIn()) history.push(redirectTo);

    return ( 
        <>
            <IonPage>
                <IonContent>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "100px"
                        }}>

                        <a>
                            <img src="https://fontmeme.com/permalink/200711/d65f91e0d1c92fb0563431c4a2719577.png" className="img2" alt="fancy-fonts" />

                        </a>

                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "25px"
                        }}>
                        <img src="/assets/images/logo.png" className="img" />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "25px"
                        }}>

                        <IonButton onClick={ls.login}>
                            <IonIcon color="dark" slot="start" icon={logoGithub} />
                 Login With GitHUB
             </IonButton>
                    </div>

                </IonContent>
            </IonPage>
        </>

    );
};

HomePage.propTypes = {
    location: Location
}

export default HomePage;
