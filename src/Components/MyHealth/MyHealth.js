
import React, { useEffect ,useState} from 'react';


export default function MyHealth() {
    const [user, setUser] = useState([]);


   useEffect(() =>{
    fetch("http://localhost:3000/person/")
    .then((response) => response.json())
    .then((data) => setUser(data.person))
   

   }, []);
        
    
    const profileList = user.map((user) => (
      <div>
 <li key = {user._id}>
            {user.firstName}</li>
            <li>
            {user.age}</li>
            <li>
            {user.email}
        </li>
      </div> 
    ))


  return (
      <>
        <div>My Health Page</div>
        <ul>{profileList}</ul>

       
    </>
  )
}
