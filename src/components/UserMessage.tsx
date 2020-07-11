import { IonButton, IonLabel, IonAvatar, IonContent, IonFooter, IonItem, IonPage } from '@ionic/react';
import * as firebase from 'firebase';
import React from 'react';
import { mergeAll } from 'rxjs/operators';
import { Gender, User } from '../interfaces/User';
import FindService from '../services/FindService';

//inclde firebase

class UserMessage extends React.Component {

    state = {
        user: {
            _id: '',
            name: 'string',
            profilePicture: '',
            gender: Gender.Male,
            dateOfBirth: new firebase.firestore.Timestamp(0, 0),
            description: '',
            features: [],
            languages: [],
            blockedUsers: [],
            likedUsers: [],
        },
        match : {
            _id: '',
            matchedUsers: [],
            message: {
                authorUid: '',
                code: '',
            },
            lastMatchActivity: new firebase.firestore.Timestamp(0, 0)
        }
    }

    constructor(props) {
        super(props);
        this.state.match = props['match'];
    }

    componentDidMount() {
        const findService: FindService = window['findService'];
        findService
        .Users$
        .pipe(
            mergeAll(),
        )
    }

    render() {
        return <>
            <IonItem button onClick={() => {ChatPage(this)}}>
                <IonAvatar slot="start">
                    {this.status.user.displayPicture}
                </IonAvatar>
                <IonLabel>

                    <h2>{this.status.user.name}</h2>

                    <p> {this.status.user.description}</p>
                </IonLabel>
            </IonItem>
        </>;
    }
}

export default UserMessage;