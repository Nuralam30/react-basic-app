// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const products = [
    {name : 'Adobe Photoshop' , price : '$40'},
    {name : 'Matlab' , price : '$60'},
    {name : 'Adobe Illustrator' , price : '$48'},
    {name : 'Eset Security' , price : '$18'}
  ]
  
  return (
    <div className="App">
      <Counter></Counter>

      <Person nayok='Sakib Khan' naika ='Opu Biswas'></Person>
      <Person nayok='Manna' naika ='Purnima'></Person>
      <Person nayok='Elias Kanchon' naika ='Moushumi'></Person>
      <Person nayok='Dipjol' naika ='Bobita'></Person>

      <ul>
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>

      {products.map(pd => <Product product={pd}></Product>)}
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h2>Count : {count}</h2>
    </div>
  )
}

function Product(props){
  var productStyle = {
    float : 'left',
    border : '1px solid #b23bc5',
    margin : '10px',
    padding : '10px',
    heigth : '200px',
    width : '200px'
  }

  const {name , price} = props.product;
  
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  var personStyle = {
    border : '2px solid #b23bc5',
    margin : '10px',
    padding : '10px'
  }
  
  return(
    <div style={personStyle}>
      <h2> {props.nayok}</h2>
      <h3><span style={{fontSize : '20px', opacity : 0.6}}> Hero of</span> {props.naika}</h3>
  </div>
  )
}

export default App;
