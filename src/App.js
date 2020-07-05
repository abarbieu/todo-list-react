import React from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import Header from './components/style/Header';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends React.Component {
  state = {
    todos : []
  };

  componentDidMount () {
    axios.get('https://abarbieux.com:54321/api/api/').then((res) => {
      console.log(res.data);
    });
    axios.get('https://abarbieux.com:54321/api/todos').then((res) => {
      this.setState({
        todos : res.data
      });
    });
  }

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
    axios.delete(`https://abarbieux.com:54321/api/todos/${id}`).then((res) => {
      console.log('deleted data: ' + res.data);
    });
    this.setState({
      todos : [ ...this.state.todos.filter((todo) => todo.id !== id) ]
    });
  };

  // Add todo item
  addTodo = (title) => {
    let newTodo = {};
    axios
      .post('https://abarbieux.com:54321/api/todos/', {
        title    : title,
        complete : false
      })
      .then((res) => {
        newTodo = res.data;
        console.log(newTodo);

        this.setState({ todos: [ ...this.state.todos, newTodo ] });
      });
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
