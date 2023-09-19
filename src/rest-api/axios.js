import axios from "axios";
import refreshToken from "./refresh-token";

axios.defaults.baseURL = "http://localhost:4000/api/v1";

axios.create({
    // baseURL: 'http://localhost:4000/api/v1',
    headers: {
    "Content-Type": "application/json",
  },
})

axios.interceptors.response.use(
    (response) => response, // Return the response for successful requests
    async (error) => {
        // Check if the error is due to token expiration
        if (error.response && error.response.status === 401) {
            try {
                // Refresh the token
                await refreshToken();

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