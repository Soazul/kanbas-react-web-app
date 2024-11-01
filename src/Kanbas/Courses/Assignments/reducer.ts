import {createSlice} from "@reduxjs/toolkit";

const initialState = {assignments: []};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },      
        addAssignment: (state, {payload: assignment}) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                due_date: assignment.due_date,
                available_from_date: assignment.available_from_date,
                available_until_date: assignment.available_until_date, 
                course: assignment.course
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: updatedAssignment}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === updatedAssignment._id
                    ? { ...a, ...updatedAssignment }
                    : a
            ) as any;
        }
    }
});

export const {setAssignments, addAssignment, deleteAssignment, updateAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;