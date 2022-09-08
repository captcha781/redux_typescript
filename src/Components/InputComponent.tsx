import React, { FormEvent, useEffect, useState } from 'react'
import { useAppState, useAppDispatch } from '../hooks'
import {createStudent} from "../Features/Student"
import {message} from "antd"
interface handleSubmit {
  (e:FormEvent) : void
}



const InputComponent = () => {

  const students = useAppState(state => state.student.students)
  const [name, setName] = useState<string>("")
  const [department, setDepartment] = useState<string>("")
  const [id, setId] = useState<number>(students.length+1)

useEffect(() => {
  setId(students.length +1)
},[students])


  const dispatch = useAppDispatch()
  const handleSubmit:handleSubmit = (e) => {
    e.preventDefault()
    message.loading("Loading Request",1)
    setTimeout(():void => {
      dispatch(createStudent({id,name,department}))
      message.success("Student has been successfully added!")
    },2000)
  }

  return (


    <div className='w-1/4 rounded-md p-3 shadow-lg shadow-slate-300 mx-auto relative top-14 bg-white'>
      <form className='w-3/4 mx-auto' onSubmit={handleSubmit}>
        <h1 className='text-lg text-slate-700 font-bold my-1.5'>Create Student</h1>
        <div className=' my-2.5'>
          <label>ID:</label><br /><input type={"number"} id={"id"} value={id} readOnly className="w-full rounded-sm bg-slate-200 focus:bg-gray-300 p-1.5" />
        </div>
        <div className=' my-2.5'>
          <label>Name:</label><br /><input type={"text"} id={"name"} className="w-full rounded-sm bg-slate-200 focus:bg-gray-300 p-1.5" defaultValue={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className=' my-2.5'>
          <label>Department</label><br /><input type={"text"} id={"dept"} className="w-full rounded-sm bg-slate-200 focus:bg-gray-300 p-1.5" defaultValue={department} onChange={e => setDepartment(e.target.value)} />
        </div>
        <div className=' my-2.5'>
          <button className='rounded-md bg-teal-500 active:bg-teal-600 text-white px-3 py-1 relative left-full -translate-x-full mt-2'>Add Student</button>
        </div>
      </form>
    </div>
  )
}

export default InputComponent