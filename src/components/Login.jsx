import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

export default function Login() {

    const [form, setForm] = useState('');
    const dispatch = useDispatch();

    const handleChnageInputs = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({
            form,
            isLoggedIn: true
        }))
    }

    return (
        <form className='login__form' autoComplete='off'>
            <h4 className='login_header'>LOGIN</h4>
            <input  onChange={handleChnageInputs} name='username' type="text" placeholder='Username...' />
            <input onChange={handleChnageInputs} name='email' type="email" placeholder='Email...'  />
            <input onChange={handleChnageInputs} name='password' type="password" placeholder='Password...'  />
            <button onClick={handleLogin}>Login</button>
        </form>
    )
}
