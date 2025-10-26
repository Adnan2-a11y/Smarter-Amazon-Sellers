import React, { useState } from 'react';

interface SignupFormProps {
  onSignup: (email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white"
      >
        <h2 className="text-center text-2xl font-bold mb-6 text-orange-600">
          Create Account
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white rounded-md text-base font-medium cursor-pointer hover:bg-orange-600 transition-colors"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-orange-600 no-underline hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;