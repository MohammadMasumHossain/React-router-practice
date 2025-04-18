import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from '../SingleUser/SingleUser';

const User = () => {

    const user =useLoaderData();
    console.log(user);
    return (
        <div>
            <h2>This is user</h2>
            <div>
                {
                    user.map(user=> <SingleUser key ={user.id} user={user}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default User;