import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Dashboard = async() => {
    const {userId,sessionId}=await auth()
     const user=await currentUser()
     console.log(user)
  return (
    <div>
        <h1>welcome to admin dashboard {user?.username}</h1>
    </div>
  )
}

export default Dashboard