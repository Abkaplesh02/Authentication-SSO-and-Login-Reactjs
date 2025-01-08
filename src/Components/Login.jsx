import { useRef, useState } from "react";
import { checkValidate } from "../utils/checkValidate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const fullName = useRef();
  const Mobile = useRef();
  const Password = useRef();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    const mess = checkValidate(email.current.value, Password.current.value);
    setErrorMessage(mess);

    if (mess == null) {
      // SignIN/SignUP

      if (!isSignIn) {
        // Sign UP
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          Password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(auth.currentUser, {
              displayName: fullName.current.value,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                // Profile updated!
                // ...

                const { uid, displayName, email, photoURL } = user;
                dispatch(
                  addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                // ...
              });

            setIsSignIn(true);
            alert("User created success and updated success");
            Navigate("/browse");

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage + " " + errorCode);
            // ..
          });
      } else {
        // Sign in logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          Password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert("Login sucess");
            Navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage + " " + errorCode);
          });
      }
    }
  };

  const toggleSignin = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="bg-[#0d1117] w-[100vw] h-[100vh]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-4/12 m-auto "
      >
        <h1 className="text-white text-4xl my-10">
          {isSignIn ? "Sign In " : "Create your account"}
        </h1>
        <input
          ref={email}
          placeholder="Email"
          className="border-2 p-4 py-10 my-5"
          type="text"
          required
        />
        {!isSignIn && (
          <input
            ref={fullName}
            placeholder="FullName"
            className="border-2 p-4 py-10 my-5"
            type="text"
            required
          />
        )}
        {!isSignIn && (
          <input
            ref={Mobile}
            placeholder="Mobile Number"
            className="border-2 p-4 py-10 my-5"
            type="text"
            required
          />
        )}
        <input
          ref={Password}
          placeholder="Password"
          className="border-2 p-4 py-10 my-5"
          type="text"
          required
        />
        <p className="text-red-600 text-3xl  cursor-pointer"> {errorMessage}</p>
        <button
          className="border-2 w-2/12 p-3 bg-[#007bd0] text-white"
          onClick={handleClick}
        >
          {isSignIn ? "Login in " : "Register "}
        </button>
        <p
          onClick={toggleSignin}
          className="text-white text-2xl my-10 cursor-pointer"
        >
          {" "}
          {isSignIn ? "New User? Create Account" : "Already a user? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
