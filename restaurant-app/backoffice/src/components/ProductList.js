import '../App.css'
import React, {  useState, useEffect  } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import {Grid, Row, Col} from 'react-bootstrap';
 const ProductList =(props)=>{

  const [productList, setProductList]=useState([]);


  useEffect(()=>{
    axios.get('http://localhost:8080/list')
    .then((response)=>{
      setProductList(response.data);
      
    });

  },[]);
  console.log({productList});


        return (
          <div>
              <h2 className="text-center"> Product List</h2>
              <div className="row">
                  <table className="table table-striped table-bordered">
                      <thead>
                      <tr>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          productList.map(
                              product=>
                                  <tr key={product.id}>
                                      <td>{product.name}</td>
                                      <td>{product.description}</td>
                                      <td>{product.fiyat}</td>
                                      <td>{product.category}</td>
                                        <td>
                                            <Link className="ui green button" to={`/update/${product.id}`}>Update</Link>
                                            <Link className="ui orange button" to={`/delete/${product.id}`}>Delete</Link>
                                        </td>
                                  </tr>
                          )
                      }
                      </tbody>
                  </table>
              </div>
          </div>
        )
    
}

export default ProductList;
