import {enrollments} from "../Database";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {enrollments: enrollments};
// a slice is a collection of reducer logic
const enrollmentsSlice = createSlice({
    name: "enrollments", // name of the slice
    initialState, // default state of the slice
    reducers: {
        setEnrollments: (state, action) => {
          state.enrollments = action.payload;
        },   
        addEnrollment: (state, { payload }) => {
          const { user, course } = payload;
          const newEnrollment = {
            _id: new Date().getTime().toString(),
            user,
            course,
          };
          state.enrollments.push(newEnrollment);
        },
        deleteEnrollment: (state, { payload }) => {
          const { user, course } = payload;
          state.enrollments = state.enrollments.filter(
            (enrollment) => !(enrollment.user === user && enrollment.course === course)
          );
        },        
      },
    });

export const {setEnrollments, addEnrollment, deleteEnrollment} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;