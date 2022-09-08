import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState:StudentsList = {
    students: [
        {
            id: 1,
            name: "Student 1",
            department: "IT"
        },
        {
            id: 2,
            name: "Student 2",
            department: "ECE"
        }
    ]
}

export const studentSlice = createSlice({
    name: "Student",
    initialState,
    reducers: {
        createStudent: (state:StudentsList, action:PayloadAction<Student>) => {
            state.students.push(action.payload)
        },
        deleteStudent: (state:StudentsList, action:PayloadAction<number>) => {
            let partial = state.students.filter(data => data.id !== action.payload)
            state.students = partial.map((item, index) => {
                return {...item, id: index+1}
            })
        }
    }
})

export const { createStudent, deleteStudent } = studentSlice.actions

export default studentSlice.reducer