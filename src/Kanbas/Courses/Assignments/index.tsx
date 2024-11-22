import LessonControlButtons from "../Modules/LessonControlButtons";
import {FaPlus} from "react-icons/fa6";
import {CiSearch} from "react-icons/ci";
import {SlNotebook} from "react-icons/sl";
import {IoEllipsisVertical} from "react-icons/io5";
import {BsGripVertical} from 'react-icons/bs';
import {useParams} from "react-router";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {FaTrash} from "react-icons/fa";
import {deleteAssignment} from "./reducer";
import ModalAssignment from "./ModalAssignment";
import {useState, useEffect} from "react";
import * as assignmentClient from "../Assignments/client";
import { setAssignments } from "./reducer";

export default function Assignments() {
    const {cid} = useParams();
    const dispatch = useDispatch();
    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const [assignmentId, setAssignmentId] = useState('');
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY";
    const fetchAssignments = async () => {
        const assignment = await assignmentClient.findAssignmentForCourse(cid as string);
        dispatch(setAssignments(assignment));
      };
      useEffect(() => {
        fetchAssignments();
      }, []);
    
    const deleteAssignment = async (assignmentId: string) => {
        try {
            await assignmentClient.deleteAssignment(assignmentId);
            fetchAssignments();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div id="wd-assignments">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <div className="input-group w-50">
                    <span className="input-group-text"><CiSearch/></span>
                    <input id="wd-search-assignments" className="form-control" placeholder="Search..." />
                </div>
                {isFaculty && (
                    <div>
                        <button id="wd-add-assignment-group" className="btn btn-secondary me-2"><FaPlus/> Group</button>
                        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="btn btn-danger"><FaPlus/> Assignment</Link>
                    </div>
                )}
                
            </div>
            <div className="wd-title p-3 bg-secondary d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <BsGripVertical className="fs-3 me-2" style={{ marginLeft: "-0.35em" }} />
                    <h4 id="wd-assignments-title" className="mb-0">ASSIGNMENTS</h4>
                </div>
                <div className="d-flex align-items-center me-2">
                    <div className="me-3" style={{ border: "1px solid gray", borderRadius: "2em", padding: "0.5em" }}>
                        40% of Total
                    </div>
                    {isFaculty && <FaPlus className="me-2" />}
                    <IoEllipsisVertical />
                </div>
            </div>
            <ul className="wd-assignment-link list-group rounded-0">
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center" key={assignment._id}>
                            <BsGripVertical className="me-2 fs-3" />
                            <SlNotebook className="me-2 fs-4" />
                            <div className="ms-2">
                            {isFaculty ? (
                                <a className="wd-assignment-link d-block mb-1" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</a>) : (
                                <p className="wd-assignment-title d-block mb-1">{assignment.title}</p>
                            )}
                            </div>
                            <div className="ms-auto">
                               {isFaculty && <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-remove-assignment-dialog" onClick={() => setAssignmentId(assignment._id)} />} 
                                <ModalAssignment assignmentId={assignmentId} deleteAssignment={deleteAssignment}/>
                                <LessonControlButtons />
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}