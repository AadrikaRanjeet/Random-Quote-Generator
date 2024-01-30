import React from "react";
import './App.css';
import axios from "axios";
class App extends React.Component
{
  state={
   advice:' '
  };
  componentDidMount()
  {
    //to fetch actual advice we will use axios and fetchapi so we will create one function for that
    this.fetchAdvice();
  }
   fetchAdvice=()=>{
     axios.get('https://api.adviceslip.com/advice')
     .then((response)=>{
      const {advice}=response.data.slip; //equivalent to const advice = response.data.slip.advice;
      this.setState({advice});
     }
     )
     .catch((error)=>{
      console.log(error);
     }
     )
    }
  render(){
    const {advice}=this.state;
    return(

      <div className="app">
        <div className="card">
        <h1 className="heading"style={{ color: 'black', fontSize:'35px',fontFamily:'Nunito, sans-serif;'}}>{advice}</h1>
        </div>
        <button type="button" className="btn btn-dark shake-animation "onClick={this.fetchAdvice}><span style={{fontSize:'18px'}}>Give me advice !</span></button>
      </div>
    )
  }
}
export default App;