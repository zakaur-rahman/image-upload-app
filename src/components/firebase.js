import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB5060fGYCFJ-QzbCbUTlM8sia_lmRq9qs",
    authDomain: "imageupload-1db66.firebaseapp.com",
    projectId: "imageupload-1db66",
    storageBucket: "imageupload-1db66.appspot.com",
    messagingSenderId: "561565948930",
    appId: "1:561565948930:web:da8e5156d10dfaef3a5b1b"
};
  

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)