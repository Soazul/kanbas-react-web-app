import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {setCurrentUser} from "./reducer";
import {useDispatch} from "react-redux";
import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);
        console.log("user", user);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate('/Kanbas/Dashboard');
    }
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input id="wd-username" placeholder="username" className="form-control mb-2" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}></input>
            <input id="wd-password" placeholder="password" type="password" className="form-control mb-2" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}></input>
            <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100"> Sign in </button><br />
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    )
}