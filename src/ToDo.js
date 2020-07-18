import React from 'react';
import './App.css';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

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
        const newItem= this.state.currentItem;
        if(newItem.text !==""){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
            currentItem: {
              text: '',
              key: ''
            }
          })
        }
    };

    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
  
    }
    




    render(){
        return(
          <div className="to-do">
            <header>
                <h2 className="card-top"> To-Do List</h2>
                <form id="todo-form" onSubmit= {this.addItem}>
                  <input type="text" 
                  placeholder= "Enter text" 
                  value={this.state.currentItem.text}
                  onChange= {this.handleInput}
                  />
                  <button type= "submit"> Go!</button>
                </form>
          </header>
          <ListItems 
          items= {this.state.items}
          deleteItem= {this.deleteItem}
          />
          </div>
        );
      }

}

export default Todo;