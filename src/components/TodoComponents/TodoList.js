// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul>
              <li key={this.props.key} className={this.props.done ? "done" : "hidden"}>
                {this.props.title}
                <button onClick={this.props.onDeleteHandle}>
                  Delete
                </button>
                <button
                  onClick={this.props.onEditHandle}
                >
                  Edit
                </button>
                <button onClick={this.props.onCompleteHandle}>
                  Complete
                </button>
              </li>
          </ul>
        )
    }
}


export default TodoList;