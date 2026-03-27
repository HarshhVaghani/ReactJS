// ============================================================
//  Firebase Configuration
//  ⚠️  Replace the placeholder values below with your own
//     Firebase project credentials.
//
//  Steps:
//  1. Go to https://console.firebase.google.com/
//  2. Click "Add project" and follow the wizard
//  3. Inside the project, click the </> (Web) icon to add a web app
//  4. Copy the firebaseConfig object shown and paste it here
//  5. Enable Firestore Database (Build → Firestore Database → Create)
//  6. Enable Storage (Build → Storage → Get Started)
// ============================================================

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
