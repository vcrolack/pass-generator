import React from "react";

export const Checkbox = () => {
  const options = [
    "Includes capital letters",
    "Includes lowercase letters",
    "Includes numbers",
    "Includes symbols",
  ];
  return (
    <div className="password-components">
      <form action="">
        {options.map((option, index) => {
          return (
            <>
              <label><input type="checkbox" name={option} id={index} value={index} /> {option}</label>
            </>
          );
        })}
      </form>
    </div>
  );
};
