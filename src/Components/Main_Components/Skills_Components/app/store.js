import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import counterChange from '../features/counter/counterSlice';
export default configureStore({
  reducer:{
    counter: counterChange,
    posts: postsReducer
  }
})
