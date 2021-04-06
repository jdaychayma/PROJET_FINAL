import axios from 'axios';
import { GET_PANIER } from '../constants/ActionType';
import { DEL_PANIER } from '../constants/ActionType';

export const getPanier = () => async(dispatch)=>{
    try {
        const config = {
            headers: {
              'x-auth-token': localStorage.getItem('token'),
            },
          };
        const res = await axios.get('/api/panier/',config);
        dispatch({
            type:GET_PANIER,
            payload:res.data
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const addPanier = (newPanier) => async(dispatch)=>{
    try {
        const config = {
            headers: {
              'x-auth-token': localStorage.getItem('token'),
            },
          };
          const res = await axios.post('/api/panier/',newPanier,config);
          dispatch(getPanier())
    } catch (error) {
        
    }
}

export const deletepanier = (newPanier) => async(dispatch)=>{
  try {
    const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      const res = await axios.delete('/api/panier/',newPanier,config);
      dispatch(deletepanier(newPanier))
} catch (error) {
    
}
}
