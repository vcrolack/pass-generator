import React from "react";

export const Input = ({ type, placeholder, list, isReadOnly }) => {
  return (
    <>
      {type === "checkbox" && (
        <>
          {list.map((item, index) => {
            return ( 
                <label>
                  <input type="checkbox" name={index} id={index} />
                  {item}
                </label>
            );
          })}
        </>
      )}

      {type !== "checkbox" && isReadOnly && (
        <input type={type} placeholder={placeholder} readOnly />
      )}

      {type !== "checkbox" && !isReadOnly && (
        <input type={type} placeholder={placeholder} />
      )}
    </>
  );
};
