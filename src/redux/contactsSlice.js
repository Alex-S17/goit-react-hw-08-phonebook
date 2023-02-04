import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from "../redux/operations";

export const contactsSlice = createSlice({
  name: 'contacts',
  
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },   
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.data.findIndex(
        contact => contact.id === action.payload.id
      );
      state.data.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer








//Simple reducer and internal actions
  // reducers: {
  //   addContact(state, action) {
  //     state.data.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     const index = state.data.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.data.splice(index, 1);
  //   },
  // },
