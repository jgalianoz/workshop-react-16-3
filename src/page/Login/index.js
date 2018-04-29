import React, { Component } from 'react';

import Form from './form';

class Login extends Component {
  render() {
    return (
      <section id="login" className="lg:w-1/3 sm:w-1/2">
        <Form />
      </section>
    );
  }
}

export default Login;