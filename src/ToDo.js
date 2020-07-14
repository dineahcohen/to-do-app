import React from 'react';
import './App.css';


class Todo extends React.Component{
    state= {
        items: [],
        currentItem:{
          text: '',
          key:''
        }
    };


    handleInput= (e) =>{
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    };

    addItem= (e)=>{
        e.preventDefault()
    }

    render(){
        return(
          <div className="to-do">
            <header>
                <h2> To-Do List</h2>
                <form id="todo-form" onSubmit= {this.addItem}>
                  <input type="text" 
                  placeholder= "Enter text" 
                  value={this.state.currentItem.text}
                  onChange= {this.handleInput}
                  />
                  <button type= "submit"> Go!</button>
                </form>
          </header>
          </div>
        );
      }

}

export default Todo;