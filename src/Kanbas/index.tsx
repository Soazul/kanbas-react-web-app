import {Routes, Route, Navigate} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import {useState} from "react";
import store from "./store";
import {Provider} from "react-redux";
import * as db from "./Database";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({_id: "1234", name: "", number: "New Number", startDate: "2023-09-10", img: "./images/react.png", endDate: "2023-12-15", description: ""});
    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime().toString()}]);
        setCourse({_id: "1234", name: "", number: "New Number", startDate: "2023-09-10", img: "./images/react.png", endDate: "2023-12-15", description: ""});
    };
    const deleteCourse = (courseId: any) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        }))
        setCourse({_id: "1234", name: "", number: "New Number", startDate: "2023-09-10", img: "./images/react.png", endDate: "2023-12-15", description: ""}); // Reset the form fields
    };

    return (
        <Provider store={store}>
            <div id="wd-kanbas" className="h-100">
                <div className="d-flex h-100">
                    <div className="d-none d-md-block bg-black">
                        <KanbasNavigation/>
                    </div>
                    <div className="wd-main-content-offset p-3 flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="/Account/*" element={<Account/>}/>
                            <Route path="/Dashboard" element={<Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse}/>}/>
                            <Route path="/Courses/:cid/*" element={<Courses courses={courses}/>}/>
                            <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    )
}