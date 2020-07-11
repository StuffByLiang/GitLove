import React from 'react';
import {
    IonContent, IonHeader, IonInput, IonTextarea, IonList, IonPage, IonToolbar, IonListHeader,
    IonItem, IonLabel, IonButton, IonBackButton, IonButtons, IonSelect, IonSelectOption, IonDatetime
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserCard from '../components/UserCard';
import * as firebase from 'firebase';
import { userService } from '../services/UserService';
import { User, Gender } from '../interfaces/User';
import { Subscription } from 'rxjs';
import { updateUserService } from '../services/UpdateUserService';

interface EditProfilePageState {
    user: User
}

class EditProfilePage extends React.Component<any, EditProfilePageState> {

    subscription: Subscription = new Subscription();

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        this.subscription = userService.userDoc$.subscribe((user: User) => {
            user ? console.log("user exists") : console.log("user does not exist");
            if (user) {
                this.setState({ user: user });
            } else {
                this.setState({
                    user: null,
                });
                this.forceUpdate(); // idk if this is important but eff it
            }
        });


    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const user = this.state.user;
        let value;
        switch(name) {
            case "dateOfBirth":
                const newDob = new Date(target.value);
                value = firebase.firestore.Timestamp.fromDate(newDob);
                user[name] = value;
                break;
            case "name": // name & description are both strings so it's simple target.value;
            case "description":
                value = target.value;
                user[name] = value;
                break;
            default: // features
                value = target.value;
                const index = user.features.findIndex(feat => feat.question == name);
                const newFeat = {
                    question: name,
                    answer: value,
                }
                user.features[index] = newFeat;
        }

        console.log(value);
        this.setState({
            user: user,
        });
    }

    handleSave = async () => {
        // write to firebase
        
        updateUserService.updateById(this.state.user._id, this.state.user);
        console.log("updated");
    }


    render() {
        const user = this.state.user;
        let dobString = "error"; // this shouldn't display ever
        let featuresList = [];
        if (user) {
            let dob = user.dateOfBirth.toDate();
            let year = dob.getFullYear().toString();
            let month = (dob.getMonth() + 1).toString();
            let day = dob.getDay().toString();
            dobString = year + "-" + month + "-" + day;
            console.log(dobString);
            featuresList = user.features.map((feat: any) => {
                console.log(feat.question);
                return (
                    <IonItem key={feat.question}>
                        <IonLabel>{feat.question}</IonLabel>
                        <IonTextarea value={feat.answer} name={feat.question} onIonChange={this.handleChange}></IonTextarea>
                    </IonItem>
                );
            });
        }

        return (
            <>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonBackButton />
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList>
                            {user ?
                                <form>
                                    <IonItem>
                                        <IonLabel>Name: </IonLabel>
                                        <IonInput value={user.name} type="text" name="name" onIonChange={this.handleChange}></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Gender: </IonLabel>
                                        <IonSelect name="gender" value={user.gender} okText="Yup" cancelText="nope" onIonChange={this.handleChange}>
                                            <IonSelectOption value={0}>Male</IonSelectOption>
                                            <IonSelectOption value={1}>Female</IonSelectOption>
                                            <IonSelectOption value={2}>NonBinary</IonSelectOption>
                                            <IonSelectOption value={3}>Agender</IonSelectOption>
                                            <IonSelectOption value={4}>Other</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Date of Birth: </IonLabel>
                                        <IonDatetime name="dateOfBirth" displayFormat="YYYY-MM-DD" value={dobString} onIonChange={this.handleChange}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Description: </IonLabel>
                                        <IonTextarea value={user.description} name="description" onIonChange={this.handleChange}></IonTextarea>
                                    </IonItem>
                                    <IonListHeader>
                                        <IonLabel>Programming Languages:</IonLabel>
                                    </IonListHeader>
                                    <IonItem>
                                        <IonLabel>(separate with commas)</IonLabel>
                                        <IonTextarea></IonTextarea>
                                    </IonItem>
                                    <IonListHeader>
                                        <IonLabel>Features</IonLabel>
                                    </IonListHeader>
                                    {featuresList}
                                    <IonButton onClick={this.handleSave}>Save</IonButton>
                                </form>
                                :
                                <div><h1>Please wait...</h1></div>
                            }
                        </IonList>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}


export default EditProfilePage;
