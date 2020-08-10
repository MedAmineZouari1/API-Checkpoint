import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const UserList  = () => {


const [list, setList] = useState([])
  
useEffect(() => {
const fetchData = async() => {
let result = await axios.get("https://jsonplaceholder.typicode.com/users")
setList (result.data)

}
fetchData()
    
  });





    return (  
<Table  striped bordered hover variant="dark">

    <th>Name</th>
    <th>Email</th>
    <th>Username</th>
    <th>address</th>
    <tbody>
{list.map((el,id) => 
    
    <tr key={id}>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>{el.username}</td>
        <td>{` Street :${el.address.street} , city ${el.address.city}  `}</td>
    </tr>
    
    
    
    
    )}


</tbody>
</Table>

    );
}
 
export default  UserList ;