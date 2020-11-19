import '../App.css'
import React,{useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import Delete from "./Delete";
import { useParams, useHistory,useLocation } from "react-router-dom";


const Detail =(props)=>{
const{id}=(props.match.params);
const[productDetail, setProductDetail]=useState({});
const history = useHistory();
const location = useLocation();


useEffect(() => {

    axios.get(`http://localhost:8080/list/${id}`)
    .then(response=>{
        setProductDetail(response.data);
        
    })
    .catch((error)=>{

        console.log(error);
    });
}, []);

return(
<React.Fragment>
 <h2 className="ui header">{productDetail.name}</h2>
 <p>{productDetail.description}</p>
 <p>{productDetail.fiyat}</p>
    <p>{productDetail.category}</p>
 <div className="ui buttons">
 <Link className="ui green button" to={`/update/${productDetail.id}`}>Update</Link>
 <Delete news={productDetail} push={props.history.push}/>
 <Link className="ui button" to={`facebook/${productDetail.id}`}>Facebook'ta Paylaş</Link>
 </div>
 </React.Fragment>
);


}
export default Detail;