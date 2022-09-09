import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState:StudentsList = {
    students: [
        
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
        },
        initialize : (state: any, action:PayloadAction<StudentsList>) => {
            state.students = action.payload
        }
    }
})

export const { createStudent, deleteStudent, initialize } = studentSlice.actions

export default studentSlice.reducer