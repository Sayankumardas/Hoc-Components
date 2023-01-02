import { useState } from "react";
import HOC from "./HOC";
const Acomp = (props) => {
  /*  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }; */
  const { count, increment, name } = props;
  return (
    <>
      <h1>
        <button onClick={increment}>
          {name}:{count}
        </button>
      </h1>
    </>
  );
};

export default HOC(Acomp);
