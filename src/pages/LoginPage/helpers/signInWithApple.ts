import { getAuth, signInWithPopup, OAuthProvider, User } from 'firebase/auth';
import app from '../../../firebase.config';

const auth = getAuth(app);
const appleProvider = new OAuthProvider('apple.com');

export const signInWithApple = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Apple:', error);
    return null;
  }
};
