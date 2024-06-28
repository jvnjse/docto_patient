import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function AddPatient() {
    const { id } = useParams()
    const url = useLocation()
    console.log(url)
    const [url1, seturl1] = useState()
    const [data, setdata] = useState(
        {
            first_name: '',
            last_name: '',
            gender: '',
            address: '',
            phone_number: '',
            email: '',
            date_of_birth: ''
        }

    )


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/patient/${id}/`)
            .then((res) => {
                console.log(res.data)
                setdata(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        if (url.pathname.includes('edit')) {
            seturl1(`http://127.0.0.1:8000/api/editpatient/${id}/`)
        }
        else {
            seturl1('http://127.0.0.1:8000/api/postpatients/')
        }
    }, [])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        });
    };
    const navigate = useNavigate()


    function submitdata(e) {
        e.preventDefault()

        axios.post(url1, data)
            .then((res) => {
                console.log(res.data)

                navigate('/')

            })
            .catch((err) => {
                console.log(err.data)
            })

    }
    // axios.post('http://127.0.0.1:8000/api/postpatients/')

    return (
        <div className='p-4'>
            <form class="w-full" onSubmit={submitdata}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input required value={data.first_name} onChange={handleChange} name="first_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input required value={data.last_name} onChange={handleChange} name="last_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email Address
                        </label>
                        <input required value={data.email} onChange={handleChange} name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                    </div>
                </div>

                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        address                    </label>
                    <input required value={data.address} onChange={handleChange} name="address" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        phone_number                    </label>
                    <input required value={data.phone_number} onChange={handleChange} name="phone_number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        gender
                    </label>
                    <input required value={data.gender} onChange={handleChange} name="gender" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>

                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        date_of_birth
                    </label>
                    <input required value={data.date_of_birth} onChange={handleChange} type="date" name="date_of_birth" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Doe" />
                </div>


                <button class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                    Send Message
                </button>



            </form>

        </div>
    )
}

export default AddPatient