import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit';

const postsAdapter=createEntityAdapter();
const initialState=
postsAdapter.getInitialState({
  status:'',
  error:''
})

const postsSlice=createSlice({
  name:'posts',
  initialState,
  reducers:{
    postAdded: postsAdapter.addOne,
    postDel:postsAdapter.removeOne,
    postDellAll:postsAdapter.removeAll
  },
    extraReducers(builder) {
      builder
     .addCase(postsRequest.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(postsRequest.fulfilled, (state, action) => {
         state.status = 'succeeded';
         postsAdapter.setMany(state, action.payload)
      })
      .addCase(postsRequest.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

  }
});

export const postsRequest=createAsyncThunk('posts/fetchPosts',async ()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/posts');
  let json= await new Promise (resolve=>setTimeout(()=> resolve(response.json()),2000))
  return json

})
export const { postAdded,postDel,postDellAll } = postsSlice.actions;
export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(state => state.posts);
