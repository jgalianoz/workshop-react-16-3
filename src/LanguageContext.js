import React, { Component } from 'react';

export const languages = {
  en: {
    choose_lenguage: "Choose a Language",
    login: {
      username_field: {
        label: "Username",
        placeholder: "admin",
        required: "Please enter a username"
      },
      password_field: {
        label: "Passoword",
        placeholder: "•••••",
        required: "Please enter a password"
      },
      button: "Login",
      forgot_password: "Forgot Your Password?"
    }
  },
  es: {
    choose_lenguage: "Escoge tu Idioma",
    login: {
      username_field: {
        label: "Nombre de Usuario",
        placeholder: "admin",
        required: "Por favor ingrese un nombre de usuario"
      },
      password_field: {
        label: "Contraseña",
        placeholder: "•••••",
        required: "Por favor ingrese una contraseña"
      },
      button: "Iniciar Sesión",
      forgot_password: "Olvidaste tu Contraseña?"
    }
  }
}

export const LanguageContext = React.createContext(languages.en);

