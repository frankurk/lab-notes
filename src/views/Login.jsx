import React from 'react';

const Login = () => {
  return (
    <div>
        <h1>Log in to our app</h1>
      <form>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input required type="password" placeholder="Enter your password" />
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
