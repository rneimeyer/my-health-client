
import React from 'react';
import { useState} from "react";

export default function MyHealth() {
    const [user, setUser] = useState([]);


    const getUser = () => {
        fetch("http://localhost:3000/person/")
        .then((response) => response.json())
        .then((data) => setUser(data.person))
    }

  return (
      <>
        <div>My Health Page</div>
    </>
  )
}
