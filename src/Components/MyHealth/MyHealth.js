
import React, { useEffect ,useState} from 'react';


export default function MyHealth(urlBase) {
    // creating use state for user
    const [user, setUser] = useState([]);
    
// fetching data from database api
   useEffect(() =>{
    fetch(urlBase)
    .then((response) => response.json())
    .then((data) => setUser(data.person))
   

   }, []);



    // delete function to delete user
        
   const handleDelete = (e)=> {
    console.log(e.target.value)
    let id = e.target.value;
    fetch(urlBase + '/id' ,{method:'DELETE'})
}

    
//    getting user from the database
    const profileList = user.map((user) => (
      <div>
 <li key = {user._id} >
           Name : {user.firstName}</li>
            <li>
           Age : {user.age}</li>
            <li>
          Email :  {user.email}
        </li>
        {/* delete button to remove user */}
       
      </div> 
    ))




  return (
      <>
        <div>My Health Page</div>
        {/* returning profile list of the user */}
        <ul>{profileList}</ul>
        <button type='button'value = {user._id} onClick ={handleDelete}>Delete</button>




      
    </>
  )
}
