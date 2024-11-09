import React from 'react'
import SearchBar from './SearchBar'
import ConversationList from './ConversationList'
import useLogout from '../hooks/useLogout'
import logoutImg from '../assets/logout.png'
function Sidebar() {
  const {loading, logout} = useLogout();
  return (
    <div className=' border-r border-slate-600 flex flex-col relative'>
        <SearchBar/>
        <div className=' divider px-3'/>
         <ConversationList/>
        <LogoutBtn loading={loading} logout={logout} />
    </div>
  )
}

export default Sidebar
const LogoutBtn = ({ loading, logout }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setIsModalOpen(false);
    toast.success("Logged out successfully!");
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
    toast.error("Logout cancelled");
  };

  return (
    <div className="form-control w-full absolute -bottom-8 -left-6">
      <label className="label cursor-pointer">
        <span className="label-text text-white flex items-center gap-1">
          <button
            onClick={handleLogoutClick}
            className="h-8 w-8 font-extrabold cursor-pointer "
          >
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <img
                src={logoutImg}
                alt=""
                className="w-8 h-8 transform rotate-180 relative -left-2"
              />
            )}
          </button>
        </span>
      </label>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <p className="text-black mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleConfirmLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                OK
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
