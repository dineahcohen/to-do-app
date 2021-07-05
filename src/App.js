import React from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: '',
      key: ''
    }
  };

  render() {
    return (
      <div className="container">
        <ToDo />
      </div>
    );
  }
}

export default App;
