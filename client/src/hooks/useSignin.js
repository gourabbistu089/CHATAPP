import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

function useSignin() {
  const [loading, setLoading] = React.useState(false)
  const { setAuthUser } = useAuthContext()
    const signin = async({email, password})=>{
        setLoading(true);
        try {
            const response = await fetch('/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            if(response.ok === false){
                toast.error("Invalid Credentials")
            }
            const data = await response.json();
            setLoading(false)
            console.log(data);
            if(data.success){
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
            // localStorage
            localStorage.setItem('chat-user', JSON.stringify(data.data.user))
            // context
            setAuthUser(data.data.user.username)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }
  return { loading , signin}
}

export default useSignin