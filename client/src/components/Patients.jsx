import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PatientCard from './PatientCard'
import { Link } from 'react-router-dom'
function Patients() {
    const [data, setdata] = useState()
    function getusers() {
        axios.get('http://127.0.0.1:8000/api/getpatients/')
            .then((res) => {
                console.log(res.data)
                setdata(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getusers()
    }, [])
    return (
        <>
            <div className=' flex justify-between px-24 py-3'>
                <h1 className=' text-4xl font-bold'>PATIENTS</h1>
                <Link to={"/addpatient"}>
                    <button className='bg-green-500 p-2 rounded-xl'>
                        ADD PATIENTS
                    </button></Link>

            </div>
            <div className='flex flex-wrap'>
                {data && data.map((patient, index) => (
                    <PatientCard
                        key={index}
                        id={patient.id}
                        first_name={patient.first_name}
                        last_name={patient.last_name}
                        gender={patient.gender}
                        address={patient.address}
                        phone_number={patient.phone_number}
                        email={patient.email}
                        date_of_birth={patient.date_of_birth}
                    />
                ))}
            </div>
        </>
    )
}

export default Patients