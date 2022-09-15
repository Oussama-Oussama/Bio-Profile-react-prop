import React from 'react'
import axios from 'axios';
import {useState, useEffect} from "react";
import "./UserList.css"

function UserList() {
    const [listOfUser, setListOfUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setListOfUser(res.data))
        .catch(err => console.warn(err))

    })
  return (
    <div className='container'>
        <ul className='content'>
            {listOfUser.map((user) => {
                return(
                    <li className='item' key={user.id}>
                        <div className="img">
                            <img src="/images.png" alt="" />
                        </div>
                        <div className="inf">
                            <h3>{user.name}</h3>
                            <h4>{user.email}</h4>
                            <h5>{user.website}</h5>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default UserList