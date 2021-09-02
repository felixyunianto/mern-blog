import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <div>
      <button
        className="p-3 text-base bg-green-300 w-full box-border rounded-lg border-0 text-white uppercase cursor-pointer"
        {...rest}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
