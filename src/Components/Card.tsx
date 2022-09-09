import React from 'react'
import { DeleteFilled, LoadingOutlined, CheckCircleFilled } from "@ant-design/icons"
import { deleteStudent } from "../Features/Student"
import { useAppDispatch } from "../hooks"
import { message } from "antd"
import axios from 'axios'


interface Props {
  id: number,
  name: string,
  department: string
}

interface handleDelete {
  (id: number): void
}

interface CardInterface {
  ({id,name,department}:Props) : JSX.Element
}

const Card :CardInterface  = ({ id, name, department}) => {
  const dispatch = useAppDispatch()

  const handleDelete: handleDelete = (id:number) => {
    message.loading({
      content: "Removing Student",
      icon: <LoadingOutlined spin={true} style={{color:"red", borderColor:"red"}}/>,
      duration: 1.5
    })
    setTimeout(():void => {
      axios.delete(`https://62d00f4a1cc14f8c08837daf.mockapi.io/api/redux/students/${id}`)
      .then(response => {
        dispatch(deleteStudent(id))
        message.success({
          content:"Student Removed",
          icon: <CheckCircleFilled style={{color:"red"}}/>
        })
      })
      .catch(err => {
        message.error("Cannot Delete Student...",2)
      })

    }, 2000)
  }

  return (
    <div className='bg-white p-3 rounded-md shadow-md shadow-slate-200'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-lg font-semibold text-gray-600 '>{id}</p>
        <DeleteFilled className='text-red-500 scale-125 cursor-pointer hover:shadow-sm hover:shadow-slate-200 active:text-red-700' onClick={():void => handleDelete(id)} />
      </div>
      <p className='mt-3 text-base text-gray-700' >Name: {name}</p>
      <p className='mb-3 text-base text-gray-700' >Department: {department}</p>
    </div>
  )
}

export default Card