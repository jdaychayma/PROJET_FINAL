import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Button, Spinner ,Table} from 'react-bootstrap';
import { getAllUsers } from '../../js/actions/authAction';
import { getCategory } from '../../js/actions/CategoryAction';
import { getProduct } from '../../js/actions/ProductAction';
import AddProduct from '../pages/PagesProducts/AddProduct';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import UserList from './UserList';
import {Link} from 'react-router-dom'

const Dashboard = () => {
const dispatch = useDispatch();
useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getCategory());
    dispatch(getProduct())
}, [])

const user = useSelector(state => state.authReducer.user);
const users = useSelector(state => state.authReducer.users.users);
const products = useSelector(state => state.ProductReducer.products.product);
const categorys = useSelector(state => state.category.categorys.category);
    return (
        (!user)?<Spinner className="mx-auto"/>:
        <div >
            <div className='mb-4'>
            <h3>Users List</h3>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
       {users && users.map(users=> <UserList key={users._id} users={users}/>)}
      </tbody>
    </Table>
        </div>
        <div className='mb-4'>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
             <h3>Category List</h3>
             <Link to="AddCategory"><Button className='btn-info'>Add Category</Button></Link>
        </div>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
       {categorys && categorys.map(category=> <CategoryList key={category._id} category={category}/>)}
      </tbody>
    </Table>
        </div>
        <div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <h3> Product List</h3>
        <AddProduct categorys={categorys}/>
        </div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
       {products && products.map(product=> <ProductList key={product._id} product={product} categorys={categorys}/>)}
      </tbody>
    </Table>
        </div>
        </div>
    )
}

export default Dashboard
