import React from 'react';
import './App.css';
import Header from './Header';
import Water from './Water';
import ToDo from './ToDo';

class App extends React.Component{
  state= {
    items: [],
    currentItem:{
      text: '',
      key:''
    }
};

  render(){
    return(
      <div className= "container">
        <div className="header">
          <Header tagline= "Everything starts with Din!"/>
        </div>

        <div id="inner-container"> 
          <ToDo/>
          
          <Water/>
        </div>


    </div>
    );
  }
}

export default App;
