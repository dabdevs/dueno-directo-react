import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Login from './views/Login.jsx'
import Register from "./views/Register.jsx";
import Dashboard from "./views/Dashboard.jsx";
import LandingPage from "./views/LandingPage.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import Properties from "./views/Properties.jsx";
import PropertyForm from "./views/PropertyView.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'properties',
                element: <Properties />
            },
            {
                path: 'properties/create',
                element: <PropertyForm />
            },
        ]
    },
    {
        path: '/guest',
        element: <GuestLayout />,
        children: [
            {
                path: '',
                element: <LandingPage />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]);

export default router;