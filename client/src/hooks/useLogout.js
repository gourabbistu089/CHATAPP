import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function useLogout() {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("chat-user");
      const data = await res.json();
      console.log(data)
      setAuthUser(null);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      navigate("/login");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
}

export default useLogout;
