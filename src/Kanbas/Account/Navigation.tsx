import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const { pathname } = useLocation();
    const getLink = (path: string) => {
        return pathname === path 
        ? "list-group-item active border border-0" 
        : "list-group-item text-danger border border-0";
    };

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link to="/Kanbas/Account/Signin" className={getLink("/Kanbas/Account/Signin")}>Sign in</Link>
            <Link to="/Kanbas/Account/Signup" className={getLink("/Kanbas/Account/Signup")}>Sign up</Link>
            <Link to="/Kanbas/Account/Profile" className={getLink("/Kanbas/Account/Profile")}>Profile</Link>
        </div>
    );
}
 
