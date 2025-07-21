import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div>
          <div className="relative p-8 border rounded-md shadow-lg bg-slate-800-slate-400 backdrop-filter backdrop-blur-sm bg-opacity-30">
            <h1>Login</h1>
            <form action="">
              <div>
                <input type="email" />
                <label htmlFor="">Your Email</label>
              </div>
              <div>
                <input type="email" />
                <label htmlFor="">Your Email</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me"></label>
                <span>Forget Password</span>
              </div>
              <button type='submit'>Login</button>
              <div>
                <span>New Here ? <Link to = 'RegisterPage'>Create An Account</Link></span>
              </div>
              </form>
          </div>
      </div>
    </>
  );
};

export default LoginPage;
