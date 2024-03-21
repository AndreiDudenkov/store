import React from "react";

import s from "./button.module.scss";

type ButtonType = {
  icon?: any;
  name: string;
  variant: "primary" | "secondary";
};
export const Button: React.FC<ButtonType> = ({ icon, name, variant }) => {
  return (
    <>
      <button className={`${s.button} ${s[variant]}`}>
        {icon && <img alt={"icon"} className={s.icon} src={icon} />}
        {name}
      </button>
    </>
  );
};
