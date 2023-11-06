import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    const increaseCount = () => {
        setCounter(counter + 1);
    }

    const increaseByValue = () => {
        setCounter(counter + parseInt(inputValue));
    }

  return (
    <div>
        <h1 className='m-4'>Counter</h1>
        {console.log("I have been rendered again")}
        <div>
            <p className="fs-3">Count from state: {counter}</p>
        </div>
        <Button onClick={() => increaseCount()} className="me-2">Increment</Button>
        <Button onClick={() => setCounter(counter - 1)} variant="secondary" className="me-2">Decrement</Button>
        <Button onClick={() => increaseByValue()} className="me-2">Increment By Value Given</Button>
        <input type="text" value={inputValue} onChange={(e) => {
            console.log(e)
            return setInputValue(e.target.value)}
            } />
    </div>
  )
}

export default Counter