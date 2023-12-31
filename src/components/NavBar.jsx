import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, BellIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import LogoutButton from './LogoutButton'
import AuthContext from '../contexts/AuthProvider'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const NavBar = () => {
    const { auth, logout, navigation } = useContext(AuthContext)
    
    return (
        <nav>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 px-2 flex items-baseline space-x-4">
                                <NavLink
                                    as="a"
                                    to={'/dashboard'}
                                    className={({ isActive }) => classNames(
                                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                >
                                    Dashboard
                                </NavLink>

                                {navigation?.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.endpoint}
                                        className={({ isActive }) => classNames(
                                            isActive
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <span className='text-white'>{auth?.user?.givenName} {auth?.user?.familyName}</span>
                                        <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        {/* <img className="h-8 w-8 rounded-full" src={auth?.user?.imageUrl} alt="" /> */}
                                    </Menu.Button>
                                </div>
                                <Transition
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute px-2 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {/* <a
                                                            href=""
                                                            onClick={(ev) => logout(ev)}
                                                            className={'block px-4 py-2 text-sm text-gray-700'}
                                                        >
                                                            Logout
                                                        </a> */}

                                        <NavLink
                                            as="a"
                                            to={'/dashboard'}
                                            className={({ isActive }) => classNames(
                                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                        >
                                            Dashboard
                                        </NavLink>

                                        {navigation?.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                as="a"
                                                to={item.endpoint}
                                                className={({ isActive }) => classNames(
                                                    isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}

                                        <LogoutButton />
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </Disclosure.Button>
                    </div>
                </div>
            </div>
            
            <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <NavLink
                        as="a"
                        to={'/dashboard'}
                        className={({ isActive }) => classNames(
                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                    >
                        Dashboard
                    </NavLink>

                    {navigation?.map((item) => (
                        <NavLink
                            key={item.name}
                            as="a"
                            to={item.endpoint}
                            className={({ isActive }) => classNames(
                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            {/* <img className="h-8 w-8 rounded-full" src={auth?.user?.imageUrl} alt="" /> */}
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">{auth?.user?.givenName} {auth?.user?.familyName}</div>
                            <div className="text-sm font-medium leading-none text-gray-400">{auth?.user?.email}</div>
                        </div>
                        <button
                            type="button"
                            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        <NavLink
                            as="a"
                            to={'/dashboard'}
                            className={({ isActive }) => classNames(
                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            Dashboard
                        </NavLink>

                        {navigation?.map((item) => (
                            <NavLink
                                key={item.name}
                                as="a"
                                to={item.endpoint}
                                className={({ isActive }) => classNames(
                                    isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <a href="#" onClick={logout} className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'>
                            Logout
                        </a>
                    </div>
                </div>
            </Disclosure.Panel>
        </nav>
    )
}
