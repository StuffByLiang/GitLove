import "./MatchAnimation.css";
import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

class MatchAnimation extends React.Component {

  render() {
    return (
      <>
        <IonAlert
          isOpen={true}
          cssClass='my-custom-class'
          header={'Congratulations! You Have Matched!'}
          message='<img src=/assets/images/heart.png alt="Logo" />'
          buttons={['OK']}
        />

      </>
    );
  }

}


export default MatchAnimation;