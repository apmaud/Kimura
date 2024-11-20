import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector(state => state.auth.authenticated);
    return (
        isAuthenticated ? <Outlet /> :
            <Navigate to="/auth" />
    )
}

export default ProtectedRoute