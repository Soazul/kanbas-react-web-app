import {modules} from "../../Database";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {modules: modules};
// a slice is a collection of reducer logic
const modulesSlice = createSlice({
    name: "modules", // name of the slice
    initialState, // default state of the slice
    reducers: { // contains reducer functions that defines how a state should change based on a response (updates slice's state based on action.payload)
        addModule: (state, {payload: module}) => {
            const newModule: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: module.name,
                course: module.course
            };
            state.modules = [...state.modules, newModule] as any;
        },
        deleteModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.filter((m: any) => m._id !== moduleId);
        },
        updateModule: (state, {payload: module}) => {
            state.modules = state.modules.map((m: any) => m._id === module._id ? module : m) as any;
        },
        editModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.map((m: any) => m._id === moduleId ? { ...m, editing: true } : m) as any;
        }
    }
});

export const {addModule, deleteModule, updateModule, editModule} = modulesSlice.actions;
export default modulesSlice.reducer;