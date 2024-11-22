import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export async function enrollUser(userId: string, courseId: string) {
    const response = await axios.put(`${ENROLLMENTS_API}/enroll`, {userId, courseId});
    return response.data;
}

export async function unenrollUser(userId: string, courseId: string) {
    const response = await axios.put(`${ENROLLMENTS_API}/unenroll`, {userId, courseId});
    return response.data;
}