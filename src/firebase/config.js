import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDsUhXr4mUb59JPKH_LeIQuxH7jOuBAehE',
  authDomain: 'cooking-ninja-site-8fbfe.firebaseapp.com',
  projectId: 'cooking-ninja-site-8fbfe',
  storageBucket: 'cooking-ninja-site-8fbfe.appspot.com',
  messagingSenderId: '604417676563',
  appId: '1:604417676563:web:48f63000a0993e1c3036e6',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
