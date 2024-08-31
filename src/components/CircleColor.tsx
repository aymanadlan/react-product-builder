import { HTMLAttributes } from "react";

interface IPropos extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IPropos) => {
  return (
    <span
      className={`block w-5 h-5 rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColor;
