import "./MatchAnimation.css";
import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

const [showAlert1, setShowAlert1] = useState(true);

class MatchAnimation extends React.Component{

render() {
    return(
        <>
          <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Congratulations! You Have Matched with'}
          message= "hi"
          buttons={['OK']}
        />
        
        </>
    );
}

}


export default MatchAnimation;