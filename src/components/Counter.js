import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show =  useSelector((state)=> state.counter.showCounter)

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const incrementBy5Handler = () => {
    dispatch(counterAction.incrementby5(5));
  };

  const decrementBy5Handler = () => { 
    dispatch(counterAction.decrementby5(5)); 
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show &&  <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler}>Increment BY 5</button>
        <button onClick={decrementBy5Handler}>Decrement BY 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
