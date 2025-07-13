

'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const OtpVerification = () => {
  const params = useParams();
  const email = decodeURIComponent(params.emailId as string);
  // console.log(email)

  const router = useRouter()

  const [otp, setOtp] = useState<string[]>(['', '', '', '', '']);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    const payload = { email, otp: enteredOtp };

    try {
      const res = await axios.post(
        'https://brocarsserver.onrender.com/api/v1/user/otp',
        payload,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      toast.success(res.data.message || 'OTP verified');
      localStorage.setItem("token", res.data.token);
      router.push('/profile')
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'OTP verification failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          OTP Verification
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Enter the 5-digit OTP sent to your registered email
        </p>

        <form onSubmit={handleOtpVerification} className="space-y-6">
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-2xl font-semibold rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoComplete="off"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
