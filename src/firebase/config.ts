import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0rj4ckGhl7GRguRMh-EShO6eR3Ic0S-M",
  authDomain: "svsp-admin.firebaseapp.com",
  projectId: "svsp-admin",
  storageBucket: "svsp-admin.firebasestorage.app",
  messagingSenderId: "325758257923",
  appId: "1:325758257923:web:71bba4ce34f4c67bf0f736",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;