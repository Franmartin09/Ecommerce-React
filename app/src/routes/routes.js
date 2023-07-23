import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import App from '../App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
]);

export default router;