import { useState, useEffect, useContext } from "react";

import { PassContext } from "../context/PassContext";

export const Slider = () => {
  const [count, setCount] = useState(0);
  const passContext = useContext(PassContext);

  useEffect(() => {}, [count]);

  return (
    <PassContext.Provider value={passContext.lengthPass = parseInt(count)}>
      <div className="letter-counter">
        <div className="length-wrapper">
          <div className="letter-counter-title">
            <p className="p-title-counter">Password length</p>
          </div>
          <div className="letter-counter-count">
            <p className="counter">{count}</p>
          </div>
        </div>
      </div>
      <div className="slider">
        <input
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="0"
          max="35"
          className="slider-rectangule"
          type="range"
          name="slider"
          id="slider"
        />
      </div>
    </PassContext.Provider>
  );
};
