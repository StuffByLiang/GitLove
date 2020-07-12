import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { loginService } from './services/LoginService';
import { RuntimeInstance } from './classes/core/RuntimeInstance';
import { userService } from './services/UserService';
import { getUserService } from './services/GetUserService';


firebase.initializeApp({
    apiKey: 'AIzaSyAn3jb0unKrsVBsoi8ktx2wPIsbgROgxzM',
    authDomain: 'newhackwhothis2020.firebaseapp.com',
    databaseURL: 'https://newhackwhothis2020.firebaseio.com',
    projectId: 'newhackwhothis2020',
    storageBucket: 'newhackwhothis2020.appspot.com',
    messagingSenderId: '770074228861',
    appId: '1:770074228861:web:4392d3f41eeb41756ed914'
});

window["firebase"] = firebase;

getUserService.init();

window['code'] = `(define (frontslash x y)
(line x (+ y 15) (+ x 10) y 1))


(define (backslash x y)
(line x y (+ x 10) (+ y 15) 1))


(define (updateX x y)
(cond   [(= x 0) (+ x 10)]
    [(= (mod x 300) 0) 0]
    [else (+ x 10)]))

(define (updateY x y)
(cond   [(= x 0) y]
    [(= (mod x 300) 0) (+ y 15)]
    [else y]))

(define (randomslash x y)
(if (> (random-integer 100) 50)
    (frontslash x y)
    (backslash x y)))

(define (maze x y n)
(cond [(zero? n) (randomslash x y)]
    [else (randomslash x y)
          (maze
    (updateX x y)
    (updateY x y)
    (- n 1))]))

(maze 0 0 618)`;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
