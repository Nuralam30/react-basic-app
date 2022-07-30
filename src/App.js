// import logo from './logo.svg';
import { useEffect, useState } from 'react';
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
      <RandomUser></RandomUser>
      <Users></Users>

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
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)

  }

  return(
    <div>
      <h2>Count : {count}</h2>
      <button onMouseEnter={ () => setCount(count -1)}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

function RandomUser(){
  const nayoks = [
    {name: 'Manna', age: 52},
    {name: 'Riyaz', age: 54},
    {name: 'Sakib Khan', age: 42},
    {name: 'Shuvo', age: 38}
  ]
  return(
    <div style={{padding:'10px',border:'2px solid #3e4d5c',margin:'10px'}}>
      {
      nayoks.map( nk => <Nayoks name={nk.name} age={nk.age}></Nayoks>)
      }
    </div>
  )
}

function Nayoks(props){
  var personStyle = {
    border : '2px solid #b23bc5',
    margin : '10px',
    padding : '10px'
  }
  
  return(
    <div style={personStyle}>
      <h2> {props.name}</h2>
      <h3><span style={{fontSize : '20px', opacity : 0.6}}> Acting for</span> {props.age} years..</h3>
  </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <ul>
        {
          users.map( user => <li>{user.name}</li>)
        }
      </ul>
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
