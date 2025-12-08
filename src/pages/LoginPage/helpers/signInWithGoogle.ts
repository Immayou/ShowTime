import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  OAuthProvider,
} from 'firebase/auth';
import app from '../../../firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return null;
  }
};

export const signInWithApple = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Apple:', error);
    return null;
  }
};
