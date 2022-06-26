import {createSlice} from '@reduxjs/toolkit';
const initialState= {
  value: 0
};
const counterSlice=createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment: state=> {
      state.value++
    },
    decrement: state=> {
      state.value--
    },
    incrementByAmount: (state,action)=>{
    state.value+=action.payload
    }
  }
});
export const incrementAsync = (amount,time) => (dispatch)=> {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, time*1000)
}
export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
