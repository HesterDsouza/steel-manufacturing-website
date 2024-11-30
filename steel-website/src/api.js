import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BACKEND_API_URL});

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