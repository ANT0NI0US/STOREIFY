import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db, storage } from "@/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { userProps } from "@/utils/types";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

export const signInFireBase = createAsyncThunk(
  "login/signInFireBase",
  async (
    {
      email,
      password,
      rememberMe,
    }: { email: string; password: string; rememberMe: boolean },
    thunkAPI,
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const currentUser = userCredential.user;
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as userProps[];
      const result = fetchedUsers.find((user) => user.uid === currentUser.uid);

      if (!result || result.type === "admin") {
        throw new Error("User not found in the database");
      }

      if (rememberMe && result.uid) {
        localStorage.setItem("token", result.uid);
      } else if (!rememberMe && result.uid) {
        sessionStorage.setItem("token", result.uid);
      }
      const isAdmin = (result.type as string) === "admin" ? "true" : "false";

      if (rememberMe) {
        localStorage.setItem("isAdmin", isAdmin);
      } else {
        sessionStorage.setItem("isAdmin", isAdmin);
      }

      toast.success(`Welcome ${result.displayName}`);
      return thunkAPI.fulfillWithValue({ ...result });
    } catch (error) {
      toast.error("Invalid email or password.");

      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signInWithGoogle = createAsyncThunk(
  "login/signInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as userProps[];

      let existingUser = fetchedUsers.find((u) => u.uid === user.uid);

      console.log(existingUser);

      if (!existingUser) {
        const userData: userProps = {
          uid: user.uid,
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
          cart: [],
          favorites: [],
          type: "user",
        };
        await setDoc(doc(db, "users", user.uid), userData);
        existingUser = userData;
      }

      localStorage.setItem("token", existingUser?.uid || "");
      localStorage.setItem("isAdmin", "false");

      toast.success(`Welcome ${existingUser?.displayName}`);
      return thunkAPI.fulfillWithValue({ ...existingUser });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Google sign-in failed.");
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const signUpFirebase = createAsyncThunk(
  "auth/signUpFirebase",
  async (
    {
      name,
      email,
      password,
      file,
    }: { name: string; email: string; password: string; file: File | null },
    thunkAPI,
  ) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      let photoURL = null;
      if (file) {
        // Upload profile image
        const storageRef = ref(storage, `images/${Date.now()}-${name}`);
        const uploadTask = await uploadBytesResumable(storageRef, file);
        photoURL = await getDownloadURL(uploadTask.ref);
      }

      // Update user profile
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      // Save user data in Fire store
      const userData = {
        uid: user.uid,
        displayName: name,
        email,
        photoURL,
        type: "user",
      };
      await setDoc(doc(db, "users", user.uid), userData);

      return thunkAPI.fulfillWithValue(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getUserByToken = createAsyncThunk(
  "login/getUserByToken",
  async (token: string, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as userProps[];
      const result = fetchedUsers.find((user) => user.uid === token);
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const sendResetPasswordEmail = createAsyncThunk(
  "auth/sendResetPasswordEmail",
  async (email: string, thunkAPI) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully.");
      return thunkAPI.fulfillWithValue("Email sent");
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Failed to send password reset email.");
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
