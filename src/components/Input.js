import React from "react";
import { usePassContext } from "../context/PassContext";

export const Input = ({ type, isReadOnly, ico }) => {
  const { password, setShowNotification } = usePassContext();

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000)
  }

  return (
    <>
      {type !== "checkbox" && isReadOnly && (
        <div className="input-wrapper pass-response">
          <div
            onClick={copyPassword}
            className="container-input"
          >
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
