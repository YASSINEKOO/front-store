import React from 'react';
import { useAuth } from '../context/AuthContext';

const AuthCheck = () => {
    const { isLoggedIn, authUser } = useAuth();

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>User is currently: Logged-In</p>
                    <p>User name: {authUser.Name}</p>
                </div>
            ) : (
                <p>User is currently: Logged-Out</p>
            )}
        </div>
    );
};

export default AuthCheck;