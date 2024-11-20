import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {setCurrentUser} from "./reducer";
import {useDispatch} from "react-redux";
import * as db from "../Database";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = () => {
        const user = db.users.find((u: any) => u.username === credentials.username && u.password === credentials.password);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate('/Kanbas/Dashboard');
    }
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input id="wd-username" placeholder="username" className="form-control mb-2" defaultValue={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}></input>
            <input id="wd-password" placeholder="password" className="form-control mb-2" defaultValue={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}></input>
            <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100"> Sign in </button><br />
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    )
}