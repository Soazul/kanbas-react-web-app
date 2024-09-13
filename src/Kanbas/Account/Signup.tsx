import {Link} from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
        <h3>Sign up</h3>
        <input placeholder="username"></input>
        <br/>
        <input placeholder="password" type="password"></input>
        <br/>
        <input placeholder="verify password" type="password"></input>
        <br/>
        <Link to="/Kanbas/Account/Profile">Sign up</Link>
        <br/>
        <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
    )
}