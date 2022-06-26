import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {postsRequest,postDel,selectAllPosts,selectPostIds,postDellAll} from '../features/posts/postsSlice';
function ReduxPosts(){
const dispatch=useDispatch();
 const posts=useSelector(selectAllPosts);
 const orderedPostIds = useSelector(selectPostIds)
  const status=useSelector(state=>state.posts.status);
  const errorPosts=useSelector(state=>state.posts.error);
  let renderPosts='';
 if (posts.length) {
    renderPosts=posts.map(post => (
      <article key={post.id}>
        <h4>{posts.length} {post.title}</h4>
        <p>{post.body}</p>
        <button onClick={()=>dispatch(postDel(post.id))}>удалить</button>
      </article>
    ))
  };
  if(status==='loading'){renderPosts=<p>Загрузка...</p>}
  else if(status==='succeeded'){
    renderPosts=posts.map((post,index) => (
      <article key={post.id}>
        <h4>{index+1} {post.title}</h4>
        <p>{post.body}</p>
        <button onClick={()=>dispatch(postDel(post.id))} className="buttonDelNodeJS">удалить</button>
      </article>
    ))

  }else if(status==='failed'){
    renderPosts=<p>Возникла ошибка с приемом данных {errorPosts}</p>
  };
  return (
  <section>
    <h4> Посты</h4>
    <button onClick={()=>dispatch(postsRequest())} className="buttonNodeJS">загрузить посты</button>
    <button onClick={()=>dispatch(postDellAll(orderedPostIds))} className="buttonDelNodeJS">удалить посты</button>
    {renderPosts}
  </section>)
}
export default ReduxPosts;
