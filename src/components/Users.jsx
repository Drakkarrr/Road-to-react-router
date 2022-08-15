import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
    return (
        <>
            <h3>User 1</h3>
            <h3>User 2</h3>
            <h3>User 3</h3>
            <Outlet />
        </>
    )
}

export default Users