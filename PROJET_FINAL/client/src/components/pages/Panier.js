import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getPanier } from '../../js/actions/PanierActions';
import {deletepanier} from '../../js/actions/PanierActions';
import { Table} from 'react-bootstrap';
const Panier = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPanier());
        
    }, [])
    
    const panier = useSelector(state => state.panierReducer.panier)
    const delette = (panier)=>{  
        alert ('your product is deleted');
        dispatch(deletepanier(panier))
        

    }
    return (
        <div>
            {(!panier)? <h1>You dont have any product in your Cart</h1>:
            panier && panier.listProducts.map(product=>
            <div className='container m-4'style={{display:"flex",flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
                <img src={product && product.product.imgUrl} width='100px' height='100px'/>
                <Table striped bordered hover variant="dark">
                    <tr>
                <th>{product && product.product.name}</th>
                <th>{product && product.product.price}</th>
                <th>Qty: {product && product.quantity}</th>
                <th>Total : {product.quantity*product.product.price}</th>
                <th className='btn btn-danger'onClick={()=>delette(panier)}>delete</th>
                    </tr>
                </Table>
            </div>
            )
            }
            <div className='container center'>
            <span className='btn btn-success' onClick={()=>alert('Your Order is Succesful')}>Pay</span>
            
            </div>
            
        </div>

    )
}

export default Panier

/* <Table striped bordered hover variant="dark">
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
</Table> */
