import {Link} from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value="alice" placeholder="username" className="form-control mb-2"></input>
            <input id="wd-password" value="123" placeholder="password" type="password" className="form-control mb-2"></input>
            <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2"></input>
            <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2"></input>
            <input id="wd-dob" value="" type="date" className="form-control mb-2"></input>
            <input id="wd-email" value="alice@wonderland.com" type="email" className="form-control mb-2"></input>
            <select id="wd-role" className="form-select mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
        </div>
    )
}