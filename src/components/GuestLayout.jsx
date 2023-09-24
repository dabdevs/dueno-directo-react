import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";

export default function GuestLayout() {
    const { auth } = useContext(AuthContext)
   
    if (auth) {
        return <Navigate to={'/dashboard'} /> 
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h1 className="text-center text-2xl font-bold leading-9">Dueño Directo</h1>
            </div>
            <Outlet />
        </div>
    )
}