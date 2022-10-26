import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPass] = useState("");

    return (
        <div>
            <div>
                <label>First Name: </label>
                <input type ="text" onChange ={(e) => setFirstName(e.target.value)} value = {firstName}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type ="text" onChange ={(e) => setLastName(e.target.value)} value = {lastName}/>
            </div>
            <div>
                <label>Email Address: </label>
                <input type ="text" onChange ={(e) => setEmail(e.target.value)} value = {email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type ="password" onChange ={(e) => setPassword(e.target.value)} value = {password}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type ="password" onChange ={(e) => setConfirmPass(e.target.value)} value = {confirmPassword}/>
            </div>
                        
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Password: {confirmPassword}</p>
        </div>
    
    )
}

export default UserForm;