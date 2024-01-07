import React, { useEffect, useState } from "react";
import "./landingpage.css";
import UserServices from "../Service/UserServices";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from "./AllUsers";



const LandingPage = () => {
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getAllUsers,setAllUsers]=useState([]);
  const navigate =useNavigate()
    
  const user={userEmail,password}

  const fetchLatestUsers = () => {
    UserServices.getAllUsers()
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  };
  useEffect(() => {
    fetchLatestUsers();
  }, []);
  

  const handleSignIn=(e)=>{
      e.preventDefault();
      console.log("signIn:",user);
      
      const emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";

      // Regular expression for a valid password (at least 6 characters)
      // const passwordRegex = "/.{6,}/";
    
      // Check if the email is valid
      if (!emailRegex.test(user.userEmail)) {
        toast("Invalid email format", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
    
      // // Check if the password is valid
      // if (!passwordRegex.test(user.password)) {
      //   toast("Password must be at least 6 characters", {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      //   return;
      //}
    
      UserServices.userSignInExist(user).then((response)=>{
        console.log(response.data,{
          position: toast.POSITION.TOP_CENTER,
        });
        if(response.data==="First SignUP Please"){
          toast(response.data);
        }
        else{
          navigate('/home');
        }
        
      
        fetchLatestUsers();
      }).catch((error)=>{
       // alert('Error in Sign In')
        console.log(error);
      })
  }

  const handleSignUp=(e)=>{
      e.preventDefault();
    console.log("signUp:",user)
    UserServices.userSignUpAdd(user).then((response) => {
      console.log(response.data);
      toast(response.data,{
        position: toast.POSITION.TOP_CENTER,
      });
      fetchLatestUsers();
     // alert("SignUp Successful!");
    })
    .catch((error) => {
      toast(error,{
        position: toast.POSITION.TOP_CENTER,
      });
      if (error === "User Exists") {
     //   alert("Username or Email already exists!");
      } else {
      //  alert(`Error during sign-up: ${error}`);
      }
    });
  }
  return (
    <div className="main">
      <div className="userInput">
        <div className="ml-8">
          <label  className="epLabel">Email : </label>
          <input
            id="emailid"
            type="email"
            name="email"
            placeholder="Enter the Email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            className="inputs"
          />
        </div>

        <div className="">
          <label  className="epLabel">Password : </label>
          <input
            id="userPassword"
            type="password"
            name="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputs text-left"
          />
        </div>

        <div className="space-x-16">
        <button className="py-2  px-6 rounded-lg bg-blue-600  border-solid border-2 border-black mt-4"
        onClick={(e)=>handleSignIn(e)}>
          Sign In
        </button>

        <button className="py-2  px-6 rounded-lg bg-blue-600  border-solid border-2 border-black mt-4"
        onClick={(e)=>handleSignUp(e)}>
          Sign Up
        </button>
        <ToastContainer/>
      </div>

      <button onClick={()=>navigate('/all-users')}>Get All Users</button>
      
      </div>
  <div>
    <AllUsers userdetails={getAllUsers}/>
  </div>
      
    </div>
  );
};

export default LandingPage;
