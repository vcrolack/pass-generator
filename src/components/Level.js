import React from "react";
import { usePassContext } from "../context/PassContext";

export const Level = () => {
  const { level } = usePassContext();

  return (
    <div className="level-container">
      {console.log(level)}
      <div className="left-box">
        <p className="level-title">Security level</p>
      </div>
      <div className="right-box">
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {!level && (
            <>
              <rect id="1" y="18" width="4" height="6" fill="#888888" />
              <rect id="2" x="6" y="12" width="4" height="12" fill="#888888" />
              <rect id="3" x="12" y="6" width="4" height="18" fill="#888888" />
              <rect id="4" x="18" width="4" height="24" fill="#888888" />
            </>
          )}
          {level === "lower" && (
            <>
              <rect id="1" y="18" width="4" height="6" fill="red" />
              <rect id="2" x="6" y="12" width="4" height="12" fill="red" />
              <rect id="3" x="12" y="6" width="4" height="18" fill="#888888" />
              <rect id="4" x="18" width="4" height="24" fill="#888888" />
            </>
          )}
          {level === "medium" && (
            <>
              <rect id="1" y="18" width="4" height="6" fill="orange" />
              <rect id="2" x="6" y="12" width="4" height="12" fill="orange" />
              <rect id="3" x="12" y="6" width="4" height="18" fill="orange" />
              <rect id="4" x="18" width="4" height="24" fill="#888888" />
            </>
          )}
          {level === "high" && (
            <>
              <rect id="1" y="18" width="4" height="6" fill="green" />
              <rect id="2" x="6" y="12" width="4" height="12" fill="green" />
              <rect id="3" x="12" y="6" width="4" height="18" fill="green" />
              <rect id="4" x="18" width="4" height="24" fill="green" />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
