import {useSelector} from "react-redux";
import Login from "./components/Login";
import Logout from './components/Logout';
import {selectUser} from "./redux/authSlice";

function App() {

    const user = useSelector(selectUser);

    return (
        <div className="container">
            {user
                ? <Logout/>
                : <Login/>}
        </div>
    );
}

export default App;
