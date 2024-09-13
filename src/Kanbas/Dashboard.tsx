import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.png" alt="" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS1234 React JS</Link>
                        <p className="wd-dashboard-course-title">Full stack software developer</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/unity.png" alt="" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS4850 Game Engine</Link>
                        <p className="wd-dashboard-course-title">Game engine developer</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/networks.jpg" alt="" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS3700 Networks</Link>
                        <p className="wd-dashboard-course-title">Networks and connections developer</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/systems.png" alt="" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS3650 Computer Systems</Link>
                        <p className="wd-dashboard-course-title">Computer system developer</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/mobile.png" alt="" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS4520 Mobile Application Devlopment</Link>
                        <p className="wd-dashboard-course-title">Mobile app developer</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/c++.png" alt="" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS3520 Programming in C++</Link>
                        <p className="wd-dashboard-course-title">C++ programmer</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/algorithm.png" alt="" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS3000 Algorithms & Data</Link>
                        <p className="wd-dashboard-course-title">Algorithm and data structure</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}