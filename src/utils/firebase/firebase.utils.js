import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc,getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDesr7DY5JHXUHp6OEWSA1SVXjUKwx7GBc",
    authDomain: "crwn-clothing-db-502bd.firebaseapp.com",
    projectId: "crwn-clothing-db-502bd",
    storageBucket: "crwn-clothing-db-502bd.appspot.com",
    messagingSenderId: "733115094637",
    appId: "1:733115094637:web:492dde7c3c08ba9bb05164"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);
// };

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addInfo) => {

    if (!userAuth) return;

    const userDocRef = doc(db, 'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
          if(!userSnapshot.exists())
          {
            await setDoc(userDocRef, {displayName,email,createdAt, ...addInfo});

          }
    }
    catch(error){
      console.log("Error in writing user to Firestore");
    }
    return userDocRef;
};

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
  export const createAuthUserFromEmailPwd = async (email, password) => {
  
  if(!email || !password) {
    console.log('Email/Password are missing');
    return;}

  return await createUserWithEmailAndPassword(auth, email, password);
}