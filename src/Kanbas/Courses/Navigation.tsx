import {Link, useLocation} from "react-router-dom";

export default function CoursesNavigation() {
    const {pathname} = useLocation();
    const getLink = (path: string) => {
        return pathname === path 
        ? "list-group-item active border border-0" 
        : "list-group-item text-danger border border-0";
    };
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home"
            className={getLink("/Kanbas/Courses/1234/Home")}>Home</Link>
            <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
            className={getLink("/Kanbas/Courses/1234/Modules")}>Modules</Link>
            <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza"
            className={getLink("/Kanbas/Courses/1234/Piazza")}>Piazza</Link>
            <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom"
            className={getLink("/Kanbas/Courses/1234/Zoom")}>Zoom</Link>
            <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Assignments"
            className={getLink("/Kanbas/Courses/1234/Assignments")}>Assignment</Link>
            <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Quizzes"
            className={getLink("/Kanbas/Courses/1234/Quizzes")}>Quizzes</Link>
            <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades"
            className={getLink("/Kanbas/Courses/1234/Grades")}>Grades</Link>
            <Link id="wd-course-people-link" to="/Kanbas/Courses/1234/People"
            className={getLink("/Kanbas/Courses/1234/People")}>People</Link>
        </div>
    )
}
