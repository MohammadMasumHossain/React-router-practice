import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData();
    const{website,name}=user;
    return (
        <div>
            <h3>User Details here </h3>
            <p>Name:{name}</p>
            <p>website:{website}</p>
        </div>
    );
};

export default UserDetails;