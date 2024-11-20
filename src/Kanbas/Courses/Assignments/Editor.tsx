import { useParams, useLocation } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      {assignments
        .filter((assignment: any) => assignment._id === pathname.split("/")[5])
        .map((assignment: any) => (
          <div id="wd-assignments-editor" className="container" key={assignment._id}>
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value={assignment.title} className="form-control mb-3"/>
            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description" className="form-control mb-3" rows={3}>{assignment.description}</textarea>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-points" className="m-2 float-end">Points</label>
              </div>
              <div className="col-8">
                <input id="wd-points" value={assignment.point} className="form-control mb-3"/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-group" className="m-2 float-end">Assignment Group</label>
              </div>
              <div className="col-8">
                <select id="wd-group" className="form-select mb-3">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-display-grade-as" className="m-2 float-end">Display Grade as</label>
              </div>
              <div className="col-8">
                <select id="wd-display-grade-as" className="form-select mb-3">
                  <option selected value="PERCENTAGE">Percentage</option>
                  <option value="RAW">Raw</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-submission-type" className="me-2 float-end">Submission Type</label>
              </div>
              <div className="col-8">
                <div className="form-control mb-3">
                  <select id="wd-submission-type" className="form-select mb-3 mt-2">
                    <option selected value="ONLINE">Online</option>
                    <option value="IN-PERSON">In Person</option>
                  </select>
                  <label className="form-check-label mb-2">Online Entry Options</label>
                  <br/>
                  <input className="form-check-input mb-3 me-2" type="checkbox" name="check-online" id="wd-text-entry"/>
                  <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                  <br/>
                  <input className="form-check-input mb-3 me-2" type="checkbox" name="check-online" id="wd-website-url"/>
                  <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                  <br/>
                  <input className="form-check-input mb-3 me-2" type="checkbox" name="check-online" id="wd-media-recordings"/>
                  <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                  <br/>
                  <input className="form-check-input mb-3 me-2" type="checkbox" name="check-online" id="wd-student-annotation"/>
                  <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                  <br/>
                  <input className="form-check-input mb-3 me-2" type="checkbox" name="check-online" id="wd-file-upload"/>
                  <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-assign" className="me-2 float-end">Assign</label>
              </div>
              <div className="col-8">
                <div className="form-control">
                  <label htmlFor="wd-assign-to">Assign to </label>
                  <input type="text" id="wd-assign-to" value="Everyone" title="Assign to" className="form-control mb-3"/>
                  <label htmlFor="wd-due-date">Due</label>
                  <input type="date" id="wd-due-date" value={assignment.due_date} className="form-control mb-3"></input>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="wd-available-from">Available from</label>
                      <input type="date" id="wd-available-from" value={assignment.available_date} className="form-control mb-3"></input>
                    </div>
                    <div className="col">
                      <label htmlFor="wd-available-unti">Until</label>
                      <input type="date" id="wd-available-unti" value="2024-12-06" className="form-control"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <hr/>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}className="btn btn-danger float-end">Save</Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2 float-end">Cancel</Link>
          </div>
        ))}
    </div>
  );
}
