import { useState, useRef, useContext, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import AuthContext, { AuthProvider } from "../contexts/AuthProvider";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const LOGIN_URL = '/auth/login'

export default function Login() {
    const { setAuth, setNavigation } = useContext(AuthContext)
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(LOGIN_URL, JSON.stringify({ email, password }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            );

            const auth = {
                'user': {
                    ...data?.user,
                    'roles': data?.roles,
                    'permissions': data?.permissions,
                    'navigation': data?.navigation
                },
                'token': data?.token
            }

            localStorage.setItem('auth', JSON.stringify(auth))

            setAuth(auth)
            setNavigation(auth.user.navigation)
            setEmail('')
            setPassword('')
        } catch (err) {
            console.error(err)
            if (!err?.response) {
                setErrMsg('No server response')
            } else {
                setErrMsg(err.response.data.message)
            }
            errRef.current.focus()
        }
    }

    return (
        <section>
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login in to your account
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                
                {errMsg &&
                    (<div ref={errRef} className='flex mt-2 bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700' aria-live='assertive'>
                        <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div>
                            <span className="font-medium">Error!</span> {errMsg}
                        </div>
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                ref={emailRef}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    
                    <a href="/guest/register" className="mr-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register here
                    </a>
                </p>
            </div>
        </section>
    )
}