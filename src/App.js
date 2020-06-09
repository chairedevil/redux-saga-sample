import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease } from './redux/actions/counterAction'
import './App.css';

function App() {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counterReducer.counter);
  const data = useSelector(state => state.counterReducer.data);
  const isLoading = useSelector(state => state.loadingReducer.isLoading);

  return (
    <div className="App">
      <h1>Counter : { counter }</h1>
      <h2>Loading Status : { isLoading ? 'ローディング' : '______' } </h2>
      <h2>Data : { data }</h2>
      <button onClick={ () => dispatch({type: 'INCREASE', payload: counter }) }>+</button>
      <button onClick={ () => dispatch(decrease('マイナス')) }>-</button>
    </div>
  );
}

export default App;
