import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const saveAssignment= async (assignmentId: string, assignment: string) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
};
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${COURSES_API}/assignment/${assignmentId}`);
    return response.data;
};
export const createAssignment = async (assignmentId: string, assignment: any) => {
    const resposne = await axios.post(`${COURSES_API}/${assignmentId}/assignment`, assignment);
    return resposne.data
};
export const findAssignmentForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignment`);
    return response.data;
};