import React, { useState, useContext } from "react";

import { PassContext, usePassContext } from "../context/PassContext";

export const Checkbox = () => {
  const {options, setOptions, userOptions} = usePassContext();


  const handleOnChange = (position) => {
    const updatedOptions = options.map((option, index) =>
      index === position ? !option : option
    );

    setOptions(updatedOptions);
  };

  return (
      <div className="wrapper-components">
        {userOptions.map((option, index) => {
          return (
            <div key={index} className="container-options">
              <input
                type="checkbox"
                name={option}
                id={index}
                value={option}
                checked={options[index]}
                onChange={() => handleOnChange(index)}
              />
              <label className="checkbox-label">{option}</label>
            </div>
          );
        })}
      </div>
  );
};
