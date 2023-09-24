import axios from 'axios';
import { useAuth } from '../contexts/AuthProvider';

const setupAxiosInterceptors = () => {
    const { token, setToken } = useAuth();

    axios.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && error.response.status === 401) {
                // 401 Unauthorized, attempt token refresh
                try {
                    const response = await axios.post('/refresh-token', { token });
                    const accessToken = response.data.token;
                    // Update the token in the context and localStorage
                    setToken(accessToken)
                    // Retry the original request with the new token
                    error.config.headers['Authorization'] = `Bearer ${accessToken}`;
                    return axios.request(error.config);
                } catch (refreshError) {
                    // Refresh token failed, log out user or handle as needed
                    console.error('Token refresh error:', refreshError);
                    // logout();
                }
            }
            return Promise.reject(error);
        }
    );
};

export default setupAxiosInterceptors;
