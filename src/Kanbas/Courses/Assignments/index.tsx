import LessonControlButtons from "../Modules/LessonControlButtons";
import {FaPlus} from "react-icons/fa6";
import {CiSearch} from "react-icons/ci";
import {SlNotebook} from "react-icons/sl";
import {IoEllipsisVertical} from "react-icons/io5";
import {BsGripVertical} from 'react-icons/bs';
import {useParams} from "react-router";
import {assignments} from "../../Database";

export default function Assignments() {
    const {cid} = useParams();
    return (
        <div id="wd-assignments">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <div className="input-group w-50">
                    <span className="input-group-text">
                        <CiSearch/>
                    </span>
                    <input id="wd-search-assignments" className="form-control" placeholder="Search..." />
                </div>
                <div>
                    <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
                        <FaPlus/> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-danger">
                        
                        <FaPlus/> Assignment
                    </button>
                </div>
            </div>
            <div className="wd-title p-3 bg-secondary d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <BsGripVertical className="fs-3 me-2" style={{ marginLeft: "-0.35em" }}/>
                    <h4 id="wd-assignments-title" className="mb-0">ASSIGNMENTS</h4>
                </div>
                <div className="d-flex align-items-center me-2">
                    <div className="me-3" style={{border: "1px solid gray", borderRadius: "2em", padding: "0.5em"}}>
                        40% of Total
                    </div>
                    <FaPlus className="me-2"/>
                    <IoEllipsisVertical />
                </div>
            </div>
            <ul className="wd-assignment-link list-group rounded-0">
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center" key={assignment._id}>
                        <BsGripVertical className="me-2 fs-3"/>
                        <SlNotebook className="me-2 fs-4"/>
                        <div className="ms-2">
                            <a className="wd-assignment-link d-block mb-1" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</a>
                        </div>
                        <div className="ms-auto">
                            <LessonControlButtons/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
