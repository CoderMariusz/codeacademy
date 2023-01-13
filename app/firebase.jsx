import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBXTQKg1saKdz33UV-fVMGogO68admI8Xo',
  authDomain: 'codeacademy-1c76a.firebaseapp.com',
  projectId: 'codeacademy-1c76a',
  storageBucket: 'codeacademy-1c76a.appspot.com',
  messagingSenderId: '372294999945',
  appId: '1:372294999945:web:116ce583b2b20b3aff4b58',
  measurementId: 'G-770Z8Y2NT4'
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
