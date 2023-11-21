'use client'
import { addUser } from "@/redux/slices/userSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const handleDispatch = () =>{
    if (name) {
      dispatch(addUser({name:name}))
    }
  }

  return (
    <div className="add-user">
      <h3>Add Users</h3>
      <input
        type="text"
        className="add-user-input"
        placeholder="Add New User"
        onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={handleDispatch} className="add-user-btn">
        Add User
      </button>
      <Link href={'/removeusers'}>Remove Users Page</Link>
      <br/>
      <Link href={'/apiusers'}>Api Users List Page</Link>
    </div>
  );
};

export default AddUser;
