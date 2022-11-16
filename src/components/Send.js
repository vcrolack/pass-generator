import React, { useEffect, useState } from "react";
import { usePassContext } from "../context/PassContext";
import { generatePassword } from "../helpers/generatePassword";

export const Send = ({ styleBtn }) => {

  const { options, count, setPassword } = usePassContext();
  const [isValid, setIsValid] = useState(false);
  const [cssClass, setCssClass] = useState("btn-disabled")

  useEffect(() => {
    if ((options[0] || options[1] || options[2] || options[3]) && count >= 5) {
      setIsValid(true);
      setCssClass(styleBtn)
    } else {
      setIsValid(false)
      setCssClass("btn-disabled")
    }
  }, [options, count, isValid, styleBtn])

  const handleClick = () => {
    if ((options[0] || options[1] || options[2] || options[3]) && count >= 5) {
      const pass = generatePassword(count, options);
      setPassword(pass);
    }
  }

  return (
    <div>
        <button disabled={!isValid} onClick={handleClick} className={cssClass} type="button" >
          Generate Password
        </button>
    </div>
  );
};
