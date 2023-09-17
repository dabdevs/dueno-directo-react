import { useRef, useState, useEffect } from "react"
import axios from '../rest-api/axios'

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
const REGISTER_URL = '/auth/register'

export default function Register() {
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [emailFocus, setEmailFocus] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [matchPassword, setMatchPassword] = useState('')
    const [validMatch, setValidMatch] = useState(false)

    const [role, setRole] = useState('')

    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        const result = passwordRegex.test(password)
        setValidPassword(result)

        const match = password === matchPassword
        setValidMatch(match)
    }, [password, matchPassword])

    useEffect(() => {
        setErrors(null)
    }, [email, password, matchPassword])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email == '' || password == '' || role == '') {
            setErrors({ message: 'All fields are required.' })
            return
        }

        if (!validMatch) {
            setErrors({ message: 'Passwords do not match' })
            return
        }

        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, password, role }),
                {
                    headers: { 'Content-Type' : 'application/json'},
                    withCredentials: true
                });

            console.log(response.data)
            
            setSuccess(true)
            setErrors(null)
        } catch (err) {
            setSuccess(false)

            if (!err?.response) {
                setErrors(setErrors({ message: 'No server response' }))
            } else {
                setErrors(err.response.data.errors)
            }

            errRef.current.focus()
        }

    }

    return (
        <section>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register a free account
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>

                    {errors != null && 
                    (<div ref={errRef} className='flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700' aria-live='assertive'>
                        <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div>
                            <span className="font-medium">Error!</span> 
                            <ul>
                                {errors?.email && errors?.email.map(e => <li>{e}</li>)}
                                {errors?.password && errors?.password.map(e => <li>{e}</li>)}
                                {errors?.role && errors?.role.map(e => <li>{e}</li>)}
                                {errors?.message && <li>{errors?.message}</li>}
                            </ul>
                        </div>
                    </div>
                    )}

                    {success &&
                        (<div ref={errRef} className='flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700' aria-live='assertive'>
                            <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div>
                                <span className="font-medium">Success! User created successfuly</span>
                            </div>
                        </div>
                    )}
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                ref={emailRef}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
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
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="false"
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <p
                            >
                                {validPassword
                                    ? ''
                                    : <small className="text-blue-500">
                                        Between 8 to 20 characters, and must have at least one capital letter and one number.
                                    </small>
                                }
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="match-password" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="match-password"
                                name="match-password"
                                type="password"
                                autoComplete="false"
                                onChange={(e) => setMatchPassword(e.target.value)}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <p
                            >
                                {validMatch
                                    ? ''
                                    : <small className="text-red-500">
                                        Passwords do not match.
                                    </small>
                                }
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                                I am
                            </label>
                        </div>
                        <div className="mt-2">
                            <select
                                id="role"
                                name="role"
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value=''>Select an option</option>
                                <option value={'tenant'}>A renter</option>
                                <option value={'owner'}>An landlord</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already registered? 
                    <a href="/guest/login" className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login here
                    </a>
                </p>
            </div>
        </section>
    )
}
