import { initializeApp } from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: 'AIzaSyBXobVn-eG9QkKpcKwvAL3ZKQof0pq00ss',
  authDomain: 'administrative-panel.firebaseapp.com',
  projectId: 'administrative-panel',
  storageBucket: 'administrative-panel.appspot.com',
  messagingSenderId: '902970674112',
  appId: '1:902970674112:web:37cd5ee9c3a8b629f3d625',
}
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider= new GoogleAuthProvider()
export const db = getFirestore(app)