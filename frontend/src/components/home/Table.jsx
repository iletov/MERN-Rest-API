import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const Table = ({books}) => {
  return (
    <div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-300 rounded-sm">No</th>
            <th className="border border-slate-300 rounded-sm">Title</th>
            <th className="border border-slate-300 rounded-sm max-md:hidden">
              Author
            </th>
            <th className="border border-slate-300 rounded-sm max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-300 rounded-sm">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-400 rounded-sm text-center">
                {index + 1}
              </td>
              <td className="border border-slate-400 rounded-sm text-center">
                {book.title}
              </td>
              <td className="border border-slate-400 rounded-sm text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-400 rounded-sm text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-slate-400 rounded-sm text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-green-800 text-2xl" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <BsInfoCircle className="text-yellow-600 text-2xl" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-red-600 text-2xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
