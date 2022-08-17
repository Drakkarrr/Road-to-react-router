import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActive = searchParams.get('filter') === 'active'

    return (
        <>
            <h3>User 1</h3>
            <h3>User 2</h3>
            <h3>User 3</h3>
            <Outlet />

            <button onClick={() => setSearchParams({ filter: "active" })}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Users</button>
            {showActive ? <h1>List of active users</h1> : <h1>List of all users</h1>}
        </>
    )
}

export default Users