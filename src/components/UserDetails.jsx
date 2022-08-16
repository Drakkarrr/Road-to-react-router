import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const { userId } = useParams()
    return (
        <h3>Details about user {userId}</h3>
    )
}

export default UserDetails