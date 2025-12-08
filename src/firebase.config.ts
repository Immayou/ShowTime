import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBnKa2Rf4rroZj7-UnarcKblcU3QtvyCJI',
  authDomain: 'showoff-90a56.firebaseapp.com',
  projectId: 'showoff-90a56',
  storageBucket: 'showoff-90a56.firebasestorage.app',
  messagingSenderId: '179155234650',
  appId: '1:179155234650:web:881db65cfc0cd022314d63',
  measurementId: 'G-8RWGRK46PB',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
