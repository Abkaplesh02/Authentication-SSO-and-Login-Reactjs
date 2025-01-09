import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { useState } from "react";


const Content=()=>{
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const [stateResult,setState]=useState(0);
   

    const handleSignOut=()=>{

signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser());
  Navigate("/");
  
}).catch((error) => {
  // An error happened.
});
    }

    const handleAdd=()=>{
      setState(stateResult=>stateResult+stateResult)
    }

    const handleMultiply=()=>{
      setState(stateResult=>stateResult*stateResult)
    }

    const handleDivide=()=>{
      setState(stateResult=>stateResult/stateResult)
    }

    const handleSub=()=>{
      setState(stateResult=>stateResult-stateResult)
    }

    const handleAddOne=()=>{
      setState(stateResult=>stateResult+1)
    }

    const handleSubOne=()=>{
      setState(stateResult=>stateResult-1)
    }

    const handleZero=()=>{
      setState(0)
    }



    return(
      <>
        <div className="flex justify-end ">
            <button className="mx-10 border-2 p-4 bg-black text-white" onClick={handleSignOut}>Sign out</button>
        </div>

        <h1 className="flex justify-center text-3xl mt-52">Click Game</h1>
        <div className="w-full flex justify-center">
     
          <button className="p-3 px-6 mx-4 my-10 bg-black text-white items-center border-2 hover:bg-white hover:text-black hover:border-2 hover:border-gray-500" onClick={handleAddOne}>+1</button>
          <button className="p-3 px-6 mx-4 my-10 bg-black text-white items-center border-2 hover:bg-white hover:text-black hover:border-2 hover:border-gray-500" onClick={handleZero}>0</button>
          <button className="p-3 px-6 mx-4 my-10 bg-black text-white items-center border-2 hover:bg-white hover:text-black hover:border-2 hover:border-gray-500" onClick={handleSubOne}>-1</button>
          <button className="p-3 px-6 mx-4 my-10 bg-black text-white items-center border-2 hover:bg-white hover:text-black hover:border-2 hover:border-gray-500" onClick={handleAdd}>+</button>
          <button className="p-3 px-6 mx-4 my-10 bg-black text-white items-center border-2 hover:bg-white hover:text-black hover:border-2 hover:border-gray-500" onClick={handleMultiply}>*</button>
          <button className="p-3 px-6 mx-4 my-10 bg-black text-white items-center border-2 hover:bg-white hover:text-black hover:border-2 hover:border-gray-500" onClick={handleSub}>-</button>
          <button className="p-3 px-6 mx-4 my-10 bg-black text-white items-center border-2 hover:bg-white hover:text-black hover:border-2 hover:border-gray-500" onClick={handleDivide}>/</button>
        </div>

        <div className="text-black w-full flex justify-center text-3xl" > 
        {stateResult}
        </div>

        </>
    )
}

export default Content;