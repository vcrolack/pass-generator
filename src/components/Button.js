import React from "react";

export const Button = ({ type, value, styleBtn, url, callback }) => {
  return (
    <div>
      {type === "button" && (
        <button onClick={callback} type="button" className={styleBtn}>
          {value}
        </button>
      )}

      {type === "link" && (
        <a href={url} className={styleBtn} >{value}</a>
      )}
    </div>
  );
};
