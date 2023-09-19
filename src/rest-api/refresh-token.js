import axios from "./axios";

const refreshToken = async () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    try {
        const response = await axios.post("/auth/refresh-token", {
            headers: { "Authorization": `Bearer ${auth.token}` },
        });

        console.log('refresh-token', response)

        const { token } = response.data;

        if (!token) {
            localStorage.removeItem("auth");
        }

        auth.token = token

        localStorage.setItem("auth", JSON.stringify(auth));

        return auth;
    } catch (error) {
        localStorage.removeItem("auth");
    }
}

export default refreshToken;