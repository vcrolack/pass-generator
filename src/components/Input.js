import React from "react";

export const Input = ({ type, placeholder, list, isReadOnly, personalization, ico }) => {
  return (
    <>
      {type === "checkbox" && (
        <>
          {list.map((item, index) => {
            return ( 
                <label>
                  {item}
                  <input type="checkbox" name={index} id={index} />
                </label>
            );
          })}
        </>
      )}

      {type !== "checkbox" && isReadOnly && (
        <div className="input-wrapper pass-response">
          <div className="container-input">
            <input type={type} placeholder={placeholder} />
          </div>
          <div className="container-icon">
            <img  className="input-icon" src={ico} alt="" />
          </div>
        </div>
      )}

      {type !== "checkbox" && !isReadOnly && (
        <input  type={type} placeholder={placeholder} />
      )} 
    </>
  );
};