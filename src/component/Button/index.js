import React from 'react';
import './styles.css';

const Button = ({ children }) =>
  <button className="btn shadow bg-indigo hover:bg-purple-dark text-white font-bold py-2 px-4 rounded">
    {children}
  </button>

export default Button;