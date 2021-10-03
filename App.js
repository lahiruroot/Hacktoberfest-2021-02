import logo from './logo.svg';
import './App.css';
import User from './components/user/user';
import { useSelector, useDispatch } from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';
import {signIn} from './actions';

function App() {

const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>Sign</button>
      

      {isLogged ? <h2>Senssitive</h2> : '' }
      



      <User />

    </div>
  );
}

export default App;
