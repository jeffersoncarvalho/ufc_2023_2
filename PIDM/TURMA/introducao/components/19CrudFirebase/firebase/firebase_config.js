import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"


// Your web app's Firebase configuration
const firebaseConfig = {
   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth (
    app,
    {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    }
)

export { auth }
