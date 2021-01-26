import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// see the db

// firebase config
const config = {
    apiKey: 'AIzaSyC1yyvG_72az5kkh1s4xecSy7kSjg_AbbE',
    authDomain: 'netflix-react-clone-f9583.firebaseapp.com',
    projectId: 'netflix-react-clone-f9583',
    storageBucket: 'netflix-react-clone-f9583.appspot.com',
    messagingSenderId: '201209492959',
    appId: '1:201209492959:web:b80268470287d3d078806a',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
