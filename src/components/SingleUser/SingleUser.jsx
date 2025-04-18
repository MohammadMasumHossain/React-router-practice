import React from 'react';
import { Link, useNavigate } from 'react-router';

const SingleUser = ({user}) => {
    const{id,name,email,phone}=user;

    const userStyle = {
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:"10px",
        margin:"10px"
    }

    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/');
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p><small>phone:{phone}</small></p>
            <Link to ={`/user/${id}`}>show details</Link>
            <button  onClick={handleNavigate}>Details of:{id}</button>
        </div>
    );
};

export default SingleUser;