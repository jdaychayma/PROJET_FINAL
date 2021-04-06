import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../js/actions/ProductAction'
import EditProduct from '../pages/PagesProducts/EditProduct'


const ProductList = ({product,categorys}) => {
const dispatch = useDispatch()
    const delet=()=>{
        dispatch(deleteProduct(product._id))
        }
    return (
        <tr>
        <th scope="row">{product._id}</th>
        <td>{product.name}</td>
        <td>{product.category&&product.category.name}</td>
        <td>{product.price}</td>
        <td className="btn btn-danger mr-2" onClick={delet}>Delete</td>
        <td><EditProduct categorys={categorys} product={product}/></td>
      </tr>
    )
}

export default ProductList
