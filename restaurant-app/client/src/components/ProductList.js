import '../App.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

const ProductList = (props) => {

    const [productList, setProductList] = useState([]);
    const [category, setCategory] = useState([]);
    const [cart, setCart] = useState([]);

    function getProduct(category) {
        console.log(category.category);
        axios.get('http://localhost:8080/category/list', {
            params: {
                category: category.category
            }
        })
            .then(response => {

                setProductList(response.data);
                console.log(productList);

            }).catch(error => {
            console.log({error});

        })
    }

    useEffect(() => {
        axios.get('http://localhost:8080/category')
            .then((response) => {
                setCategory(response.data);

            });

    }, []);

    const addToCart = (product) => {

        console.log("sepet : ", cart);

        if (cart.includes(product) == false) {
            setCart([...cart, product]);
        }

    };
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count => count + 1);
    }

    const cartItems = cart.map((cart) => (
        <tr key={cart.id}>
            <th>
                < td>{cart.name}</td>
            </th>

            <th> <td>{cart.fiyat}</td></th>
            <th><td></td></th>
            <th> <button onClick={increase}>+</button></th>


        </tr>
    ));


    return (
        <div className="ui relaxed divided list">
            <h2>Product List</h2>
            <table className="table table-striped table-bordered">
                <tbody>
                <tr>
                    <th>
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <div className="class sidebar">
                                        <ul className="list-group-horizontal-sm">
                                            <p style={{fontWeight: 'bold', fontSize: "15px", marginTop: "10px"}}>Product
                                                Categories</p>
                                            {category.map((category) => {
                                                return (
                                                    <li>
                                                        <button className="btn btn-info"
                                                                onClick={() => getProduct({category})
                                                                }>{category.name}</button>
                                                    </li>
                                                )

                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </th>
                    <th>
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="row">
                                {
                                    productList.map(
                                        product =>
                                            <div style={{marginBottom: "15px"}} className="col-md-4">
                                                <div className="card">
                                                    <div className="card-header" style={{backgroundColor: "yellow"}}>
                                                        <h4 className="d-inline">{product.name}</h4>
                                                    </div>
                                                    <div className="card-body text-dark">
                                                        <p className="card-text text-secondary">Description
                                                            :{product.description}</p>
                                                        <p className="card-text text-secondary">Price
                                                            :{product.fiyat}</p>
                                                        <button onClick={() => addToCart(product)}
                                                                className="btn btn-success ">Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                            </div>
                        </div>
                    </th>
                    <th>
                        <div>


                            <h2 className="text-center"> Cart</h2>
                            <div className="row">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Name</th>

                                        <th>Price</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cartItems}                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>)


}

export default ProductList;
