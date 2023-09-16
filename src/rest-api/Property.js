import axios from "axios";
import { useState } from "react";

refreshToken = async () => {
    const [token, setToken] = useState(token)

    await axios.post(`${baseUrl}/properties`, { token: token })
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            if (error) alert(error.response.data.message)
            console.log(error);
        });
}