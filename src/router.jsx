import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Login from './views/Login.jsx'
import Register from "./views/Register.jsx";
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App /> 
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
]);

export default router;