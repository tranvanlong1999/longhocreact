import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Datatable from './components/Datatable';
import Container from './components/container';
class App extends Component {

  constructor(props){
    super(props);
  /*   this.addproduct = this.addproduct.bind; */
  }
  addproduct =() =>{
    console.log(this.refs.name.value);
  }
  render() {

    /* const  headings = ['tên sản phẩm' , 'đơn giá', 'số lượng' , 'hành động'];
    const rows =[ ['sam sung' ,'1000','10' ,'xoa'] ,['iphone' ,'2000','10' ,'xoa'] ,['oppel' ,'1000','10' ,'xoa'] ,['tien phong' ,'1000','10' ,'xoa'] ]; */
    
  

    // 
    var products = [
      
    ];
    let elements = products.map(
      (product, index) => {
        return <Product
          key={product.id}
          price={product.price}
          name={product.name}
          quantity={product.quantity}
          status={product.status}
        ></Product>
      }
    )
    let check = products.map(
      (product, index) => {
        return <Container
          key={product.id}
          price={product.price}
          name={product.name}
          quantity={product.quantity}
          status={product.status}
          image={product.image}

        >
        </Container>
      }
    )

    return (
      <div className="App">
        {/* <Datatable headings={headings} rows={rows} /> */}
        {/* {elements} */}
       {/*  {check} */}
       <Product></Product>

        <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  ref="name"/>
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
          <button type="submit" className="btn btn-primary" onClick ={this.addproduct}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
