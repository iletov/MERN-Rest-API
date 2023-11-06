import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import BackArrow from "../components/BackArrow.jsx";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then((res) => {
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setLoading(false)
    })
    .catch(error => {
      console.log(error);
      setLoading(false)
      alert('Oops! Something went wrong...')
    })
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert('Oops! Something went wrong...')
      });
  };

  return (
    <div className="p-4">
      <BackArrow />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
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

          <button className="p-2 bg-sky-300 m-8 " onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
