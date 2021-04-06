import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteAllUsers} from '../../js/actions/authAction';


const UserList = ({users}) => {
    const dispatch = useDispatch();
    const delet=(users_id)=>{
    
        dispatch(deleteAllUsers(users_id))
        }
    return (
        <tr>
        <th scope="row">{users._id}</th>
        <td>{users.name}</td>
        <td>{users.lastName}</td>
        <td>{users.email}</td>
        <td  onClick={()=>delet(users._id)} className="btn btn-danger">Delete</td>
        </tr>
            

    )
}

export default UserList
