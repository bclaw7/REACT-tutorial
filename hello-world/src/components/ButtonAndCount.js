import { useState } from 'react';

const ButtonAndCount = (props) => {
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button className={props.classN} onClick={increaseCount}>
        {props.bValue}
      </button>
      <div>{count}</div>
    </>
  );
};

export default ButtonAndCount;
