import React from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
    const {authUser, setAuthUser} = useAuthContext();
    const[loading, setLoading] = React.useState(false)
    const[error, setError] = React.useState(null)

    const signup = async ({username, email, password, fullname, gender}) => {
        const success =  handleInputError({username, email, password, fullname, gender})
        if(!success) return;
        setLoading(true)
        try {
            const response = await fetch('/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, email, password, fullname, gender})
            })
            const data = await response.json();
            // console.log(data);
            if(data.success) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }

            // localStorage
            localStorage.setItem('chat-user', JSON.stringify(data.data.user))
            // context
            setAuthUser(data.data)

            
        }
        catch (error) {
            console.log(error)
           toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return {signup, loading}
}

export default useSignup

const handleInputError = ({username, email, password, fullname, gender}) => {
    if(!username || !email || !password || !fullname || !gender) {
        toast.error('Please fill in all fields')
        return false;
    }
    if(password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false;
    }
    return true;
}