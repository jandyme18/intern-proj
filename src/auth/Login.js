import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Auth from '../auth/Auth';

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const callSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await Auth.login(email, password);
      // Executes only when there are no 400 and 500 errors, else they are thrown as errors
      // Callbacks can be added here
      if (data) {
        navigate("/search");
      }
    }
    catch (err) {
      if (err instanceof Error) {
        // Handle errors thrown from frontend
        setError(err.message);
      }
      else {
        // Handle errors thrown from backend
        if (err === 'LOGIN_BAD_CREDENTIALS') {
          setError('Incorrect credentials');
        }
        else {
          setError('Error occured in the API.');
        }
      }
    }
  };

  return (
    <section class="h-screen">
      <div class="flex justify-center items-center h-screen w-screen text-light-brown">
        <div class="rounded-md border-2 border-light-brown p-10">
          <img src="https://upload.wikimedia.org/wikipedia/th/9/9e/Immigration_Buraeu_logo.png" class="justify-center mx-auto mb-5" alt="logo" width="70" />
          <div class="flex text-center ml-8 pb-4 text-5xl font-500">เข้าสู่ระบบ</div>
          <form onSubmit={callSubmit}>
            {/* Email input  */}
            <div class="mb-6">
              <input
                type="email"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-brown bg-white-malt bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-brown focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="ชื่อผู้ใช้"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>

            {/* Password input */}
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-brown bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-brown focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(p) => setPassword(p.currentTarget.value)}
              />
            </div>

            {/* AlertDialog */}
            {/* <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              <span class="font-medium">Danger alert!</span>
              `{error}`
            </div> */}

            {/* Submit button */}
            <button
              type="submit"
              class="inline-block px-7 py-3 bg-light-brown text-dark-blue font-300 text-xl leading-snug rounded shadow-md hover:bg-brown hover:text-dark-blue hover:shadow-lg focus:bg-dark-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-dark-blue active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              เข้าสู่ระบบ
            </button>
          </form>
        </div>
      </div>

    </section>
  );
};

