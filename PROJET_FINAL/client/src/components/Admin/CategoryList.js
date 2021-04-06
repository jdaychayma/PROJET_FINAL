import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteCategory } from '../../js/actions/CategoryAction';
import EditCategory from '../pages/PagesCategory/EditCategory'


const CategoryList = ({category}) => {
  const dispatch = useDispatch()

  const delet=(idCategory)=>{ 
    dispatch(deleteCategory(idCategory))
    }
    return (
        <tr>
        <th scope="row">{category._id}</th>
        <td>{category.name}</td>
        <td className="btn btn-danger mr-2" onClick={()=>delet(category._id)}>Delete</td>
        <td><EditCategory category={category}/></td>
      </tr>

    )
}

export default CategoryList
