import React from "react";

const Button = ({ styles, children }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-xl `}
    >
      {children}
    </button>
  );
};

export default Button;
