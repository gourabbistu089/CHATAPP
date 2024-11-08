import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center w-screen ">
      <div className="w-full max-w-md p-8 rounded-lg bg-brown-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 shadow-2xl bg-slate-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60   bg-slate-900"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60    bg-slate-900"
              placeholder="password123"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary outline-none border-none w-full bg-slate-800 hover:bg-slate-900 text-white">
            Login
          </button>
        </form>

        <p className="text-sm text-center text-white mt-6">
          Don’t have an account? <a href="/signup" className="text-indigo-800 font-semibold text-lg hover:text-indigo-700">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;


