import cn from "classnames";
import React, { Component } from "react";

import FadeTranslation from "component/FadeTranslation";
import Button from "component/Button";
import Login from "page/Login";

import { LanguageContext, languages } from "./LanguageContext";

class App extends Component {
  state = {
    language: languages.en,
    current: "en"
  };
  setLanguage = language => {
    this.setState({
      language: languages[language],
      current: language
    });
  };
  render() {
    const { language } = this.state;

    return (
      <div className="flex flex-col content-between bg-grey-lighter min-h-screen">
        <div className="flex justify-end">
          <div className="block py-2 mx-4">
            <FadeTranslation className="mr-2">
              {language.choose_lenguage}
            </FadeTranslation>
            <a
              href="#"
              onClick={() => this.setLanguage("en")}
              className={cn({
                "text-indigo hover:text-grey-dark": this.state.current === "en",
                "text-grey-dark hover:text-indigo no-underline":
                  this.state.current !== "en"
              })}
            >
              English
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              onClick={() => this.setLanguage("es")}
              className={cn({
                "text-indigo hover:text-grey-dark": this.state.current === "es",
                "text-grey-dark hover:text-indigo no-underline":
                  this.state.current !== "es"
              })}
            >
              Español
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <React.StrictMode>
            <LanguageContext.Provider value={this.state.language}>
              <Login />
            </LanguageContext.Provider>
          </React.StrictMode>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="py-4 text-xs text-grey-darker">
            Workshop - React 16.3 | Andres Alarcón
          </span>
        </div>
      </div>
    );
  }
}

export default App;
