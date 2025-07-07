import { createSlice } from "@reduxjs/toolkit";
import { getContactData } from "../service/contactService";
import { ContactServiceState } from "@/utils/types";

const initialState: ContactServiceState = {
  isLoading: false,
  Contacts: null,
  errors: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContactData.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getContactData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Contacts = action.payload;
      state.errors = null;
    });
    builder.addCase(getContactData.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });
  },
});

export default contactSlice.reducer;
