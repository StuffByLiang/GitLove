import React from 'react';
import {
    IonContent, IonHeader, IonInput, IonTextarea, IonList, IonPage, IonToolbar,
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
        let value;
        switch(true) {
            case true:
                console.log("here");
                const newDob = new Date(target.value);
                console.log(newDob.getSeconds());
                //value = target.value
                value = firebase.firestore.Timestamp.fromDate(newDob);
                break;
            default:
                value = target.value;
        }


        const user = this.state.user;

        user[name] = value;
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
        if (user) {
            let dob = user.dateOfBirth.toDate();
            let year = dob.getFullYear().toString();
            let month = (dob.getMonth() + 1).toString();
            let day = dob.getDay().toString();
            dobString = year + "-" + month + "-" + day;
            console.log(dobString);
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
                                        <IonLabel></IonLabel>
                                        <IonDatetime name="dateOfBirth" displayFormat="YYYY-MM-DD" value={dobString} onIonChange={this.handleChange}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Description: </IonLabel>
                                        <IonTextarea value={user.description} name="description" onIonChange={this.handleChange}></IonTextarea>
                                    </IonItem>
                                    {/* ADD ALL OTHER FORMS STUFF HERE */}
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
