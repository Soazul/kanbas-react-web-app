import {Link, useLocation, useParams} from "react-router-dom";

export default function CoursesNavigation() {
    const {cid} = useParams();  
    const {pathname} = useLocation(); 
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    
    const getLink = (path: string) => {
        return pathname === path 
        ? "list-group-item active border border-0" 
        : "list-group-item text-danger border border-0";
    };

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link id={`wd-course-${link.toLowerCase()}-link`} to={`/Kanbas/Courses/${cid}/${link}`}
                className={getLink(`/Kanbas/Courses/${cid}/${link}`)}>{link}</Link>
            ))}
        </div>
    );
}

