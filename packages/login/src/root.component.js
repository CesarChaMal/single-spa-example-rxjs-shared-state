import React, { useState, useEffect } from "react";
import { auth$, login } from "@example/auth";
import Loader from "./loader.component";

export default function Root(props) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let timeout;
    const sub = auth$.subscribe(({ pending, error }) => {
      // redirecting to /home when logged in will be done in the navbar. Cohesive code FTW!
      setPending(pending);
      setError(error);
      timeout = setTimeout(() => {
        setError();
      }, 2000);
    });
    return () => {
      clearInterval(timeout);
      sub.unsubscribe();
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = document.forms.login.elements;
    login(username.value, password.value);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute",
        top: "5px",
        left: "10px",
        fontSize: "0.75rem",
        opacity: 0.7,
        background: "rgba(0, 0, 0, 0.1)",
        padding: "2px 6px",
        borderRadius: "3px",
        zIndex: 10
      }}>
        Login • React
      </div>
      <form name="login" className="login-form" onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <div>
          <button type="submit" className="submit" disabled={pending}>
            {pending ? <Loader /> : "Submit"}
          </button>
        </div>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  );
}
