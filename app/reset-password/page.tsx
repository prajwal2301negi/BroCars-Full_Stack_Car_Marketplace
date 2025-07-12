// 'use client'
// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useParams } from "next/navigation";
// import { useRouter } from "next/navigation";

// const ResetPassword = () => {
  
//   const { token } = useParams();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const router = useRouter()
  

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.put(
//         `http://localhost:4000/api/v1/user/password/reset/${token}`,
//         { password, confirmPassword },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       toast.success(data.message);
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-10">
//         <h2 className="text-3xl font-bold text-center text-purple-700 mb-2">Reset Password</h2>
//         <p className="text-center text-gray-600 mb-6">Enter your new password below</p>

//         <form onSubmit={handleResetPassword} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 mb-1">New Password</label>
//             <input
//               type="password"
//               placeholder="Enter new password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-1">Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Confirm new password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';

const ResetPassword = () => {
  const params = useParams();
  const token = params.token as string;
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const { data } = await axios.put(
        `https://brocarsserver.onrender.com/api/v1/user/password/reset/${token}`,
        { password, confirmPassword },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success(data.message || 'Password reset successful');
      router.push('/sign-in'); // optional: navigate to sign-in after success
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300 mb-2">
          Reset Password
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Enter your new password below
        </p>

        <form onSubmit={handleResetPassword} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
