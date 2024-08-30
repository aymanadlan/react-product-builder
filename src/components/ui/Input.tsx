import { InputHTMLAttributes } from "react";

interface IPropos extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IPropos) => {
  return (
    <input
      className="border-2 border-gray-500 bg-transparent
    rounded-lg
    shadow-lg focus:border-indigo-900 focus:outline-none
    focus:ring-1 focus:ring-indigo-900
    px-2 py-2 text-md"
      {...rest}
    />
  );
};

export default Input;
