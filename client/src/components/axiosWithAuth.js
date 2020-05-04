import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "/api/login",
        headers: { Authorization: token }
    });
};

export default axiosWithAuth;