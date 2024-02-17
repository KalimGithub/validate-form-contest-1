import React, { useState } from 'react'

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  // Submit Form Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()) {
      alert("Signed Up Successfully!");
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    } 
    
    else if(password !== confirmPassword){
      alert('password does not match')
    }
    else {
      alert("Please Fill All Fields");
    }
  }

  // Validation Function
  const validateForm = () => {
    return  password.length >=8  && confirmPassword.length >= 8;   
  };  

  const handleEmail = (e)=>{
    setEmail(e.target.value);
    if(email.length>=8){
      e.target.style.border='2px solid green'
    } else{
      e.target.style.border='2px solid red'
    }
  }
  

  const handlePassword = (e)=>{
    setPassword(e.target.value);
    if(password.length>=8){
      e.target.style.border='2px solid green'
    } else{
      e.target.style.border='2px solid red'
    }
  }

  const handleConfirmPassword = (e)=>{
    setConfirmPassword(e.target.value);
    if(confirmPassword.length>=8){
      e.target.style.border='2px solid green'
    } else{
      e.target.style.border='2px solid red'
    }
  }


  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='Enter yor Email' className='email' value={email} onChange={handleEmail}/>
        {/* <p>*Invalid Email Format</p> */}
        <input type='password' placeholder='Enter your Password' className='password' value={password} onChange={handlePassword}/>
        {/* <p>*Password must be at least 8 Characters Long</p> */}
        <input type='password' placeholder='Enter your Confirm Password' className='confirm-password' value={confirmPassword} onChange={handleConfirmPassword}/>
        {/* <p>*Password do not match</p> */}
        <button formAction='submit' className='btn' onClick={handleSubmit}>SignUp</button>
      </form>
    </div>
  )
}

export default Signup