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
  const [emailerrormsg,setEmailErrorMsg]=useState("Enter Email ID")
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
   // Regular expression for a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is valid
  if (!emailRegex.test(user.userEmail)) {
    toast("Invalid email format", {
      position: toast.POSITION.TOP_CENTER,
    });
    return;
  }

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
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 p-5">
      {/* col1 */}
      <div className="  userInput">
        <div className="grid grid-rows-3">
          {/* 1 row */}
          <div>
          <label  className="epLabel">Email : </label>
          <input
            id="emailid"
            type="email"
            name="email"
            placeholder="Enter the Email"
            value={userEmail}
            onChange={(e) => {
              setEmail(e.target.value)
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                // Check if the email is valid
                if (!emailRegex.test(e.target.value)) {
                  setEmailErrorMsg("Provide proper Email")
                  return;
                }
                setEmailErrorMsg("Valid Email");
              }}
            className="inputs sm:ml-8"

          />
          <p className=" sm:ml-40 text-red-500 text-sm" id="emailmsg">{emailerrormsg}</p>
          </div>
          
          {/* 2 row */}
        <div className="mt-4">
          <label  className="epLabel">Password : </label>
          <input
            id="userPassword"
            type="password"
            name="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputs"
          />
        </div>

        {/* 3 row */}
        <div className="space-x-2 row">
        <button className="p-2  rounded-lg bg-lime-600  border-solid border-2 border-black mt-4"
        onClick={(e)=>handleSignIn(e)}>
          Sign In
        </button>

        <button className=" p-2 rounded-lg bg-blue-600  border-solid border-2 border-black mt-4"
        onClick={(e)=>handleSignUp(e)}>
          Sign Up
        </button>
        <ToastContainer/>
      </div>


        </div>
        
      </div>
      
      {/* col2 */}
      <div className="col-span-2 sm:col-span-1 p-4  border-solid border-2 border-orange-500">
       <div> <AllUsers userdetails={getAllUsers}/></div>
      </div>
  
      
    </div>
  );
};

export default LandingPage;
