import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addEnrollment, deleteEnrollment } from "../Kanbas/Enrollments/reducer";
import ProtectedRoute from "./Enrollments/ProtectedRoute";
import * as enrollmentsClient from "./Enrollments/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const dispatch = useDispatch();

  let isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const handleEnroll = async (courseId: string) => {
    try {
      await enrollmentsClient.enrollUser(currentUser._id, courseId);
      dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      await enrollmentsClient.unenrollUser(currentUser._id, courseId);
      dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
      </div>
      <hr />
      {isFaculty && (
        <div>
          <h5 className="d-flex justify-content-between align-items-center">
            New Course
            <div>
              <button
                className="btn btn-primary ms-2"
                id="wd-add-new-course-click"
                onClick={addNewCourse}
              >
                Add
              </button>
              <button
                className="btn btn-warning ms-2"
                id="wd-update-course-click"
                onClick={updateCourse}
              >
                Update
              </button>
            </div>
          </h5>
          <hr />
          <input
            value={course.name}
            className="form-control mb-2"
            placeholder="New Course"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            placeholder="New Description"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
              <div className="card rounded-3 overflow-hidden">
                <img src={course.img} height="160px" alt="" />
                <div className="card-body">
                  <span
                    className="wd-dashboard-course-link"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                  >
                    {course.name}
                  </span>
                  <p
                    className="wd-dashboard-course-title card-text"
                    style={{ maxHeight: 53, overflow: "hidden" }}
                  >
                    {course.description}
                  </p>
                  <ProtectedRoute courseId={course._id}>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go
                    </Link>
                  </ProtectedRoute>
                  {isFaculty && (
                    <span>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>
                    </span>
                  )}
                  {!isFaculty && (
                    <span>
                      {!isEnrolled(course._id) ? (
                        <button
                          onClick={() => handleEnroll(course._id)}
                          className="btn btn-success float-end"
                          id="wd-enroll-course-click"
                        >
                          Enroll
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnenroll(course._id)}
                          className="btn btn-danger me-2 float-end"
                          id="wd-unenroll-course-click"
                        >
                          Unenroll
                        </button>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}