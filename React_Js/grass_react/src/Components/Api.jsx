import React, { useEffect, useState } from 'react'
import Tbody from './Tbody';

const Api = () => {
    const [usersData,setUsersData]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
    .then((res)=>{return res.json()})
    .then((users)=>{
        console.log(users);
        setUsersData(users.users)
    })
    .catch((error)=>{
        console.log(error);
    })
    },[])
    
  
  return (
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Mail</th>
      <th scope="col">DOB</th>
      <th scope="col"></th>
    </tr>
  </thead>
  
    {usersData.map((value)=>(
    <Tbody mainV = {value}/>
    ))
}    
</table>
    </>
  )
}

export default Api
