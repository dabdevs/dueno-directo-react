import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/v1";
const REFRESH_TOKEN_URL = "/auth/refresh-token";

axios.create({
    headers: {
        "Content-Type": "application/json",
    },
})

axios.interceptors.response.use(
    (response) => response, // Return the response for successful requests
    async (error) => {
        const originalRequest = error.config;
        // Check if the error is due to token expiration
        if (error.response && error.response.status === 401 && error.response.data.message != "Wrong credentials" && !originalRequest._retry) {
            originalRequest._retry = true;

            axios.post(REFRESH_TOKEN_URL)
                .then(({ data }) => {
                    console.log('new token', data.token)

                    if (res.status === 200) {
                        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
                        originalRequest.headers.Authorization = `Bearer ${data.token}`;
                    }

                    console.log('Original request: ', originalRequest)

                    // Retry the original request with the new token
                    return axios(originalRequest);
                }).catch((refreshError) => {
                    throw refreshError;
                })
        }

        return Promise.reject(error);
    }
);

export default axios;