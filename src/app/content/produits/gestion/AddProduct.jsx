import axios from 'axios'
import React, { useRef, useState } from 'react'
import { baseUrl, secret } from '../../../../helper/helper'

function AddProduct() {
    const name = useRef()
    const price = useRef()
    const description = useRef()
    const image = useRef()
    const endpoint = "/wp-json/wp/v2/media"
    const endpointP="/wp-json/wc/v3/products"
    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODM5Nzk1NjEsImV4cCI6MTcwNzk3OTU2MSwiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEifQ.QpiTCwnu8R7wDxNtnYb3FFeiGEX_pdKKx5ZE86dgE-w"
    var imageUrl=""
    const handleOnSubmit = async () => {
        // add image
     await   axios({
            method: "POST",
            url: baseUrl + endpoint + secret,
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization" : "Bearer "+token
            },
            data: {
                file: image.current.files[0]
            },
        })
            .then(
                response => {
                    console.log(response.data);
                    imageUrl=response.data.source_url
                }
            )
            .catch(error => console.log(error))

        // addproduct
        console.log("you can add product");
        axios({
            method: "POST",
            url: baseUrl + endpointP + secret,
    
            params: {
                name: name.current.value,
                type: "simple",
                regular_price:price.current.value,
                description:description.current.value,
                categories:[
                    {id:39}
                ],
                images:[
                    {src:imageUrl}
                ]
            },
        })
            .then(
                response => {
                    console.log("product add");
                }
            )
            .catch(error => console.log(error))
    }


    return (
        <div className='container mt-5'>
            <h2>Ajouter un produit</h2>
            <div className="input-group mb-3 input-group-sm">
                <span className="input-group-text">Name</span>
                <input ref={name} placeholder='Product name' type="text" className="form-control" />
            </div>
            <div className="input-group mb-3 input-group-sm">
                <span className="input-group-text">Price</span>
                <input ref={price} placeholder='price' type="text" className="form-control" />
            </div>
            <div className="form-floating">
                <textarea ref={description} className="form-control" placeholder="description goes here"></textarea>
                <label for="description">Description</label>
            </div>

            <div className="input-group mb-3 input-group-sm">
                <span className="input-group-text">Images</span>
                <input ref={image} placeholder='image' type="file" className="form-control" />
            </div>

            <button type="submit" onClick={handleOnSubmit} className="btn btn-primary mt-3">Submit</button>
        </div>
    )
}

export default AddProduct