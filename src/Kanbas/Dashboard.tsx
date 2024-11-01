import {Link} from "react-router-dom";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {

  return (
        <div id="wd-dashboard">
          <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
          <h5 className="d-flex justify-content-between align-items-center">New Course
            <div>
              <button className="btn btn-primary ms-2" id="wd-add-new-course-click" onClick={addNewCourse}>Add</button>
              <button className="btn btn-warning ms-2" id="wd-update-course-click" onClick={updateCourse}>Update</button>
            </div>
          </h5>
          <hr/>
          <input value={course.name} className="form-control mb-2" placeholder="New Course" onChange={(e) => setCourse({...course, name: e.target.value})}/>
          <textarea value={course.description} className="form-control" placeholder="New Description" onChange={(e) => setCourse({...course, description: e.target.value})}/>
          <hr/>
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
          <div id="wd-dashboard-courses">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course: any) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                    <div className="card rounded-3 overflow-hidden">
                      <img src={course.img} height="160px" alt=""/>
                      <div className="card-body">
                        <span className="wd-dashboard-course-link"
                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                          {course.name}
                        </span>
                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                          {course.description}
                        </p>
                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                        <button onClick={(event) => {event.preventDefault(); deleteCourse(course._id);}} className="btn btn-danger float-end" id="wd-delete-course-click">Delete</button>
                        <button onClick={(event) => {event.preventDefault(); setCourse(course);}} className="btn btn-warning me-2 float-end" id="wd-edit-course-click">Edit</button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
}
