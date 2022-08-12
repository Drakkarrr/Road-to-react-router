import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hello home page!</h1>
            <button onClick={() => navigate('order-summary', { replace: true })}>Ship now!</button>
        </div>
    )
}

export default Home