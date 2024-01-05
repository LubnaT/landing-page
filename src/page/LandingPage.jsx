import React, { useState } from "react";
import "./landingpage.css";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main">
      <div className="userInput">
        <div className="ml-8">
          <label for="emailid" className="epLabel">Email : </label>
          <input
            id="emailid"
            type="email"
            name="email"
            placeholder="Enter the Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputs"
          />
        </div>

        <div className="">
          <label for="userPassword" className="epLabel">Password : </label>
          <input
            id="userPassword"
            type="password"
            name="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputs text-left"
          />
        </div>

        <div className="space-x-16">
        <button className="py-2  px-6 rounded-lg bg-blue-600  border-solid border-2 border-black mt-4">
          Sign In
        </button>

        <button className="py-2  px-6 rounded-lg bg-blue-600  border-solid border-2 border-black mt-4">
          Sign Up
        </button>
      </div>

      
      </div>
    </div>
  );
};

export default LandingPage;
