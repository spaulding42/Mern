import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password,setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPass] = useState("");
    const [confirmPasswordError, setConfirmPassError] = useState("");

    const [passwordMatchError, setPasswordMatchError] = useState("");

    
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        
        if(e.target.value.length <2 && firstNameError === "") setFirstNameError("First Name must be greater than 2 characters long")
        else setFirstNameError("")
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        
        if(e.target.value.length <2 && lastNameError === "") setLastNameError("Last Name must be greater than 2 characters long")
        else setLastNameError("")
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        
        if(e.target.value.length <5 && emailError === "") setEmailError("Email must be greater than 5 characters long")
        else setEmailError("")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value !== confirmPassword) setPasswordMatchError("Passwords do not match!")
        else setPasswordMatchError("")
        
        if(e.target.value.length <8 && passwordError ==="") setPasswordError("Password must be greater than 7 characters long")
        else setPasswordError("")
    }
    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value)
        if(password !== e.target.value) setPasswordMatchError("Passwords do not match!")
        else setPasswordMatchError("")
        
        if(e.target.value.length <8 && confirmPasswordError === "") setConfirmPassError("Password must be greater than 7 characters long")
        else setConfirmPassError("")
    }

      
    return (
        <div>
            <div>
                <label>First Name: </label>
                <input type ="text" onChange ={(e) => handleFirstName(e)} value = {firstName}/>
                {
                    firstNameError ?
                    <p style={{color: "red"}}>{firstNameError}</p>: ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type ="text" onChange ={(e) => handleLastName(e)} value = {lastName}/>
                {
                    lastNameError ?
                    <p style={{color: "red"}}>{lastNameError}</p>: ""
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type ="text" onChange ={(e) => handleEmail(e)} value = {email}/>
                {
                    emailError ?
                    <p style={{color: "red"}}>{emailError}</p>: ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type ="password" onChange ={(e) => handlePassword(e)} value = {password}/>
                {
                    passwordError ?
                    <p style={{color: "red"}}>{passwordError}</p>: ""
                }
                {
                    passwordMatchError ?
                    <p style={{color: "red"}}>{passwordMatchError}</p>: ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type ="password" onChange ={(e) => handleConfirmPass(e)} value = {confirmPassword}/>
                {
                    confirmPasswordError ?
                    <p style={{color: "red"}}>{confirmPasswordError}</p>: ""
                }
                
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