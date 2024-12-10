import { useNavigate } from "react-router-dom";
import "./adminLogin.css"
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/admin/login`, { email, password });
            localStorage.setItem('token', data.token);
            navigate('/admin/dashboard');
        } catch (error) {
            console.error("Login Failed", error)
            setError(`Login error: ${error.response.data.message}`)
            toast.error(error.response.data.message)
        }
    }
  return (
    <div className="adminLogin">
        <div className="login">
            <h1>Login Page</h1>
        </div>
        <form onSubmit={handleLogin}>
            <div className="formFields">
                <div className="formField">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" 
                        placeholder="Email"  value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required/>
                </div>
                <div className="formField">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" 
                        placeholder="Password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required/>
                </div>
                {error && <p className="error">{error}</p>}
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default AdminLogin