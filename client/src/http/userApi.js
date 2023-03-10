import {$authHost, $host} from "./index";
import jwtDecode from 'jwt-decode'

export const signup = async (email, password) => {
    const {data} = await $host.post('api/user/signup', {email, password, role: 'ADMIN'})
    console.log(data)
    localStorage.setItem('token', data)
    return jwtDecode(data)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data)
    return jwtDecode(data)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data)
    return jwtDecode(data)
}