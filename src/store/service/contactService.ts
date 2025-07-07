import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { ContactDataProps } from "@/utils/types";

export const getContactData = createAsyncThunk(
  "contact/getContactData",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "contact"));
      const doc = querySnapshot.docs[0];
      const aboutData = {
        ...doc.data(),
      } as ContactDataProps;
      return aboutData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
