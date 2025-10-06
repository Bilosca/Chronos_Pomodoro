import React from "react";
import style from "./style.module.css";

type ButtonInputProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function Button({ icon, color='green', ...props }: ButtonInputProps) {
  return (
    <div className={style.btnContainer}>
      <button className={`${style.btnInput} ${style[color]}`} {...props}>
        {icon}
      </button>
    </div>
  );
}
