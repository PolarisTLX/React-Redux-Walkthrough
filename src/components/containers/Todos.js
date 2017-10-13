//NOTE: Cannot leave comments with the components code / JSX as it will cause errors

import React, {Component} from 'react'
import { connect } from 'react-redux'

class Todos extends Component {

  constructor() {
    super()
    this.state = {
      nextTodo: {
        name: '',
        description: ''
      },
      list: [
        {name:'Groceries', description: 'pick up groceries'},
        {name:'Laundry', description: 'do laundry'},
        {name:'Dishes', description: 'do dishes'}
      ]
    }
  }

  addTodo(event) {
    console.log('Add TODO: ' + JSON.stringify(this.state.nextTodo))
    //make a copy of the existing list:
    let list = Object.assign([], this.state.list)
    //add the newly typed item into the list:
    list.push(this.state.nextTodo)
    //reset the this.state with the new list (overwrite the old list)
    this.setState({
      list: list,
      nextTodo: {
        name: '',
        description: ''
      }
    })
  }

  updateTodo(field, event) {
    //console.log('UPDATE TODO: ' + field + '==' + event.target.value)
    let nextTodo = Object.assign({}, this.state.nextTodo)
    nextTodo[field] = event.target.value

    this.setState({
      nextTodo: nextTodo
    })
  }

  render(){
    return (
      <div className="container">
      <div className="col-md-4">
          <h2>Todo List</h2>
          <ol>
            { this.state.list.map((item, i) => {
              return <li key={i}>{item.name}</li>
              })
            }
          </ol>

          <input value={this.state.nextTodo.name} onChange={this.updateTodo.bind(this, 'name')} className="form-control" type="text" placeholder="Name of Task" /><br />
          <input value={this.state.nextTodo.description} onChange={this.updateTodo.bind(this, 'description')} className="form-control"  type="text" placeholder="Description" /><br />
          <button onClick={this.addTodo.bind(this)}>Add Todo</button>
      </div>
      </div>
    )
  }
}

//to clear out the imput fields after every submission:
// add to the HTML input: value={this.state.nextTodo.name} as above
//and then in the addTodo function and the this.setState add: nextTodo: {  name: '', description: '' }

export default Todos
