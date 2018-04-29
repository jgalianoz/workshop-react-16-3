import React, { Component } from "react";
import cn from "classnames";

import "./styles.css";

class FadeTranslation extends Component {
  constructor(props) {
    super(props);

    this.child = React.createRef();
    this.timeout = null;
  }
  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      if (this.child.current) {
        this.child.current.classList.add("hide", "move");
        return true;
      }
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      setTimeout(() => {
        this.child.current.classList.remove("hide");

        setTimeout(() => {
          this.child.current.classList.remove("move");
        }, 100);
      }, 150);
    }
  }
  render() {
    const { children, className } = this.props;
    return (
      <span
        ref={this.child}
        className={cn("inline-block translation", className)}
      >
        {children}
      </span>
    );
  }
}

export default FadeTranslation;
