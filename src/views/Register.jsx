import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/init.js";
import Logo from "../assets/images/Dark.png";
import { AuthContext } from "../context/AuthContext.jsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
  const MySwal = withReactContent(Swal);

  const handleSubmit = async () => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      localStorage.setItem("userUid", auth.currentUser.uid);
      await sendEmailVerification(auth.currentUser);
      navigate("/home");
      return cred;
    } catch (error) {
      if (error?.code === "auth/invalid-email") {
        MySwal.fire({
          title: <strong>Invalid email. Please enter a valid format: "example@gmail.com"</strong>,
          icon: 'error',
        });
      } else if (error.code === "auth/missing-email") {
        MySwal.fire({
          title: <strong>Please enter your email.</strong>,
          icon: 'error',
        });
      } else if (error.code === "auth/internal-error") {
        MySwal.fire({
          title: <strong>Oops, something went wrong on our side! Please try again later.</strong>,
          icon: 'error',
        });
      } else if (error.code === "auth/email-already-in-use") {
        MySwal.fire({
          title: <strong>Email already in use. Try loggin in instead.</strong>,
          icon: 'error',
        });
      } else if (error.code === "auth/weak-password") {
        MySwal.fire({
          title: <strong>Your password is too weak. Try with a longer one (6 characters or more)</strong>,
          icon: 'error',
        });
      }
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
              className="w-[250px] appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Name"
              required
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
              className="w-[250px] appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              required
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
              className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              required
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
        <p className="pb-4">
          Already have an account?{" "}
          <Link to="/" className="text-[#00C2CB] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
