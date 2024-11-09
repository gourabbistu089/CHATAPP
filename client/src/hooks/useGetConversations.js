
import React, { useEffect } from 'react'

function useGetConversations() {
 const [loading, setLoading] = React.useState(false);
 const[conversations, setConversations] = React.useState([]);
 useEffect(() => {
  const fetchConversations = async () => {
   setLoading(true);
   try {
    const response = await fetch('/api/v1/user', {
     method: 'GET',
     headers: {
      'Content-Type': 'application/json'
     },
    })
    const data = await response.json();
    setConversations(data);
   } catch (error) {   
    console.log(error); 
   } finally {
    setLoading(false);
   }
   }
   fetchConversations();
 },[])

  return {loading, conversations}

}

export default useGetConversations