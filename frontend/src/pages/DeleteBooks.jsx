import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackArrow from '../components/BackArrow'
import Spinner from '../components/Spinner'
import axios from 'axios'

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert('Oops! Something went wrong!')
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <BackArrow />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-xl'>Are You Sure You Want to Delete</h3>

        <button 
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}  
        >
          Delete
        </button>      
      </div>
    </div>
  )
}

export default DeleteBooks