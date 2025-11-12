import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from '../../context/useGetAllUser'
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';
import { CiMenuFries } from "react-icons/ci";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const {setSelectedConversation} = useConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    )
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("");
      return;
    } else {
   toast.error("User not found 😕"); 
      setSearch("");
    }
  }

  return (
    <div className='px- mt-3 flex gap-3 justify-around'>
       <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-2xl" />
        </label>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 sm:ml-0 ml-16">
          <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
            <input
              type="text"
              className="grow outline-none bg-transparent"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button>
            <FaSearch className="sm:text-5xl text-4xl p-2 hover:bg-gray-600 rounded-full duration-300" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search