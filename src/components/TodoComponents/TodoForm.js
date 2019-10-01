import React from "react";


class TodoForm extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <form onSubmit={this.props.onSubmitHandle.bind(this)}>
        <input type="text" name="item" className="item" />
        <button className="btn-add-item">Add</button>
      </form>

    )
  }

}

export default TodoForm;