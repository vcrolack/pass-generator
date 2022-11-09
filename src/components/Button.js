import React from "react";

export const Button = ({ type, value, styleBtn, url }) => {
  return (
    <div>
      {type === "button" && (
        <button type="button" className={styleBtn}>
          {value}
        </button>
      )}

      {type === "link" && (
        <a href={url} className={styleBtn} >{value}</a>
      )}
    </div>
  );
};