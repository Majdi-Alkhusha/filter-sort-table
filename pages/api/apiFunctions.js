import axios from 'axios';
// import { BaseApiUrl } from '../../src/staticValues'; // Here we need .env file => but now this for testing
import { Cookies } from 'react-cookie';
import querystring from 'querystring';

/* 
We can use MVVM to handle the requests 
*** Again this is test ***
*/

const axiosApiInstance = axios.create();

const cookies = new Cookies();

axiosApiInstance.interceptors.request.use(
    async config => {
        // const token = cookies.get('token');
        const token = 'JWT';
        if (token) {
            config.headers.token = token
            config.headers = {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'token': token,
            }
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

axiosApiInstance.interceptors.response.use(async (response) => {
    if (response.data.success) { return response.data.result }
    else {
        console.log("response error"); // If you need to handle error from backend message
    }
}, async function (error) {
    console.log("error", error)
});

export const getList = async (values) => {
    const query = querystring.stringify(values);
    // https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f
    const myResponse = await axiosApiInstance.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f?${query}`).then(response => {
        return (response)
    }).catch((r) => {
        console.warn('r', r.response);
        return (false)
    });
    return myResponse
}