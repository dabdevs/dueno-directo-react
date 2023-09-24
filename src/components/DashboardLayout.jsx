import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../contexts/AuthProvider'
import { NavBar } from './NavBar'

export default function DashboardLayout() {
    var { auth } = useContext(AuthContext)
    
    if (!auth) {
        return <Navigate to={'/guest/login'} />
    }

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <NavBar/>

                            <Outlet />
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
