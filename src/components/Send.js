import React from "react";
import { usePassContext } from "../context/PassContext";
import { generatePassword } from "../helpers/generatePassword";

export const Send = ({ styleBtn }) => {

  const { options, count } = usePassContext();

  const handleClick = () => {
    if ((options[0] || options[1] || options[2] || options[3]) && count >= 5) {
      const pass = generatePassword(count, options);
      console.log(pass)
    }
  }

  return (
    <div>
        <button onClick={handleClick} type="button" className={styleBtn}>
          Generate Password
        </button>
    </div>
  );
};
