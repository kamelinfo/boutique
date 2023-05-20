import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl, secret } from '../../../../helper/helper';
function ProductsTable() {


    const endpoint = "/wp-json/wc/v3/products";
    const [products, setProducts] = useState([])
    const [display, setDisplay] = useState(false)
    useEffect(() => {
        console.log("use effect done");
        axios(
            {
                method: "GET",
                url: baseUrl + endpoint + secret + "&per_page=31",

            }
        )
            .then(response => {
                setProducts(response.data)
                setDisplay(true)
                console.log(response.data[0].images[0].src);
            })
            .catch(error => {
                console.log("ici erreur");
                console.log(error);
            })
    }, [display])


    return (

        <table className="table table-striped">

            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody>
                {display ?
                    products.map((product) => <tr key={product.id}>
                        <td><img src={!product.images.lenght ? product.images[0].src:''} width={100} /></td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>


                    )
                    :
                    <div class="spinner-border"></div>
                }
            </tbody>
        </table>
    )
}

export default ProductsTable