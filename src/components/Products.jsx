import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <input type="search" placeholder='search products' />

            <nav className='products-nav'>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New products</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products