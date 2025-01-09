import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { useState } from "react";

const Content=()=>{
    const Navigate=useNavigate();
    const dispatch=useDispatch();
   

    const handleSignOut=()=>{

signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser());
  Navigate("/");
  
}).catch((error) => {
  // An error happened.
});
    }
    return(
        <div className="flex justify-end ">
            <button className="mx-10 border-2 p-4 bg-black text-white" onClick={handleSignOut}>Sign out</button>
        </div>
    )
}

export default Content;