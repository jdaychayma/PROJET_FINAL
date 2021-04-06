import axios from 'axios';
import {GET_PORTFOLIO} from '../constants/ActionTypePortfolio'

//----------------------------getPortfolio---------------------------
export const getPortfolio=()=>(dispatch)=>{
axios.get('/api/portfolio')
.then(res=>dispatch({type:GET_PORTFOLIO,payload:res.data}))
.catch(Error=>console.log(Error))
}
//-----------------------------addPortfolio-----------------------------------
export const addPortfolio=(newPortfolio)=> (dispatch)=>{
    const config = {
        headers: {
        'x-auth-token': localStorage.getItem('token'),
        },
    };
    axios.post('/api/portfolio/add',newPortfolio,config)
    .then(res=>dispatch( getPortfolio()))
    .catch(Error=>console.log(Error))
}
//--------------------------------deletePortfolio----------------------------
    export const deletePortfolio=(idPortfolio)=>(dispatch)=>{
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
        axios.delete(`/api/portfolio/delete/${idPortfolio}`,config)
        .then(res=>dispatch( getPortfolio()))
        .catch(Error=>console.log(Error))
        }

//----------------------------------editPortfolio-----------------------------
    export const editPortfolio=(idPortfolio,editedPort)=>async (dispatch)=>{
       try {
        const config = {
            headers: {
            'x-auth-token': localStorage.getItem('token'),
            },
        };
           const res = await axios.put(`/api/portfolio/edit/${idPortfolio}`,editedPort,config)
            dispatch( getPortfolio())
            
       } catch (error) {
        console.log(error.message)
       }
    }