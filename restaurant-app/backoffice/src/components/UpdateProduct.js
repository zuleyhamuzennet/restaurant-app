import '../App.css'
import React, { Component, useEffect,useState } from 'react';
import AddProductForm from './AddProductForm';
import axios from 'axios';

const UpdateProduct=(props)=> {

    const [product, setProduct]= useState({});
    const {id}= props.match.params;

    useEffect(()=>{
        axios.get(`http://localhost:8080/update/${id}`)
            .then((response)=>{
                setProduct({name: response.data.name,
                    description: response.data.description,
                    fiyat: response.data.fiyat, category: response.data.category});
            })
    },[])

    return (
        <div>
            <h2>Product Update</h2>
            <AddProductForm product={product}/>
        </div>
    );

}

export default UpdateProduct;