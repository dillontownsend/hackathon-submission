import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Callback = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/dashboard')
    }, [])
    return <div></div>
}

export default Callback
