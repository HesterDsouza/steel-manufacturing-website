import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const api = axios.create({ baseURL: import.meta.env.VITE_BACKEND_API_URL});

let sessionTimeOut = null;

const tokenExpiry = (token) => {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    const timeLeft = decoded.exp - currentTime;

    if(timeLeft > 0 && !sessionTimeOut){
        sessionTimeOut = setTimeout(() => {
            toast.info(`Login Session has expired. You will be redirected to Login Page`, {autoClose: 4000, hideProgressBar: false});
            localStorage.removeItem("token");
            sessionTimeOut = null;
            setTimeout(() => {
                window.location.href = "/admin/login"
            }, 4000)
        }, timeLeft * 1000)
    }
}

// Request Interceptor: Attach token to headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
        tokenExpiry(token);
    }
    return config;
})

// Response Interceptor: Handle token refresh
api.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;
        if(error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/admin/refresh-token`);
                localStorage.setItem("token", data.token);
                originalRequest.headers.Authorization = `Bearer ${data.token}`;
                return api(originalRequest);
            } catch (error) {
                console.error("Refresh Token Error:", error);
            }
        }
        return Promise.reject(error);
    }
)

// API Functions
// get all products
export const fetchProducts = () => api.get('/products');

// get single product
export const fetchProduct = (id) => api.get(`/products/${id}`);

// search product(s)
export const searchProducts = (query, page = 1, limit = 12) => api.get(`/products/search?query=${query}&page=${page}&limit=${limit}`);

// add a product
export const addProduct = (productData) => api.post('/products', productData);

// update a product
export const updateProduct = (id, productData) => api.put(`/products/${id}`, productData);

// delete a product
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// Upload Images endpoint
export const uploadImages = async( files ) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    try {
        const { data } = await api.post("/products/uploads", formData, {
            headers: { "Content-Type" : "multipart/form-data" },
        });
    
        return data.urls;
    } catch (error) {
        console.error("Error uploading images:", error);
        toast.error("Failed to upload images.");
        throw error;
    }
}