import {Routes, Route, Navigate} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import * as userClient from "./Account/client";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({_id: "1234", name: "", number: "New Number", startDate: "2023-09-10", img: "./images/react.png", endDate: "2023-12-15", description: ""});
    const addNewCourse = async () => {
        console.log("Add New Course Button Clicked")
        console.log(course);
        const newCourse = await userClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
    };
    
    const deleteCourse = async (courseId: any) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        }))
        setCourse({_id: "1234", name: "", number: "New Number", startDate: "2023-09-10", img: "./images/react.png", endDate: "2023-12-15", description: ""}); // Reset the form fields
    };

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);
  
    return (
        <Session>
            <div id="wd-kanbas" className="h-100">
                <div className="d-flex h-100">
                    <div className="d-none d-md-block bg-black">
                        <KanbasNavigation/>
                    </div>
                    <div className="wd-main-content-offset p-3 flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="/Account/*" element={<Account/>}/>
                            <Route path="/Dashboard" element={<ProtectedRoute><Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse}/></ProtectedRoute>}/>
                            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>}/>
                            <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Session>
    )
}