import React, { useState } from 'react'

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  // Submit Form Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('heloooo');
    if(validateForm()) {
      alert("Signed Up Successfully!");
    } else {
      alert("Please Fill All Fields");
    }
  }

  // Validation Function
  const validateForm = () => {

    // return email.length > 0 && password.length > 0 && confirmPassword.length > 0;   
  };  

  const handleStyle = (e)=>{
    setPassword(e.target.value);
    if(password.length>=8){
      e.target.style.border='2px solid green'
    } else{
      e.target.style.border='2px solid red'
    }
  }


  const style={
    textColor:"#red",
  }
  
  
  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter yor Email' className='email' value={email} onChange={handleStyle}/>
        <p>*Invalid Email Format</p>
        <input type='password' placeholder='Enter your Password' className='password' value={password} onChange={handleStyle}/>
        <p>*Password must be at least 8 Characters Long</p>
        <input type='password' placeholder='Enter your Confirm Password' className='confirm-password' value={confirmPassword} onChange={handleStyle}/>
        <p>*Password do not match</p>
        <button formAction='submit' className='btn' onClick={handleSubmit}>SignUp</button>
      </form>
    </div>
  )
}

export default Signup