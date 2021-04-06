import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { getProductCat } from '../../../js/actions/ProductAction';
import Cardproduct from '../PagesProducts/CardProduct';


const Category = ({match}) => {
const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getProductCat(match.params.id));
    }, []);
    const products = useSelector(state => state.ProductReducer.products.product)
    const category = useSelector(state => state.category.categorys.category)
    const myCategory = category && category.find(el=>el._id === match.params.id)
  return (
<div>
    <div style={{position:"relative",textAlign:"center",color:"white"}}>
        <img src={myCategory.imgUrl} alt='cat' width='100%' height='300'/>
    <h1 style={{position:"absolute",top:'50%',right:'50%'}}>{myCategory&& myCategory.name}</h1>
    </div>

 <div className='container' style={{display:"flex",flexWrap:"wrap", flexDirection:"row"}}>
     {
         products && products.map(product=> <Cardproduct product={product}/>)
     }
 </div>
 </div>
  );
};

export default Category;