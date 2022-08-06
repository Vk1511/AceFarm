import axios from "axios";

export const signUp = async (data) => {
    let dataUrl = `http://0.0.0.0:9000/auth/register/`;
    let response = await axios.post(dataUrl,data);
    return response.data;
}

export const signIn = async (data) => {
    let dataUrl = `http://0.0.0.0:9000/auth/login/`;
    let response = await axios.post(dataUrl,data);
    localStorage.setItem('user',JSON.stringify(response.data));
    return response.data;
}