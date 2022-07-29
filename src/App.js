// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Person nayok='Sakib Khan' naika ='Opu Biswas'></Person>
      <Person nayok='Manna' naika ='Purnima'></Person>
      <Person nayok='Elias Kanchon' naika ='Moushumi'></Person>
      <Person nayok='Dipjol' naika ='Bobita'></Person>
    </div>
  );
}

function Person(props){
  var personStyle = {
    border : '2px solid #b23bc5',
    margin : '10px',
    padding : '10px'
  }
  
  return(
    <div style={personStyle}>
      <h2 style={{padding : '0px', margin : '0px'}}> {props.nayok}</h2>
      <h3 style={{padding : '0px', margin : '0px'}}><span style={{fontSize : '20px', opacity : 0.6}}> Hero of</span> {props.naika}</h3>
  </div>
  )
}

export default App;
