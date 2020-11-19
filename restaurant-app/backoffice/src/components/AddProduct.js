import React, { Component } from 'react';
import AddProductForm from './AddProductForm';
import '../App.css'

export class AddProduct extends Component {
  render() {
    return (
      <div>
      <h2>Add Product</h2>
        <AddProductForm/>
      </div>     

    );
  }
}

export default AddProduct;
