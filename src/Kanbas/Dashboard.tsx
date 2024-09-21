import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course" style={{width: "270px", marginBottom: "35px"}}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/images/reactjs.png" alt="" width="100%"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                                <p className="card-text">Full Stack software developer</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course" style={{width: "270px"}}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/images/unity.png" alt="" width="100%"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS4850 Game Engine</h5>
                                <p className="card-text">Fall 2024 Section 01</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course" style={{width: "270px"}}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/images/networks.jpg" alt="" width="100%" height="138px"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS3700 Networks</h5>
                                <p className="card-text">Fall 2024 Section 02</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course" style={{width: "270px"}}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/images/systems.png" alt="" width="100%" height="138px"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS3650 Systems</h5>
                                <p className="card-text">Fall 2024 Section 01</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course" style={{width: "270px"}}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/images/mobile.png" alt="" width="100%" height="138px"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS4520 Mobile Dev.</h5>
                                <p className="card-text">Fall 2024 Section 01</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                            </Link>
                        </div>
                    </div>
                        
                    <div className="wd-dashboard-course" style={{width: "270px"}}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/images/c++.png" alt="" width="100%" height="138px"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS3520 C++</h5>
                                <p className="card-text">Fall 2024 Section 04</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course" style={{width: "270px"}}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/images/algorithm.png" alt="" width="100%" height="138px"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS3000 Algorithms</h5>
                                <p className="card-text">Fall 2024 Section 03</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}