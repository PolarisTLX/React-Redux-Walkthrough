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
      }//,
      //list: []
    }
  }

  addTodo(event) {
    //console.log('Add TODO: ' + JSON.stringify(this.state.nextTodo))

    //THIS IS REACT ONLY WITHOUT REDUX:
    //make a copy of the existing list:
    // let list = Object.assign([], this.state.list)
    // //add the newly typed item into the list:
    // list.push(this.state.nextTodo)
    // //reset the this.state with the new list (overwrite the old list)
    // this.setState({
    //   list: list,
    //   nextTodo: {
    //     name: '',
    //     description: ''
    //   }
    // })
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
    const list = this.props.todo.todos  //this is the reducer

    return (
      <div className="container">
      <div className="col-md-4">
          <h2>Todo List</h2>
          <ol>
            { list.map((item, i) => {
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


const stateToProps = (state) => {
  return {
    //connect the todo reducer to the component
    todo: state.todo

  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

//a connected component makes this a container or "smart" component
export default connect(stateToProps, dispatchToProps)(Todos)
