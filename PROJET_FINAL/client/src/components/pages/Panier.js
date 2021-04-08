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

    const delette = (idpanier)=>{  
      
        dispatch(deletepanier(idpanier)) ;
        alert ('your product is deleted')
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
                    </tr>
                </Table>
                <div >
            </div>
            </div>
            )
            }
            <div className='container m-4'style={{display:"flex",flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
            <span className='btn btn-success' onClick={()=>alert('Your Order is Succesful')}>Pay</span>
            <th className='btn btn-danger'onClick={()=>delette(panier._id)}>clear the basket</th>
            </div>
            
        </div>

    )
}

export default Panier


