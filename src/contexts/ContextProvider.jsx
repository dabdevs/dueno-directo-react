import { createContext, useContext, useState } from "react";
import axios from "axios";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {}
})

const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2OTQ3MDY0ODcsImV4cCI6MTY5NDcxMDA4NywibmJmIjoxNjk0NzA2NDg3LCJqdGkiOiJ6c2k3d1RxQmFpSEJDb2JPIiwic3ViIjoiMTUwMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.hM6NCkpVWH7QEXdivAedEOXFJAJN4xK9wRU_D9NCYvA'
const baseUrl = 'http://localhost:4000/api/v1'

axios.defaults.headers.common = { 'Authorization': `bearer ${authToken}` };
axios.defaults.headers.post['Content-Type'] = 'application/json';

const propertiesJson = await axios.get(`${baseUrl}/properties`)
.then(function (response) {
    return response.data
})
.catch(function (error) {
    if (error) alert(error.response.data.message)
    console.log(error);
});

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        name: 'Johnny Bravo',
        email: 'johnnyb@gmail.com',
        imgUrl: 'https://dummyimage.com/600x400/b2b2b2/000.jpg'
    })
    console.log('la:', propertiesJson)
    const [userToken, setUserToken] = useState(authToken)
    const [properties, setProperties] = useState(propertiesJson)

    return (
        <StateContext.Provider value={{ 
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            properties,
            setProperties
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)