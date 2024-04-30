import React, { useState } from 'react';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    token: '',
    password: '',
    confirmPassword: ''
  });

  const { token, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Token:</label>
          <input
            type="text"
            name="token"
            value={token}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            minLength={6}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            minLength={6}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
