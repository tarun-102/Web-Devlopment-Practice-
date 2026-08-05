import { useState } from 'react';
import Input from './components/inputbox/Input';
import Button from './components/Button';
import Header from './components/header/Header';
import Table from './components/table/Table';
import Form from './components/Form';
import { setShowForm } from './app/showFormSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const dispatch = useDispatch()

  const show = useSelector((state) => state.showForm.show)
  return (
    <>
     <Header  />
    <div className=' d-flex justify-content-center align-items-center flex-column mt-4'>
      
      <Input />

      
    </div>
       {show === true ? <Form /> :<Table />  }
     
    </>
  )
}

export default App
