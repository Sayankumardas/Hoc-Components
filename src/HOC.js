import React, { useState } from "react";

const HOC = (WrappedComponent) => {
  function HOC(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <>
        <WrappedComponent
          count={count}
          increment={increment}
          name={props.name}
        />
      </>
    );
  }
  return HOC;
};

export default HOC;
