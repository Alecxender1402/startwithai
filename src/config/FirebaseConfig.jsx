
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi5cGDjs1D0nKtiaGDTLWamVxW6tMTFd4",
  authDomain: "aistart-7679d.firebaseapp.com",
  projectId: "aistart-7679d",
  storageBucket: "aistart-7679d.appspot.com",
  messagingSenderId: "543393280317",
  appId: "1:543393280317:web:89d23f2fd156adc88b1554",
  measurementId: "G-MTJQ72D4JM"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
