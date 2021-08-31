import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/authSlice";

export default function Logout() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        <div className='logout__form'>
            <h4 className='logout_header'>Welcome {user.form.username}</h4>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
