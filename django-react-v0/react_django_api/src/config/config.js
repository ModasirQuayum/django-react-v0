const apiUrl = {
    base_url_endpoint: String(import.meta.env.VITE_API_ENDPOINT),
    signup_endpoint: String(import.meta.env.VITE_API_SIGNUP_ENDPOINT),
    token_endpoint : String(import.meta.env.VITE_API_TOKEN),
    authenticated_user_endpoint: String(import.meta.env.VITE_AUTHENTICATED_USER),
    refresh_token_endpoint: String(import.meta.env.VITE_API_REFRESH_TOKEN)
}
export default apiUrl