import React, { useState } from "react";
import "./landingpage.css";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main">
      <div className="userInput">
        <div>
          <label for="emailid">Email</label>
          <input
            id="emailid"
            type="email"
            name="email"
            placeholder="Enter the Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label for="userPassword">Password</label>
          <input
            id="userPassword"
            type="password"
            name="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button className="p-2 rounded-lg bg-blue-600  border-solid border-2 border-black">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
