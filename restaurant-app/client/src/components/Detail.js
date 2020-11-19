import '../App.css'
import React,{useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

const Detail =(props)=>{
const{id}=(props.match.params);
const[productDetail, setProductDetail]=useState({});

useEffect(() => {

    axios.get(`http://localhost:8080/product/${id}`)
    .then(response=>{
        setProductDetail(response.data);
        console.log(response.data);
    })
    .catch((error)=>{

        console.log(error);
    });
}, []);

return(
  <React.Fragment>
  <h2 className="ui header" key={productDetail.id}>{"Product :"+productDetail.name}</h2>
 <p>{"Description :"+productDetail.description}</p>
  <p>{"Price :"+productDetail.fiyat}</p>
 <div className="ui buttons">
 <Link className="ui button" to={`facebook/${productDetail.id}`}>Facebook'ta Paylaş</Link>
 </div>
 </React.Fragment>
);


}
export default Detail;