import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// revisit

class App extends Component{
  render(){
    return (
      <Router> 
      <div className="App">
        {/*switch returns the first route that matches path */}
         <Route exact path="/" component={Home} /> {/* exact blocks the slash matching /todos */}
        <Route path="/todos" component={Todos}/>
        <Route path="/about">
          <About name="John"/>
        </Route>
        
  
      </div>
      </Router>
    );
  }
}

function Todos(props){
  return(
    <ul>
      <li>a Todo</li>
    </ul>
  )
}

function About(props){
  return <h1>hi! {props.name}</h1>

}

function Home(props){
  return(
    <h1>app</h1>
  )
}

export default App;
