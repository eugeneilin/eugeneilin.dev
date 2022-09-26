import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAUurcDE43sFoXhuNJFKm4E6vZmn7iwYJU',
  authDomain: 'portfolio-website-ad519.firebaseapp.com',
  databaseURL: 'https://portfolio-website-ad519.firebaseio.com',
  projectId: 'portfolio-website-ad519',
  storageBucket: 'portfolio-website-ad519.appspot.com',
  messagingSenderId: '735375370557',
  appId: '1:735375370557:web:d4d80e0504d79400bafd54',
  measurementId: 'G-F3FXWY048S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export const db = getDatabase(app);

const analytics = getAnalytics(app);

export default db;
