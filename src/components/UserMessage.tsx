import { IonButton, IonLabel, IonAvatar, IonContent, IonFooter, IonItem, IonPage } from '@ionic/react';
import * as firebase from 'firebase';
import React from 'react';
import { filter, mergeAll, take } from 'rxjs/operators';
import { Gender, User } from '../interfaces/User';
import { getUserService } from '../services/GetUserService';
import ChatPage from '../components/ChatMessage'
import { Match } from '../interfaces/Match';
import { withRouter } from "react-router-dom";


//inclde firebase

interface UserMessageState {
    user: User,
    match: Match
}

interface UserMessageProps {
    matchh: Match,
    history: any
}

class UserMessage extends React.Component<UserMessageProps, UserMessageState> {
    constructor(props) {
        super(props);
        this.state = {
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
                nopedUsers: []
            },
            match: props.matchh
            // match : {
            //     _id: '',
            //     matchedUsers: ['foo', 'bar'],
            //     message: {
            //         authorUid: '',
            //         code: '',
            //     },
            //     lastMatchActivity: new firebase.firestore.Timestamp(0, 0)
            // }
        }
        // this.state.match = props.match;
    }

    componentDidMount() {
        console.log(this.props)
        const myId: string = firebase.auth().currentUser.uid;
        const otherId: string = this.props.matchh.matchedUsers.filter(id => id !== myId)[0];

        getUserService
            .Users$
            .pipe(
                mergeAll(),
                filter(user => user._id == otherId),
                take(1)
            )
            .subscribe(data => {
                this.setState({
                    user: data
                });
            });
    }
    
    handleClick() {
        window["code"] = this.props.matchh.message.code;
        console.log(this.props.history.push("/run"));
    }

    render() {
        return <>
            <IonItem button onClick={this.handleClick.bind(this)}>
                <IonAvatar slot="start">
                    <img src={this.state.user.profilePicture}/> 
                </IonAvatar>
                <IonLabel>
                    <h2>{this.state.user.name}</h2>
                    <p>Click to send lambda</p>
                </IonLabel>
            </IonItem>
        </>;
    }
}

export default withRouter(UserMessage);