import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Patients from './components/Patients'
import AddPatient from './components/AddPatient'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Patients />}></Route>
          <Route path='/addpatient' element={<AddPatient />}></Route>
          <Route path='/editpatient/:id' element={<AddPatient />}></Route>
        </Routes></BrowserRouter>
    </>
  )
}

export default App
