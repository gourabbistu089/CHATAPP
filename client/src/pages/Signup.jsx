import React, { useState } from 'react';

const GenderCheckBox = ({ gender, setGender }) => {
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
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
          className="radio radio-neutral  text-zinc-900"
        />
        <span className="text-white">Male</span>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
          className="radio radio-neutral text-zinc-900"
        />
        <span className="text-white">Female</span>
      </div>
    </div>
  );
};

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Fullname:', fullname);
    console.log('Gender:', gender);
    console.log('Avatar:', avatar);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center w-screen">
      <div className="w-full max-w-md p-8 rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 shadow-2xl bg-slate-900">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Fullname</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full bg-opacity-30 text-white placeholder-opacity-60 bg-slate-900"
              placeholder="password123"
              required
            />
          </div>

          <GenderCheckBox gender={gender} setGender={setGender} />

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
      </div>
    </div>
  );
};


export default SignUpPage;