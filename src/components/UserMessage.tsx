import { IonButton, IonLabel, IonAvatar, IonContent, IonFooter, IonItem, IonPage } from '@ionic/react';
import * as firebase from 'firebase';
import React from 'react';
import { filter, mergeAll, take } from 'rxjs/operators';
import { Gender, User } from '../interfaces/User';
import { getUserService } from '../services/GetUserService';
import ChatPage from '../components/ChatMessage'
import { Match, Message } from '../interfaces/Match';
import { withRouter } from "react-router-dom";
import { matchMakerService } from '../services/MatchMakerService';


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
        const match: Match = this.props.matchh;
        if(match.message.read) {
            // last message is read, so anyone can send a new message
            window["code"] = '(alert "Hello World!")';
            window["match"] = this.state.match;
            this.props.history.push("/coding")
        } else {
            if(match.message.authorUid == firebase.auth().currentUser.uid) {
                // last message is unread and sent by current user, do nothing
                
            } else {
                // last message is unread and sent by other user, view the message and update that it is read
                matchMakerService.markRead(this.props.matchh);

                window["code"] = this.props.matchh.message.code;
                window["match"] = this.props.matchh;
                this.props.history.push("/run");
            }
        }
    }

    render() {
        const message: Message = this.props.matchh.message;
        let msg = "";
        if(message.authorUid === "default") {
            // default no messages sent
            msg = "Click to send a new lambda"
        } else if(message.read && message.authorUid !== "default") {
            // message is read
            if(message.authorUid == firebase.auth().currentUser.uid) {
                // last message is read and sent by current user, do nothing
                msg = "Opened. Click to send a new lambda"
            } else {
                // last message is read and sent by other user, view the message
                msg = "Received. Click to send a new lambda"
            }
        } else {
            // message is not read
            if(message.authorUid == firebase.auth().currentUser.uid) {
                // last message is unread and sent by current user, do nothing
                msg = "Delivered"
            } else {
                // last message is unread and sent by other user, view the message and update that it is read
                msg = "Click to view the lambda"
            }
        }

        return <>
            <IonItem button onClick={this.handleClick.bind(this)}>
                <IonAvatar slot="start">
                    <img src={this.state.user.profilePicture}/> 
                </IonAvatar>
                <IonLabel>
                    <h2>{this.state.user.name}</h2>
                    {msg === "Click to view the lambda" ? <b>{msg}</b> : <p>{msg}</p>}
                </IonLabel>
            </IonItem>
        </>;
    }
}

export default withRouter(UserMessage);