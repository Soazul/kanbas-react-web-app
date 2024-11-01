import {useParams, useLocation} from "react-router";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, updateAssignment} from "./reducer";
import * as client from "../Assignments/client";

export default function AssignmentEditor() {
  const {cid} = useParams();
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const {assignments} = useSelector((state: any) => state.assignmentsReducer);

  const assignmentId = pathname.split("/")[5];
  const isEditing = assignmentId !== "new";
  const assignment = isEditing ? assignments.find((a: any) => a._id === assignmentId) : null;

  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || 0);
  const [dueDate, setDueDate] = useState(assignment?.due_date || "");
  const [availableFromDate, setAvailableFromDate] = useState(assignment?.available_from_date || "");
  const [availableUntilDate, setAvailableUntilDate] = useState(assignment?.available_until_date || "");

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };
  const saveAssignment = async (assignment: any) => {
    const status = await client.saveAssignment(assignment._id, assignment);
    dispatch(updateAssignment(assignment));
  };

  const save = () => {
    const newAssignment = {title, description, points, due_date: dueDate, available_from_date: availableFromDate, available_until_date: availableUntilDate};
    if (isEditing) {
      saveAssignment({...newAssignment, _id: assignmentId});
    } else {
      createAssignment({...newAssignment, _id: assignmentId});
    }
  };

  return (
    <div id="wd-assignments-editor" className="container">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value={title} className="form-control mb-3" onChange={(e) => setTitle(e.target.value)}/>
      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description" className="form-control mb-3" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
      <div className="row">
        <div className="col">
          <label htmlFor="wd-points" className="m-2 float-end">Points</label>
        </div>
        <div className="col-8">
          <input id="wd-points" value={points} className="form-control mb-3" onChange={(e) => setPoints(Number(e.target.value))}/>
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
            <option value="PERCENTAGE">Percentage</option>
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
              <option value="ONLINE">Online</option>
              <option value="IN-PERSON">In Person</option>
            </select>
            <label className="form-check-label mb-2">Online Entry Options</label>
            <br />
            <input className="form-check-input mb-3 me-2" type="checkbox" id="wd-text-entry"/>
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input className="form-check-input mb-3 me-2" type="checkbox" id="wd-website-url"/>
            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            <br />
            <input className="form-check-input mb-3 me-2" type="checkbox" id="wd-media-recordings"/>
            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input className="form-check-input mb-3 me-2" type="checkbox" id="wd-student-annotation"/>
            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input className="form-check-input mb-3 me-2" type="checkbox" id="wd-file-upload"/>
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
            <label htmlFor="wd-assign-to">Assign to</label>
            <input type="text" id="wd-assign-to" value="Everyone" title="Assign to" className="form-control mb-3"/>
            <label htmlFor="wd-due-date">Due</label>
            <input type="date" id="wd-due-date" value={dueDate} className="form-control mb-3" onChange={(e) => setDueDate(e.target.value)}/>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from">Available from</label>
                <input type="date" id="wd-available-from" value={availableFromDate} className="form-control mb-3" onChange={(e) => setAvailableFromDate(e.target.value)}/>
              </div>
              <div className="col">
                <label htmlFor="wd-available-until">Until</label>
                <input type="date" id="wd-available-until" value={availableUntilDate} className="form-control" onChange={(e) => setAvailableUntilDate(e.target.value)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger float-end" onClick={save}>Save</Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2 float-end">Cancel</Link>
    </div>
  );
} 
