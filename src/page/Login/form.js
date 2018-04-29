import React, { Component } from "react";

import InputField from 'component/Input';
import Button from 'component/Button';

const LoginForm = () => (
  <form class="w-full">
    <div className="p-6 flex flex-col bg-white shadow-md rounded">
      <InputField
        id="username"
        label="Username"
        type="text"
        placeholder="admin"
        className="mb-4"
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        placeholder="••••"
      />
      <div className="w-full">
        <div className="mt-4 flex justify-center">
          <Button>
            Login
          </Button>
        </div>
      </div>
    </div>
    <div className="w-full text-center">
      <a href="#" className="py-4 inline-block text-grey-dark hover:text-indigo">Forgot Your Password?</a>
    </div>
  </form>
);


export default LoginForm;