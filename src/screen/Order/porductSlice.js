import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    fetchData() {},
    setData(state, action) {
      const product = action.payload;
      return {...state, ...product};
    },
    success() {},
    failed() {},
  },
});
console.log(productSlice);
export const {fetchData, setData} = productSlice.actions;
//Action

//Selector
//Reducer
const productReducer = productSlice.reducer;
export default productReducer;
