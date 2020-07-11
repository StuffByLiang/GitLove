import React from 'react';
import { IonContent, IonHeader,IonInput,IonTextarea, IonToggle, IonList, IonListHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserCard from '../components/UserCard';
import * as firebase from 'firebase';
import UserService from '../services/UserService';
import { User } from '../interfaces/User';
import { Subscription } from 'rxjs';

interface EditProfilePageState {
    displayName: any,
    description: any,
    user: User
}

class EditProfilePage extends React.Component<EditProfilePageState> {

    subscription: Subscription;

    constructor(props) {
        super(props);
        const user: firebase.User = firebase.auth().currentUser;
        
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const myUserService: UserService = window['myUserService'];
        this.subscription = myUserService.userDoc$.subscribe((user: User) => {
            this.setState({ user : user });
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
    
    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        })
    }
    
    render() {
        return (
            <>
                <IonPage>
                    <IonContent>
                        <IonList>
    
                            {/* <IonListHeader>
                                <IonLabel>Edit Personal Information</IonLabel>
                            </IonListHeader>
    
                            <IonItem button onClick={this.updateName} >
                                <IonLabel >Name</IonLabel>
                                <IonLabel slot="end">this.displayName</IonLabel>
    
                            </IonItem >
                            <IonItem button onClick={()=>this.updateDOB()}>
                                <IonLabel>Date of Birth</IonLabel>
                                <IonLabel slot="end">this.dateOfBirt</IonLabel>
    
                            </IonItem>
                            <IonItem button onClick={() => { }}>
                                <IonLabel>Features</IonLabel>
                                <IonLabel slot="end">this.features</IonLabel>
    
                            </IonItem>
                            <IonItem button onClick={() => { }}>
                                <IonLabel>Gender</IonLabel>
                                <IonLabel slot="end">this.Gender</IonLabel>
    
                            </IonItem> */}

                            <form>
                                <IonItem>
                                    <IonLabel>Name</IonLabel>
                                    <IonLabel slot="end"> {this.state.displayName} </IonLabel>
                                    <IonInput type="text" name="displayName" onChange={this.handleChange}></IonInput>
                                </IonItem>
                            <IonItem>
                                <IonLabel>Description</IonLabel>
                                <IonLabel slot="end"> {this.state.description} </IonLabel>
                                <IonTextarea name="description" onChange={this.handleChange}></IonTextarea>
                            </IonItem>
                            <IonButton type="submit">Add Todo</IonButton>
                            </form> 
                        </IonList>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}


export default EditProfilePage;