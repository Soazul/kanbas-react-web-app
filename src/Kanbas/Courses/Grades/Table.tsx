import {assignments, users, enrollments, grades} from "../../Database";
import {useParams} from "react-router";

export default function GradesTable() {
    const { cid } = useParams();
    return (
        <div id="wd-grade-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <th>{assignment.title}</th> 
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {enrollments
                        .filter((enrollment: any) => enrollment.course === cid)
                        .map((enrollment: any) => {
                            const user = users.find((user: any) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user && user.firstName} {user && user.lastName}</td>
                                    {assignments
                                        .filter((assignment: any) => assignment.course === cid)
                                        .map((assignment: any) => {
                                            const grade = grades.find((grade: any) => 
                                                grade.student === enrollment.user && 
                                                grade.assignment === assignment._id
                                            );
                                            return (
                                                <td>{grade && grade.grade}</td>
                                            );
                                        })}
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
