import React from "react";
import cn from 'classnames';

const InputField = ({ id, label, type, placeholder, className }) => (
  <div className={cn("w-full", className)}>
    <label
      class="mb-2 block tracking-wide uppercase text-grey-darker text-xs font-bold"
      for={id}
    >
      {label}
    </label>
    <input
      class="py-3 px-4 block w-full appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
