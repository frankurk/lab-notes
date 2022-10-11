import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/init.js';
import Logo from '../assets/images/Dark.png';
import { AuthContext } from '../context/AuthContext.jsx';

const Register = () => {
  const {
    name,
    email,
    password,
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log(auth.currentUser);
      localStorage.setItem('userUid', auth.currentUser.uid);
      await sendEmailVerification(auth.currentUser);
      navigate('/home');
      return cred;
    } catch (error) {
      console.log('Error al crear tu cuenta');
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen dark:bg-gray-800">
      <div className="flex flex-col items-center justify-around w-1/4 h-3/5 dark:bg-gray-900 rounded-3xl text-white min-w-[350px]">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} className="w-24 h-24" />
          <h1 className="text-4xl font-semibold text-white">LabNotes</h1>
        </div>
        <form>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              onBlur={handleNameInput}
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="w-[250px] appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              onBlur={handleEmailInput}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-[250px] appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onBlur={handlePasswordInput}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="w-[250px] h-10 bg-[#00C2CB] font-semibold text-lg rounded-xl"
          type="submit"
        >
          Sign in
        </button>
        <p className="pb-4">Already have an account?  <Link to="/" className="text-[#00C2CB] hover:underline">Sign in</Link></p>
      </div>
    </div>
  );
};

export default Register;
