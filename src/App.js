import React from 'react';
import Todos from './components/Todos';
import Header from './components/style/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends React.Component {
  state = {
    todos : [
      {
        id        : uuid.v4(),
        title     : 'sleep',
        completed : false
      },
      {
        id        : uuid.v4(),
        title     : 'eat food',
        completed : false
      },
      {
        id        : uuid.v4(),
        title     : 'ride',
        completed : false
      }
    ]
  };
  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete todo item
  deleteTodo = (id) => {
    this.setState({
      todos : [ ...this.state.todos.filter((todo) => todo.id !== id) ]
    });
  };

  // Add todo item
  addTodo = (title) => {
    const newTodo = {
      id        : uuid.v4(),
      title     : title,
      completed : false
    };
    this.setState({ todos: [ ...this.state.todos, newTodo ] });
  };

  render () {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }

export default App;
