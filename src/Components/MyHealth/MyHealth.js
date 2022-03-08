
import React, { useEffect ,useState} from 'react';


export default function MyHealth() {
    // creating use state for user
    const [user, setUser] = useState([]);

// fetching data from database api
   useEffect(() =>{
    fetch("http://localhost:3000/person/")
    .then((response) => response.json())
    .then((data) => setUser(data.person))
   

   }, []);


    // delete function to delete user
        
   const handleDelete = (e)=> {
    console.log(e.target.value)
    let id = e.target.value;
    fetch("http://localhost:3000/person/" + id ,{method:'DELETE'})
}

    
//    getting user from the database
    const profileList = user.map((user) => (
      <div>
 <li key = {user._id} >
            {user.firstName}</li>
            <li>
            {user.age}</li>
            <li>
            {user.email}
        </li>
        <button type='button'value = {user._id} onClick ={handleDelete}>Delete</button>
      </div> 
    ))




  return (
      <>
        <div>My Health Page</div>
        {/* returning profile list of the user */}
        <ul>{profileList}</ul>


{/* delete button to remove user */}
      
    </>
  )
}
