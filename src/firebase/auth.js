import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import { auth } from "./config.js";

// Function to create a new user account with email and password
const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      success: true,
      message: userCredential.user,
    };
  } catch (error) {
    return { success: false, message: error };
  }
};

const sendEmailVerification = async (user) => {
  try {
    if (!user || !user.emailVerified) {
      await sendEmailVerification(user);
      return {
        success: true,
        message: "Verification link sent to your email.",
      };
    } else {
      return { success: false, message: "Email already verified." };
    }
  } catch (error) {
    // Handle errors appropriately, e.g., display error messages to user
    return { success: false, message: error.message };
  }
};

export const signUpWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // Handle successful sign-up with Google
    const user = result.user;
    return {
      success: true,
      message: {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
      },
    };
  } catch (error) {
    // Handle errors appropriately, e.g., display error messages to user
    return { success: false, message: error.message };
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      success: true,
      message: userCredential.user,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// Function to log in with Google account
const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
export const logout = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve({
          success: true,
          message: "Logout successful",
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error.message,
        });
      });
  });
};

export const deleteUserAccount = () => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser;
    deleteUser(user)
      .then(() => {
        resolve({
          success: true,
          message: "Account Deleted Successfully",
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error.message,
        });
      });
  });
};

export { signUpWithEmailAndPassword, signInWithGoogle };
