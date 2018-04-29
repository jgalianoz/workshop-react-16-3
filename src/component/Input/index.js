import React from "react";
import cn from 'classnames';

const InputField = ({ id, label, type, placeholder, className }) => (
  <div className={cn("w-full", className)}>
    <label
      className="mb-2 block tracking-wide uppercase text-grey-darker text-xs font-bold"
      htmlFor={id}
    >
      {label}
    </label>
    <input
      className="py-3 px-4 block w-full appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
