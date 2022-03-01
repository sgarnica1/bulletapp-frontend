import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { InputContainer } from "./components/InputContainer";
import "./login.scss";

function Login() {
  const [passInputType, setPassInputType] = useState("password");
  const { loginUser, errorMessage, setErrorMessage } = useAuth();

  return (
    <div className="Login">
      <section className="Login__background-img"></section>
      <main className="Login__main">
        <header className="Login__header">
          <img
            src="https://images.bulletcrossfit.com/img/logo_white_resized.png"
            alt="Bullet CrossFit Logo"
            className="Login__header-logo"
          />
          <h1 className="Login__header-title">Bienvenido</h1>
        </header>
        <form
          autoComplete="off"
          className="Login__form"
          onSubmit={(event) => {
            loginUser(event);
          }}
          onChange={() => {
            setErrorMessage(null);
          }}
        >
          <div className="Login__input-container">
            <InputContainer
              type={"text"}
              name={"username"}
              placeholder={"Usuario"}
              errorMessage={errorMessage}
            />
            <InputContainer
              type={passInputType}
              name={"password"}
              placeholder={"Contraseña"}
              errorMessage={errorMessage}
            >
              <span
                className={`password-toggle ${
                  passInputType === "text" && "visible"
                }`}
                onClick={() => {
                  setPassInputType((prevState) =>
                    prevState === "password" ? "text" : "password"
                  );
                }}
              ></span>
            </InputContainer>
            {errorMessage ? (
              <div className="Login__error">{errorMessage}</div>
            ) : null}
          </div>
          <div className="Login__button-container">
            <a href="/" className="Login__passrecover-btn">
              Recuperar contraseña
            </a>

            <button className="Login__login-btn">Ingresa</button>
          </div>
        </form>
        <a href="/" className="Login__privacy">
          Aviso de privacidad
        </a>
      </main>
    </div>
  );
}

export { Login };
