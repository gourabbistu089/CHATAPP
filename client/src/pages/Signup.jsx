import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';


function SignUpPage() {

  const {signup, loading} = useSignup();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    fullname: '',
    gender: '',
    avatar: null,
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setInputs({
      username: '',
      email: '',
      password: '',
      fullname: '',
      gender: '',
      avatar: null,
    })
    await signup(inputs);
  };

  const handleAvatarChange = (e) => {
    setInputs({ ...inputs, avatar: e.target.files[0] });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center w-screen">
      <div className="w-full max-w-md p-8 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 shadow-2xl bg-slate-900">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Fullname</span>
            </label>
            <input
              type="text"
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
              className="input input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60 bg-slate-900"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              className="input input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60 bg-slate-900"
              placeholder="username123"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="input input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60 bg-slate-900"
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
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="input input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60 bg-slate-900"
              placeholder="password123"
              required
            />
          </div>

          <GenderCheckBox inputs={inputs} setInputs={setInputs} />

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Avatar</span>
            </label>
            <input
              type="file"
              onChange={handleAvatarChange}
              className="file-input file-input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60 bg-slate-900"
              accept="image/*"
            />
          </div>

          <button type="submit" className="btn btn-primary outline-none border-none w-full bg-slate-800 hover:bg-slate-900 text-white">
            Sign Up
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account? <Link to="/login" className="text-sky-500">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;


const GenderCheckBox = ({ inputs, setInputs }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-white">Gender</span>
      </label>
      <div className="flex items-center space-x-3">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={inputs.gender === 'male'}
          onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
          className="radio radio-neutral text-zinc-900"
        />
        <span className="text-white">Male</span>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={inputs.gender === 'female'}
          onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
          className="radio radio-neutral text-zinc-900"
        />
        <span className="text-white">Female</span>
      </div>
    </div>
  );
};