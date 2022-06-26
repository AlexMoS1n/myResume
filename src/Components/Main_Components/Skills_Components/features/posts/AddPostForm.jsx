import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'

function AddPostForm(){
const [title,setTitle]=useState('');
const [content,setContent]=useState('');

const onTitleChange=e=>setTitle(e.target.value);
const onContentChange=e=>setContent(e.target.value);
  const dispatch = useDispatch()

const onSavePostClicked = () => {
  if (title && content) {
    dispatch(
      postAdded({
        userId: nanoid(),
        id: nanoid(),
        title,
        body: content
      }
    )
    )

    setTitle('')
    setContent('')
  }
};
  return (
    <article>
      <h4>Добавить новый пост</h4>
      <form>
        <div className="divCreatePosts">
        <label htmlFor='postTitle'> Заголовок поста</label>
        <input type="text" name="postTitle" value={title} onChange={onTitleChange} className="inputNodeJS"/>
        </div>
        <div className="divCreatePosts">
        <label htmlFor="postContent">Контент</label>
        <textarea name="postContent" value={content} onChange={onContentChange} className="textareaNodeJS"/>
        </div>
        <button type="button" onClick={onSavePostClicked} className="buttonNodeJS">Сохранить пост</button>
      </form>
      <br />
    </article>
)};
export default AddPostForm;
