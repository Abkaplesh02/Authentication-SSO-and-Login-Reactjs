import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Content />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
