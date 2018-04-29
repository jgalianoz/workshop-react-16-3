import React, { Component } from "react";
import cn from "classnames";

const FORM_INPUTS = ["INPUT", "TEXTAREA"];

class InputField extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }
  componentDidUpdate() {
    if (this.props.error !== "") {
      const activeElement = document.activeElement.nodeName;

      if (FORM_INPUTS.includes(activeElement) === false) {
        this.input.current.focus();
      }
    }
  }
  render() {
    const { id, label, type, className, error, ...rest } = this.props;

    return (
      <div className={cn("w-full", className)}>
        <label
          className="mb-2 block tracking-wide uppercase text-grey-darker text-xs font-bold"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className={cn(
            "mb-3 py-3 px-4 block w-full appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded",
            { "border-red": error !== "" }
          )}
          id={id}
          type={type}
          {...rest}
          ref={this.input}
        />
        {error !== "" && <p className="text-red text-xs italic">{error}</p>}
      </div>
    );
  }
}

export default InputField;
