import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({ baseURL: import.meta.env.VITE_BACKEND_API_URL});

// Request Interceptor: Attach token to headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) config.headers.Authorization = `Bearer ${token}`
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
                localStorage.removeItem("token");
                // window.location.href = "/admin/login"
                const navigate = useNavigate();
                navigate("/admin/login")
            }
        }
        return Promise.reject(error);
    }
)

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

    const { data } = await api.post("/products/uploads", formData, {
        headers: { "Content-Type" : "multipart/form-data" },
    });

    return data.urls;
}