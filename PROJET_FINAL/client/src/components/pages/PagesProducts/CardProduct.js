import React,{useState} from 'react'
import { Card, Button, CardTitle, CardText, CardImg} from 'reactstrap';
import {useDispatch} from 'react-redux';
import { addPanier } from '../../../js/actions/PanierActions';



const Cardproduct=({product})=> {
    const [quantity, setQantity] = useState(1);
    const dispatch = useDispatch()
    const add = ()=>{
        alert ('your product added to panier');
        const newPanier={
            product:product._id,
            quantity}
        dispatch(addPanier(newPanier))
        
    }

    return (
    <div style={{width:"450px", margin:"10px",flexWrap:"wrap",display:"flex",minHeight:"400px",flexDirection:"row",justifyContent:"space-between"}}>
    <Card body inverse color="success">
        <CardImg style={{width:"450",height:"400px"}}  src={product.imgUrl}/> 
        <CardTitle className='m-2' color="red" tag="h5">{product.name}</CardTitle>
        <CardText>{product.price} TND</CardText>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <ul>
                <li style={{listStyle:"none"}}>
                    Qty:<select value={quantity} onChange={(e)=>{setQantity(e.target.value)}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </li>
                </ul>
                    <Button className='btn-warning' onClick={add}>Add to Cart</Button>
                
           
        </div>
</Card>

        </div>
 )
}

export default Cardproduct;
