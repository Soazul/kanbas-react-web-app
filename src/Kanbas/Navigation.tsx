import {Link, useLocation} from "react-router-dom";
import {AiOutlineDashboard} from "react-icons/ai";
import {IoCalendarOutline} from "react-icons/io5";
import {LiaBookSolid, LiaCogSolid} from "react-icons/lia";
import {FaInbox, FaRegCircleUser} from "react-icons/fa6";

export default function KanbasNavigation() {
    const {pathname} = useLocation();
    const getLink = (path: string) => {
        return pathname === path
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-white bg-black text-center border-0";
    };

    return (
        <div id="wd-kanbas-navigation" style={{ width: 110 }} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" rel="noreferrer" className="list-group-item bg-black border-0">
                <img src="/images/NEU.png" width="75px" alt="" />
            </a>
            <Link to="/Kanbas/Account" id="wd-account-link" className={getLink("/Kanbas/Account")}>
                <FaRegCircleUser className="fs-1 text-white" />
                <br />Account
            </Link>
            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className={getLink("/Kanbas/Dashboard")}>
                <AiOutlineDashboard className="fs-1 text-danger" />
                <br />Dashboard
            </Link>
            <Link to="/Kanbas/Courses" id="wd-course-link" className={getLink("/Kanbas/Courses")}>
                <LiaBookSolid className="fs-1 text-danger" />
                <br />Courses
            </Link>
            <Link to="/Kanbas/Calendar" id="wd-calendar-link" className={getLink("/Kanbas/Calendar")}>
                <IoCalendarOutline className="fs-1 text-danger" />
                <br />Calendar
            </Link>
            <Link to="/Kanbas/Inbox" id="wd-inbox-link" className={getLink("/Kanbas/Inbox")}>
                <FaInbox className="fs-1 text-danger" />
                <br />Inbox
            </Link>
            <Link to="/Labs" id="wd-labs-link" className={getLink("/Labs")}>
                <LiaCogSolid className="fs-1 text-danger" />
                <br />Labs
            </Link>
        </div>
    );
}