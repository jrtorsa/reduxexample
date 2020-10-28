import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h4>Counter {counter}</h4>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(logIn())}>Log In</button>
        {isLogged && <h3>This is Info you shouldn't see</h3>}
      </div>
    </>
  );
}

export default App;
