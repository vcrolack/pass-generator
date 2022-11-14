import React, { useState, useContext } from "react";

import { PassContext } from "../context/PassContext";

export const Checkbox = () => {
  const options = [
    "Includes capital letters",
    "Includes lowercase letters",
    "Includes numbers",
    "Includes symbols",
  ];
  const [userOptions, setUserOptions] = useState(
    new Array(options.length).fill(false)
  );
  const passContext = useContext(PassContext)

  const handleOnChange = (position) => {
    const updatedOptions = userOptions.map((option, index) =>
      index === position ? !option : option
    );

    setUserOptions(updatedOptions);
  };

  return (
    <PassContext.Provider value={passContext.options = userOptions}>
      {console.log(passContext)}
      <div className="wrapper-components">
        {options.map((option, index) => {
          return (
            <div key={index} className="container-options">
              <input
                type="checkbox"
                name={option}
                id={index}
                value={option}
                checked={userOptions[index]}
                onChange={() => handleOnChange(index)}
              />
              <label className="checkbox-label">{option}</label>
            </div>
          );
        })}
      </div>
    </PassContext.Provider>
  );
};
