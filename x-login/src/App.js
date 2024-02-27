import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("");
      setSubmitted(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1> Login Page </h1>{" "}
      {submitted ? (
        <div>
          <p> Welcome, {username} </p>{" "}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {" "}
          {error && <p> {error} </p>}{" "}
          <div>
            <label htmlFor="username"> Username: </label>{" "}
            <input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="password"> Password: </label>{" "}
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </div>{" "}
          <div>
            <button> Submit </button>{" "}
          </div>{" "}
        </form>
      )}{" "}
    </div>
  );
};

export default App;
