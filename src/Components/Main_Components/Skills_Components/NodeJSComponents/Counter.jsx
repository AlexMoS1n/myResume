import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement,incrementByAmount,incrementAsync} from '../features/counter/counterSlice'
function Counter(){
let [sum, setSum]=useState(2);
let [delay, setDelay]=useState(1);
const counter=useSelector(state=>state.counter.value);
const dispatch=useDispatch();
return (
  <article>
    <h3>Счетчик</h3>
        <p>Значение счетчика:</p>
        <p style={{fontSize:'40px'}}><b>{counter}</b></p>
        <h4>Сихронный</h4>
        <button className="buttonNodeJS" onClick={()=>dispatch(increment())}>прибавить</button>
        <button className="buttonNodeJS" onClick={()=>dispatch(decrement())}>отнять</button>
        <button className="buttonNodeJS" onClick={()=>dispatch(incrementByAmount(Number(sum)))}>прибавить сумму</button>
        <input value={sum} onChange={e=>setSum(e.target.value)} className="inputNodeJS"/>
        <h4>Асихронный</h4>
        <button className="buttonNodeJS" onClick={()=>dispatch(incrementAsync(Number(sum),Number(delay)))}>прибавить асихронно сумму</button>
        <label htmlFor='delay'>задержка времени в секундах</label><input value={delay} onChange={(e)=>setDelay(e.target.value)} className="inputNodeJS"/>
  </article>
)
}
export default Counter;
