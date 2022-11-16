import { usePassContext } from "../context/PassContext";

export const Slider = () => {
  const {count, setCount} = usePassContext();

  return (
    <>
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
          onChange={(e) => {setCount(parseInt(e.target.value))}}
          min="0"
          max="35"
          className="slider-rectangule"
          type="range"
          name="slider"
          id="slider"
        />
      </div>
    </>
  );
};
