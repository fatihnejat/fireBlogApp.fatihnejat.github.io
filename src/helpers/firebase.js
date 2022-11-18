import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  databaseURL:process.env.REACT_APP_databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (registerMail, registerPassword) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerMail,
      registerPassword
    );
    console.log(user);
  } catch (error) {
    alert("error");
  }
};

export const LoginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("error");
  }
};

export const googleRegister = async () => {
  try {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  } catch (error) {
    alert("error");
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email } = user;
      setCurrentUser({ email });
    } else {
      console.log("user sign out");
    }
  });
};

export const logOut = () => {
  signOut(auth);
};
