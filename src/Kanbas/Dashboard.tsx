import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import ProtectedRoute from "./Enrollments/ProtectedRoute";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
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
              {<img src={course.img} height="160px" alt=""/>}
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                        className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    {course.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text"
                    style={{ maxHeight: 53, overflow: "hidden" }}
                  >
                    {course.description}
                  </p>
                  {/* <ProtectedRoute courseId={course._id}> */}
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go
                    </Link>
                  {/* </ProtectedRoute> */}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}