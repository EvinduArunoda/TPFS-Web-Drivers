/* eslint-disable linebreak-style */
import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAUJyckRg47f7Qv6K_Ixx-fHpEkVgw_qmQ',
  authDomain: 'e-fining-sep.firebaseapp.com',
  databaseURL: 'https://e-fining-sep.firebaseio.com',
  projectId: 'e-fining-sep',
  storageBucket: 'e-fining-sep.appspot.com',
  messagingSenderId: '511891416337',
  appId: '1:511891416337:web:625f2108e96cafeeca58b0',
  measurementId: 'G-MQMK6F7N0B'
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
