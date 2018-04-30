import React, { Component } from "react";

import InputField from "component/Input";
import Button from "component/Button";

import { LanguageContext } from "LanguageContext";

class LoginForm extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { username, password } = prevState;

    if (username.error !== "" || password.error !== "") {
      return {
        username: {
          value: username.value,
          error:
            username.error !== ""
              ? nextProps.locals.username_field.required
              : ""
        },
        password: {
          value: password.value,
          error:
            password.error !== ""
              ? nextProps.locals.password_field.required
              : ""
        }
      };
    }

    return null;
  }
  state = {
    username: { value: "", error: "" },
    password: { value: "", error: "" }
  };
  handleSubmit = ev => {
    ev.preventDefault();
    const { locals } = this.props;
    const { username, password } = this.state;

    let isValid = true;

    if (username.value.trim() === "") {
      isValid = false;
      this.setState({
        username: {
          value: "",
          error: locals.username_field.required
        }
      });
    }

    if (password.value.trim() === "") {
      isValid = false;
      this.setState({
        password: {
          value: "",
          error: locals.password_field.required
        }
      });
    }

    if (isValid) {
      alert('Submited!!');
    }
  };
  handleChange = ev => {
    const key = ev.target.name;

    this.setState({
      [key]: {
        error: "",
        value: ev.target.value
      }
    });
  };
  render() {
    const { username, password } = this.state;
    const { locals } = this.props;

    return (
      <form className="w-full" onSubmit={this.handleSubmit}>
        <div className="p-6 flex flex-col bg-white shadow-md rounded">
          <InputField
            id="username"
            name="username"
            label={locals.username_field.label}
            type="text"
            placeholder={locals.username_field.placeholder}
            className="mb-4"
            value={username.value}
            onChange={this.handleChange}
            error={username.error}
          />
          <InputField
            id="password"
            name="password"
            label={locals.password_field.label}
            type="password"
            placeholder={locals.password_field.placeholder}
            value={password.value}
            onChange={this.handleChange}
            error={password.error}
          />
          <div className="w-full">
            <div className="mt-4 flex justify-center">
              <Button>{locals.button}</Button>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <a
            href="#"
            className="py-4 inline-block text-grey-dark hover:text-indigo"
          >
            {locals.forgot_password}
          </a>
        </div>
      </form>
    );
  }
}

export default props => (
  <LanguageContext.Consumer>
    {locals => <LoginForm {...props} locals={locals.login} />}
  </LanguageContext.Consumer>
);
