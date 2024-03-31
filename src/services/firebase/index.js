import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCdmqIeS-5uJC0QGDmQm6wbdh3beKbic4Y",
  authDomain: "proyecto-de-react-js-54040.firebaseapp.com",
  projectId: "proyecto-de-react-js-54040",
  storageBucket: "proyecto-de-react-js-54040.appspot.com",
  messagingSenderId: "176744289208",
  appId: "1:176744289208:web:8ff3bf4f0f5f96a573b54d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);