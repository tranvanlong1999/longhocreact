import React, { Component } from 'react';




class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'apple',
                    price: 10000,
                    quantity: 100,
                    status: true,
                    image: 'https://thejulius.com.vn/wp-content/uploads/2019/11/JS-029A.jpg'
                },
                {
                    id: 2,
                    name: 'iphone',
                    price: 10000,
                    quantity: 100,
                    status: true
                },
                {
                    id: 3,
                    name: 'sam sung ',
                    price: 10000,
                    quantity: 100,
                    status: true
                }
            ],
            isActive : true 
        }
    }
    onsetState =() =>{
        if(this.state.isActive ==true ){
            this.setState({
                isActive :false
            })
        }
        else{
            this.setState({
                isActive :true
            })
        }
    }
    render() {
        let elements = this.state.products.map(
            (product, index) => {
                return <tr key="index">
                    <th scope="row">
                        {product.id}
                    </th>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {product.price}
                    </td>
                    <td>
                        {product.quantity}
                    </td>
                    <td>{product.status}</td>
                </tr>
            }
        )
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">giá</th>
                            <th scope="col">tên sản phẩm </th>
                            <th scope="col">số lượng</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                            {elements}
                    </tbody>
                </table>
                <button  onClick = {this.onsetState}> 
                    active + {this.state.isActive === true ? 'true' : 'false'}  
                </button>
            </div>
        )
    }
}
export default Product;