import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDokb12U8lhlFKIUArexeCxiOBKMRCvF8I',
  authDomain: 'portfolio-v2-374421.firebaseapp.com',
  projectId: 'portfolio-v2-374421',
  storageBucket: 'portfolio-v2-374421.appspot.com',
  messagingSenderId: '276300097583',
  appId: '1:276300097583:web:a1a2d43c83b04ee9427eda',
  measurementId: 'G-5E77VCLEFL'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

function getCurrentUser() {
  return auth.currentUser;
}

async function getTodos() {
  const querySnapshot = await getDocs(collection(db, 'todo'));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

function logInEmailAndPass(email, password) {
  console.log('dziala');
  return signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user.user;
    })
    .catch((err) => err.message);
}

function logOutUser() {
  signOut(auth)
    .then(() => {
      console.log('user logout');
    })
    .catch((err) => console.log(err.message));
}

export { getCurrentUser, getTodos, logInEmailAndPass, logOutUser };
