import React from "react";
import "../../styles.css";
import TodoForm from "./TodoForm";


class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: "1",
          title: "Buy Milk.",
          done: false,
          date: new Date()
        },
        {
          id: "2",
          title: "Meeting with Ali.",
          done: false,
          date: new Date()
        },
        {
          id: "3",
          title: "Tea break.",
          done: false,
          date: new Date()
        },
        {
          id: "4",
          title: "Go for a run.",
          done: false,
          date: new Date()
        }
      ]
    };
  }
  
  componentDidMount() {
    const myNewData = JSON.parse(window.localStorage.getItem('todos'));

    if(myNewData){
    this.setState({
      data: myNewData
    });
  }
  }
  onSubmitHandle(event) {
    event.preventDefault();

    this.setState({
      data: [
        ...this.state.data,
        {
          id: Date.now(),
          title: event.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });

    event.target.item.value = "";

    window.localStorage.setItem('todos', JSON.stringify(this.state.data));
  }

  onDeleteHandle() {
    let id = arguments[0];

    this.setState({
      data: this.state.data.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  removeAllTodosThatAreComplete = () => {
    this.setState({
      data: this.state.data.filter(item => !item.done)
    });
  };

  onEditHandle(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    });
  }

  onUpdateHandle(event) {
    event.preventDefault();

    this.setState({
      data: this.state.data.map(item => {
        if (item.id === this.state.id) {
          item["title"] = event.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });

    this.setState({
      edit: false
    });
  }


  onCompleteHandle() {
    let id = arguments[0];

    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          item["done"] = true;
          return item;
        }

        return item;
      })
    });
  }


  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={this.state.title}
          />
          <button className="update-add-item">Update</button>
        </form>
      );
    }
  }





  render() {
    return (
      <div>
        {this.renderEditForm()}
       <> <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>

        </form></>

        {/* <TodoForm  onSubmitHandle={this.onSubmitHandle}/> */}

        <button onClick={this.removeAllTodosThatAreComplete}>
          remove all complete todos
        </button>

        <ul>
          {this.state.data.map(item => (
            <li key={item.id} className={item.done ? "done" : "hidden"}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.title)}
              >
                Edit
              </button>
              <button onClick={this.onCompleteHandle.bind(this, item.id)}>
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default Todo;
