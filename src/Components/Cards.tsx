import React from 'react'
import { useAppState } from '../hooks'
import Card from './Card'

const Cards = () => {

    const studentsData = useAppState((state) => state.student.students)
    return (
        <div className='w-7/12 mx-auto grid grid-cols-6 gap-2 text-slate-800 relative top-24'>
            {studentsData.map(data => {
                return <Card key={data.id} id={data.id} name={data.name} department={data.department} />
            })}
        </div>
    )
}

export default Cards