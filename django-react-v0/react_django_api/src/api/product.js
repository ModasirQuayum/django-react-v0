import apiUrl from "../config/config";
import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import authService from "./auth";

class ProductService{
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
    async getProducts(){
        try {
            const route = apiUrl.get_products_endpoint
            console.log(route)
            const response = await this.client.get(route)
            return response
        } catch (error) {
            if (error.response) {
                if(error.response.status===401){
                    authService.logout()
                    window.location.reload();
                }
                console.log(error.code)
                console.error('Error data:', error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert(error.message);
            }
        }

    }
    async createProduct(title,brand_name,platform,description){
        try {
            const route = apiUrl.create_product_endpoint
                const formData = new FormData()
                formData.append('title', title)
                formData.append('brand_name', brand_name)
                formData.append('platform', platform)
                formData.append('description', description)
            const response = await this.client.post(route,formData)
            return response
        } catch (error) {
            if (error.response) {
                if(error.response.status===401){
                    authService.logout()
                    window.location.reload();
                }
                console.log(error.code)
                console.error('Error data:', error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert(error.message);
            }
        }
    }
    async getProduct(slug){
        try {
            const route = `${apiUrl.product_detail_endpoint}${slug}/`
            console.log(route)
            const response = await this.client.get(route)
            return response
        } catch (error) {
            if (error.response) {
                if(error.response.status===401){
                    authService.logout()
                    window.location.reload();
                }
                console.log(error.code)
                console.error('Error data:', error.response.data);
                alert(JSON.stringify(error.response.data));
            } else {
                alert(error.message);
            }
        }
    }
}

const productListing = new ProductService()
export default productListing