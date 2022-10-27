import React from "react";
import {
    describe, expect, it, vi,
} from 'vitest';
import { getByTestId, render, screen } from '@testing-library/react';
import Login from "../views/Login";
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

/**
* @vitest-environment jsdom
*/

describe("Login component", () => {

  it("should render a form", () => {
    const email = "";
    const password = "";
    render(
      <AuthContext.Provider value={{ email, password }}>
        <Router>
          <Login />
        </Router>
      </AuthContext.Provider>
    );
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });

  it("Sign in button should be of color #00C2CB", () => {
    const email = "";
    const password = "";
    render(
        <AuthContext.Provider value={{ email, password }}>
          <Router>
            <Login />
          </Router>
        </AuthContext.Provider>
      );
    const signinBtn = screen.getByTestId("signin-btn");
    expect(signinBtn).toHaveStyle({backgroundColor: "rgb(0 194 203)" });
  })
});
