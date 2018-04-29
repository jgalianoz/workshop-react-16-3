import React, { Component } from "react";

import InputField from "component/Input";
import Button from "component/Button";

import { LanguageContext } from "LanguageContext";

const LoginForm = () => (
  <LanguageContext.Consumer>
    {({ login }) => (
      <form className="w-full">
        <div className="p-6 flex flex-col bg-white shadow-md rounded">
          <InputField
            id="username"
            label={login.username_field.label}
            type="text"
            placeholder={login.username_field.placeholder}
            className="mb-4"
          />
          <InputField
            id="password"
            label={login.password_field.label}
            type="password"
            placeholder={login.password_field.placeholder}
          />
          <div className="w-full">
            <div className="mt-4 flex justify-center">
              <Button>{login.button}</Button>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <a
            href="#"
            className="py-4 inline-block text-grey-dark hover:text-indigo"
          >
            {login.forgot_password}
          </a>
        </div>
      </form>
    )}
  </LanguageContext.Consumer>
);

export default LoginForm;
