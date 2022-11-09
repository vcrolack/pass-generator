import React from "react";

export const Checkbox = () => {
  const options = [
    "Includes capital letters",
    "Includes lowercase letters",
    "Includes numbers",
    "Includes symbols",
  ];
  return (
    <div className="wrapper-components">
      <form action="">
        {options.map((option, index) => {
          return (
            <div className="container-options">
              <input type="checkbox" name={option} id={index} value={index} /> 
              <label className="checkbox-label">{option}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
};
