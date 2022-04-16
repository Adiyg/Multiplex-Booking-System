// import { useState } from "react";
// import  './signup.css';

// export default function SignUp() {
//   // States for registration
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [dob, setDob] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCPassword] = useState("");

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   // const [error, setError] = useState(false);
//   const [nameErr, setNameErr] = useState(false);
//   const [mobieErr, setMobileErr] = useState(false);
//   const [emailErr, setEmailErr] = useState(false);
//   const [passwordErr, setPasswordErr] = useState(false);
//   const [cpasswordErr, setCpasswordErr] = useState(false);

//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//     setNameErr(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//     setEmailErr(false);
//   };

//   // Handling the mobileno. change
//   const handleMobile = (e) => {
//     setMobile(e.target.value);
//     setSubmitted(false);
//     setMobileErr(false)
//   };

//   // Handling the dob change
//   const handleDOB = (e) => {
//     setDob(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//     setPasswordErr(false);
//   };

//   // Handling the cpassword change
//   const handleCPassword = (e) => {
//     setCPassword(e.target.value);
//     setSubmitted(false);
//     setCpasswordErr(false);
//   };
//  const validateTheForm = () =>{
//     let nameErr,mobileErr,emailErr,passwordErr,cpasswordErr = '';

//     if(name.length==0){
//         nameErr = "Name should not be empty";
//     }

//     if(mobileErr<10){
//         mobieErr = "Mobile Number should not be less than 10";
//     }

//     if(!email.includes('@')){
//         emailErr = "please enter a valid email";
//     }

//     if(password.length<5){
//         passwordErr = "Password must contain 5 characters";
//     }

//     if(cpassword != password){
//       cpasswordErr = "Password mismatch";
//   }

//     //0,false,null,undefined,""

//     if(nameErr || mobieErr || emailErr || passwordErr || cpasswordErr){
//         this.setState({nameErr,mobileErr,emailErr,passwordErr,cpasswordErr});
//     }else{
//         this.setState({nameErr,mobileErr,emailErr,passwordErr,cpasswordErr});
//     }

//     //firstName > 4
//     //lastName > 0
//     //email '@'
//     //password >5
// }

// //   const validateTheForm = () =>{
// //     console.log('clleddd');
// //     let nameErr,mobileErr,emailErr,passwordErr,cpasswordErr = '';

// //     if(name.length==0){
// //       console.log('nameclleddd');
// //       setNameErr(true)
// //     }

// //     if(!email.includes('@')){
// //       console.log('eamilclleddd');
// //       setEmailErr(true)
// //     }

// //     if(mobile.length<10){
// //       console.log('mobileclleddd');
// //       setMobileErr(true)
// //   }

// //     if(password.length<8){
// //       console.log('passclleddd');
// //       setPasswordErr(true)
// //     }

// //     if(cpassword != password){
// //       console.log('cpassclleddd');
// //       setCpasswordErr(true)
// //   }

// //     //0,false,null,undefined,""

// //   //  else{
// //   //     console.log('else called')
// //   //     alert('Submitted sucessfully');
// //   //   }

// //     //firstName > 4
// //     //lastName > 0
// //     //email '@'
// //     //password >5
// // }

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateTheForm();
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? "" : "none",
//         }}
//       >
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // // Showing error message if error is true
//   // const errorMessage = () => {
//   //   return (
//   //     <div
//   //       className="error"
//   //       style={{
//   //         display: error ? "" : "none",
//   //       }}
//   //     >
//   //       <h4>Please enter all the fields</h4>
//   //     </div>
//   //   );
//   // };

//   return (
//     <div className="form form-container">
//       <header className="header">
//         <h3>User Registration</h3>
//       </header>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {/* {errorMessage()} */}
//         {successMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}
//         <label className="label">Name</label>
//         <input
//           onChange={handleName}
//           className="input"
//           value={name}
//           type="text"
//           placeholder="Enter Name"
//         />
//        {nameErr && <span style={{ color: "red" }}>Name should not be empty</span>}

//         <label className="label">EmailId</label>
//         <input
//           onChange={handleEmail}
//           className="input"
//           value={email}
//           type="email"
//           placeholder="Enter Email"
//         />
//         {emailErr && <span style={{ color: "red" }}>Please enter valid email</span>}

//         <label className="label">MobileNumber</label>
//         <input
//           onChange={handleMobile}
//           className="input"
//           value={mobile}
//           type="number"
//           placeholder="Enter Mobile Number"
//           maxLength={10}
//         />
//         {mobieErr && <span style={{ color: "red" }}>Mobile Number should be less than 10</span>}

