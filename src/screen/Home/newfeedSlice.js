import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const newfeedSlice = createSlice({
  name: 'newfeed',
  initialState: [],
  reducers: {
    fetchNewfeeds() {},
    setNewfeed(state, action) {
      const newfeed = action.payload;
      return {...state, ...newfeed};
    },
    success() {},
    failed() {},
  },
});
export const {fetchNewfeeds, setData} = newfeedSlice.actions;
//Action

//Selector
//Reducer
const newfeedReducer = newfeedSlice.reducer;
export default newfeedReducer;
