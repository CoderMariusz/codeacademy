import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
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
  const querySnapshot = await getDocs(collection(db, 'todos'));
  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
}
async function getTodo(id) {
  const docRef = doc(db, 'todo', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}
async function addTodo(todo) {
  const docRef = await addDoc(collection(db, 'todos'), todo);
  console.log('Document written with ID: ', docRef.id);
}

function logInEmailAndPass(email, password) {
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

export { getCurrentUser, getTodos, logInEmailAndPass, logOutUser, addTodo };
