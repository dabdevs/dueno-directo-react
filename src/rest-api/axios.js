import axios from "axios";
import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";

axios.defaults.baseURL = "http://localhost:4000/api/v1";

axios.create({
    headers: {
    "Content-Type": "application/json",
  },
})

axios.interceptors.response.use(
    (response) => response, // Return the response for successful requests
    async (error) => {
        // Check if the error is due to token expiration
        if (error.response.status === 401) {
            try {
                // Refresh the token
                console.log('interceptor')
                const {data } = await axios.post("/auth/refresh-token");
                console.log('new token', data.token)

                if (res.status === 200) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
                }

                // Retry the original request with the new token
                return axios(error.config);
            } catch (refreshError) {
                // Handle token refresh error
                throw refreshError;
            }
        }

        // For other errors, just re-throw the error
        throw error;
    }
);

export default axios;