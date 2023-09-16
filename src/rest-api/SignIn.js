import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useStateContext } from "../contexts/ContextProvider" 

const SignIn = () => {
    

    return (
        <section>

        </section>
    )

}

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { currentUser } = useStateContext()

//     try {
//         const response = await axios.post('/api/v1/login', currentUser);
//         console.log(response)
//         const token = response.data.token;

//         // You can store the token in localStorage or a cookie for future requests
//         localStorage.setItem('token', token);

//         // Redirect or update the state to indicate the user is authenticated
//     } catch (error) {
//         console.error('Login failed', error);
//     }
// };

export default SignIn;
