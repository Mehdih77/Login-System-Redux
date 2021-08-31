export default function Login() {
    return (
        <form className='login__form'>
            <h4 className='login_header'>LOGIN</h4>
            <input type="text" placeholder='Username...' />
            <input type="text" placeholder='Email...'  />
            <input type="password" placeholder='Password...'  />
            <button>Login</button>
        </form>
    )
}
