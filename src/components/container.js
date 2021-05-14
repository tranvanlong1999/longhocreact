import React, { Component } from 'react'

class Container extends Component {


    constructor(props) {
        super(props);
        this.addToCart1 = this.addToCart1.bind(this)
    }
    onClick() {
        console.log('đây là app  components');
    }
    addToCart(text) {
        alert(text);
    }

    addToCart1 = () => {
        alert(this.props.name);
    }
    render() {
        return (
            <div className="product-area pb-60 section-padding-1">
                <div className="container-fluid">
                    <div className="custom-row">
                        <div className="custom-col-5">
                            <div className="product-wrap-2 mb-25 scroll-zoom">
                                <div className="product-img">
                                    <a href="product-details.html">
                                        <img className="default-img" src={this.props.image} alt="" />
                                        <img className="hover-img" src="assets/img/product/hm3-pro-1.jpg" alt="" />
                                    </a>
                                    <span className="pink">-10%</span>
                                    <div className="product-action-2">
                                        <a title="Add To Cart" href="#"><i className="fa fa-shopping-cart" /></a>
                                        <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-eye" /></a>
                                        <a title="Compare" href="#"><i className="fa fa-retweet" /></a>
                                    </div>
                                </div>
                                <div className="product-content-2">
                                    <div className="title-price-wrap-2">
                                        <h3><a href="product-details.html">{this.props.name}</a></h3>
                                        <div className="price-2">
                                            <span>$ 60.00</span>
                                            <span className="old">$ 60.00</span>
                                        </div>
                                    </div>
                                    <div className="pro-wishlist-2">
                                        <a title="Wishlist" href="wishlist.html"><i className="fa fa-heart-o" /></a>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>

                                <button type="button" className="btn btn-success"
                                    onClick={this.onClick}

                                >Success</button>
                                <button type="button" className="btn btn-success"
                                    onClick={() => { this.addToCart('add thành công ') }}

                                >Click me</button>

                                <button type="button" className="btn btn-success"
                                    onClick={this.addToCart1}

                                >bind this </button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Container;