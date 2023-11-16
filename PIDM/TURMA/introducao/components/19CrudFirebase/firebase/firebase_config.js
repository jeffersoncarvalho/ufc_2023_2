import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"


// Your web app's Firebase configuration
const firebaseConfig = {
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
const auth = initializeAuth (
    app,
    {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    }
)

//firestore
const firestoreDb = getFirestore(app)

//exportando
export { auth, firestoreDb }
