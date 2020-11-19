import React, { useState ,useEffect} from 'react';
import {withRouter} from "react-router-dom"
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

const AddProductForm = (props)=>{  
    console.log("AddProductForrm",props);

    const [product, setProduct]= useState({name:"",description:"",fiyat:"",category:""});
    const[hata, setHata]= useState("");
    const history = useHistory();

    const onInputChange= (event) => setProduct({...product, [event.target.name]: event.target.value });

    const onFormSubmit=(event)=>{
        event.preventDefault();
        setHata("");
        if(props.product?.name){
            axios.put(`http://localhost:8080/update/${props.match.params.id}`,product)
            .then(response=>{
                props.history.push("/list");
                console.log(response.data);
            }).catch(error=>{
                setHata("Başlık ve içerik alanları zorunludur")
            })
        }else{
            axios.post('http://localhost:8080/add',product)
            .then(response=>{
                console.log(response.data);
                props.history.push("/");
            }).catch(error=>{
             console.log({error});
             setHata("Title ve description alanları zorunludur");
            })
        }
    }
    useEffect(()=>{
        try {
          if(props.product?.name && props.product.description&&props.product.fiyat&&props.product.category)setProduct(props.product);
          
        } catch (error) {
          
        }  
        },[props.product]);

        return (
            <React.Fragment>
            {hata &&(
            <div className="ui error message">
            <div className="header">Error</div>
            <p>{hata}</p>
            </div>)}
            <div className= "ui form">
            <div className="field">
            <label>Name</label>
            <input value={product.name} type="text" name= "name" onChange={onInputChange}/>
            </div>
            <div className= "field">
            <label>Description</label>
            <textarea value={product.description} rows="3" name="description" onChange={onInputChange}></textarea>
            </div>
            <div className="field">
            <label>fiyat</label>
            <input value={product.fiyat} type="text" name= "fiyat" onChange={onInputChange}/>
            </div>
                <div className="field">
                    <label>Category</label>
                    <input value={product.category} type="text" name= "category" onChange={onInputChange}/>
                </div>
            <button className="ui primary button" onClick={onFormSubmit}>Send</button>
            <button className="ui  button">Cancel</button>
              
            </div>
            </React.Fragment>
          );
}
export default withRouter(AddProductForm);