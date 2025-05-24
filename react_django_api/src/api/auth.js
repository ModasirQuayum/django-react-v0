import apiUrl from "../config/config";
import axios from "axios"
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"
export class AuthService{
    client = axios.create({
        baseURL: apiUrl.base_url_endpoint
    })
    constructor (){
        this.client.interceptors.request.use((config)=>{
            const token = localStorage.getItem(ACCESS_TOKEN)
            if(token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },(error)=>{
            return Promise.reject(error)
        }
    );
    }
    async getRefreshToken(){
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
           const response = await this.client.post(apiUrl.refresh_token_endpoint,{
            refresh: refreshToken
           });
           return response 
        } catch (error) {
            if (error.response) {
                console.error('Error data:', error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert(error.message);
            }
        }
    }
    async getUser(){
        try {
          const route = apiUrl.authenticated_user_endpoint
          const response = await this.client.get(route)
            if (localStorage.getItem(ACCESS_TOKEN)){
                console.log(response.data)
                return response.data
            }
        } catch (error) {
            if (error.response) {
                console.error('Error data:', error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert(error.message);
            }
        }
    }
    async login(route,username,password){
        try {
            const response = await this.client.post(route,{username,password})
            localStorage.setItem(ACCESS_TOKEN,response.data.access)
            localStorage.setItem(REFRESH_TOKEN,response.data.refresh)
            return response.data
        } catch (error) {
            if (error.response) {
                console.error('Error data:', error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert(error.message);
            }
        }
    }
    async signup(route,username,password){
       try {
        const response = await this.client.post(route,{username,password})
        console.log(response.data)
       } catch (error) {
            if (error.response) {
                console.error('Error data:', error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert(error.message);
            }

       } 
    }
    async logout(){
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(REFRESH_TOKEN)
    }
}

const authService = new AuthService();
export default authService