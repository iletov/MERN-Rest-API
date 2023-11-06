import React, { useState } from "react";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import BackArrow from "../components/BackArrow.jsx";
import { useNavigate } from "react-router-dom";


const CreateBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSaveBook = () => {
    const data = {
      title, 
      author, 
      publishYear,
    }
    setLoading(true)
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }

  return (
    <div className="p-4">
      <BackArrow />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner/> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto w-[600px]">
        <div className="my-4">
          
          {/* TITLE */}
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 order-gray-500 px-4 py-2 w-full"  
          />
          
          {/* AUTHOR */}
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input 
            type="text" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 order-gray-500 px-4 py-2 w-full"  
          />

          {/* PUBLISH YEAR */}
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input 
            type="text" 
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 order-gray-500 px-4 py-2 w-full"  
          />

          <button className="p-2 bg-sky-300 m-8 " onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateBooks