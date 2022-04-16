// import { useState } from "react";
// import './signin.css';

// export default function SignIn() {
//   // States for login
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//     }
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? "" : "none",
//         }}
//       >
//       </div>
//     );
//   };

//   return (
//     <div className="form form-container">
//       <header className="header">
//         <h1>Sign In</h1>
//       </header>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}

//         <label className="label">EmailId</label>
//         <input
//           onChange={handleEmail}
//           className="input"
//           value={email}
//           type="email"
//           placeholder="Enter Email"
//         />

//         <label className="label">Password</label>
//         <input
//           onChange={handlePassword}
//           className="input"
//           value={password}
//           type="password"
//           placeholder="Enter Password"
//         />

//         <button onClick={handleSubmit} className="btn" type="submit">
//           Submit
//         </button>
        
//       </form>
//     </div>
//   );
// }



import { useState } from "react";
import { Link } from "react-router-dom";
import  './signin.css';

export default function SignIn()  {

    // States for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
      </div>
    );
  };

  return (
    <>
      <div className='signin-container'>
        <div className='signin-wrapper d-flex justify-content-between'>
          <div className='left'>
            <div className='img-container'>
              {/* <img src={main} alt="" width='100%' height='100%'/> */}
            </div>
          </div>
          <div className='right'>
            <div className='form-wrapper'>
              <h3 className='text-center'>Welcome to Multiplex</h3>
              <small className='d-block pb-2 text-secondary text-center'>Register to book tickets and enjoy movies</small>
              <small className='text-center d-block'>New to Multiplex? <Link to="/signup">Sign Up</Link></small>
              <form>
                <label className='my-2'>Email</label>
                <input onChange={handleEmail} type={'email'} className="form-control shadow" placeholder='Enter Email'/>
                <label className='my-2'>Password</label>
                <input onChange={handlePassword} type={'password'} className="form-control shadow" placeholder='Enter Password'/>
                <button onClick={handleSubmit} type='submit' className='submit-button mt-3'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}