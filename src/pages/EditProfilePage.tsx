import React from 'react';
import {
    IonContent, IonHeader, IonInput, IonTextarea, IonToggle, IonList, IonListHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonBackButton, IonButtons, IonSelect, IonSelectOption
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
        const value = target.value;

        const user = this.state.user;

        user[name] = value;

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
        const gender = "test"; //REMOVE THIS LATER

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
                            {this.state.user ?
                                <form>
                                    <IonItem>
                                        <IonLabel>Name: </IonLabel>
                                        <IonInput value={this.state.user.name} type="text" name="name" onIonChange={this.handleChange}></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Gender: </IonLabel>
                                        <IonSelect value={user.gender} okText="Yup" cancelText="nope">
                                            <IonSelectOption value="b">Male</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Description: </IonLabel>
                                        <IonTextarea value={user.description} name="description" onIonChange={this.handleChange}></IonTextarea>
                                    </IonItem>
                                    {/* ADD ALL OTHER FORMS STUFF HERE */}
                                    <IonButton onClick={this.handleSave}>Save</IonButton>
                                </form>
                                :
                                <div><h1>Please wait or renavigate to login</h1></div>
                            }
                        </IonList>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}


export default EditProfilePage;