//         <label className="label">DateOfBirth</label>
//         <input onChange={handleDOB} className="input" value={dob} type="date" />

//         <label className="label">Password</label>
//         <input
//           onChange={handlePassword}
//           className="input"
//           value={password}
//           type="password"
//           placeholder="Enter Password"
//         />
//         {passwordErr && <span style={{ color: "red" }}>Password must contain 8 characters</span>}

//         <label className="label">Confirm Password</label>
//         <input
//           onChange={handleCPassword}
//           className="input"
//           value={cpassword}
//           type="password"
//           placeholder="Enter Confirm Password"
//         />
//         {cpasswordErr  && <span style={{ color: "red" }}>Password mismatch</span>}

//         <button onClick={handleSubmit} className="btn" type="submit">
//           Submit
//         </button>
        
//       </form>
//     </div>
//   );
// }
import {useState} from 'react';
import { Link } from 'react-router-dom';
import  './signup.css';

function SignUp() {
 //States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  // const [error, setError] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [cpasswordErr, setCpasswordErr] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setNameErr(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr(false);
  };

  // Handling the mobileno. change
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setMobileErr(false)
  };

  // Handling the dob change
  const handleDOB = (e) => {
    setDob(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr(false);
  };

  // Handling the cpassword change
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setCpasswordErr(false);
  };

  const validateTheForm = () =>{
    console.log('clleddd');
    let nameErr,mobileErr,emailErr,passwordErr,cpasswordErr = '';

    if(name.length==0 || mobile.length<10 || !email.includes('@') || password.length<8 || cpassword != password){
    if(name.length==0){
      console.log('nameclleddd');
      setNameErr(true)
    }

    if(mobile.length<10){
      console.log('mobileclleddd');
      setMobileErr(true)
  }

  if(!email.includes('@')){
    console.log('eamilclleddd');
    setEmailErr(true)
  }

    if(password.length<8){
      console.log('passclleddd');
      setPasswordErr(true)
    }

    if(cpassword != password){
      console.log('cpassclleddd');
      setCpasswordErr(true)
  }}
  else{
   // alert("Successfully Registered");
  }
}

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validateTheForm();
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className='signup-container'>
        <div className='signup-wrapper d-flex justify-content-between'>
          <div className='left'>
            <div className='img-container'>
              {/* <img src={main} alt="" width='100%' height='100%'/> */}
            </div>
          </div>
          <div className='right'>
            <div className='form-wrapper'>
              <h3 className='text-center'>Welcome to Multiplex</h3>
              <small className='d-block pb-2 text-secondary text-center'>Register to book tickets and enjoy movies</small>
              <small className='text-center d-block'>Already have an account? <Link to="/signin">Sign In</Link></small>
              <form>
                <div>
                <label className='my-2'>Name</label>
                <input onChange={handleName} type={'text'} className="form-control shadow" placeholder='Enter Full Name' />
                {nameErr && <span style={{ color: "red" }}>Name should not be empty</span>}
                </div>

                <div>
                <label className='my-2'>Mobile</label>
                <input onChange={handleMobile} type={'tel'} className="form-control shadow" placeholder='Enter Mobile Number'/>
                {mobileErr && <span style={{ color: "red" }}>Please enter a 10-digit Phone Number</span>}
                </div>


                <div>
                <label className="my-2">DateOfBirth</label>
//              <input onChange={handleDOB} type="date" className="form-control shadow" value={dob} />
                </div>

                <div>
                <label className='my-2'>Email</label>
                <input onChange={handleEmail} type={'email'} className="form-control shadow" placeholder='Enter Email'/>
                {emailErr && <span style={{ color: "red" }}>Please enter valid email</span>}
                </div>

                <div>
                <label className='my-2'>Password</label>
                <input onChange={handlePassword} type={'password'} className="form-control shadow" placeholder='Enter Password'/>
                {passwordErr && <span style={{ color: "red" }}>Password must contain 8 characters</span>}
                </div>

                <div>
                <label className='my-2'>Confirm Password</label>
                <input onChange={handleCPassword} type={'password'} className="form-control shadow" placeholder='Enter Confirm Password'/>
                {cpasswordErr  && <span style={{ color: "red" }}>Password mismatch</span>}
                </div>

                <button onClick={handleSubmit} type='submit' className='submit-button mt-3'>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp