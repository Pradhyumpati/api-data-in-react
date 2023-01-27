import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState  } from 'react';
import User from './components/users';

const App = ()=> {
const[users,setUsers]=useState([]);
  
      useEffect(() =>{
        fetchData();

      },[])
const fetchData = async()=>{
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => setUsers(data))
  .catch((err)=>{
    console.log(err);
  })

}
console.log(users)
return (
  <div className='App'>
    <h3> JSON API CALL...</h3>
    <div>
      {
        users.map((user)=> (
          <User id ={user.userId} key={user.userId} name={user.id} title={user.title} body={users.body}/>
        ))
      }
    </div>
    </div>
  )
     
}

export default App;
