import React from "react";
import { usePassContext } from "../context/PassContext";

export const Input = ({
  type,
  placeholder,
  list,
  isReadOnly,
  personalization,
  ico,
}) => {
  const { password } = usePassContext();
  return (
    <>
      {type !== "checkbox" && isReadOnly && (
        <div className="input-wrapper pass-response">
          <div onClick={() => navigator.clipboard.writeText(password)} className="container-input">
            <input readOnly type={type} placeholder={password} />
          </div>
          <div className="container-icon">
            <img className="input-icon" src={ico} alt="" />
          </div>
        </div>
      )}
    </>
  );
};
